/**
 * IndexedDB storage service for local presentation slides (PDF/PPT)
 * Allows storing large slide decks (10MB-100MB+) locally without hitting localStorage limits.
 */

const DB_NAME = 'DevForge_MediaVault_v1';
const DB_VERSION = 1;
const STORE_NAME = 'slides_store';

interface StoredSlideRecord {
  id: string; // key (usually lessonId or a unique slide file id)
  blob: Blob;
  name: string;
  size: number;
  type: string;
  updatedAt: string;
}

export class SlideStorageService {
  private static dbPromise: Promise<IDBDatabase> | null = null;
  private static blobUrlCache: Map<string, string> = new Map();

  /**
   * Initializes or returns active IndexedDB instance
   */
  private static async getDB(): Promise<IDBDatabase> {
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      if (typeof window === 'undefined' || !window.indexedDB) {
        reject(new Error('IndexedDB is not supported in this environment.'));
        return;
      }

      const request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        }
      };

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });

    return this.dbPromise;
  }

  /**
   * Save an uploaded slide presentation file (PDF or PPT)
   */
  static async saveSlideFile(
    id: string,
    file: File | Blob,
    metadata?: { name?: string; size?: number; type?: string }
  ): Promise<{ success: boolean; blobUrl?: string; error?: string }> {
    try {
      const db = await this.getDB();
      const record: StoredSlideRecord = {
        id,
        blob: file,
        name: metadata?.name || (file instanceof File ? file.name : 'presentation.pdf'),
        size: metadata?.size || file.size,
        type: metadata?.type || file.type || 'application/pdf',
        updatedAt: new Date().toISOString()
      };

      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const req = store.put(record);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });

      // Clear old cached blob URL if existed
      if (this.blobUrlCache.has(id)) {
        try {
          URL.revokeObjectURL(this.blobUrlCache.get(id)!);
        } catch {}
        this.blobUrlCache.delete(id);
      }

      const blobUrl = URL.createObjectURL(file);
      this.blobUrlCache.set(id, blobUrl);

      return { success: true, blobUrl };
    } catch (err: any) {
      console.error('SlideStorageService.saveSlideFile failed:', err);
      return { success: false, error: err?.message || 'Failed to save slide file to storage.' };
    }
  }

  /**
   * Retrieve a stored slide presentation file
   */
  static async getSlideFile(id: string): Promise<StoredSlideRecord | null> {
    try {
      const db = await this.getDB();
      return new Promise<StoredSlideRecord | null>((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.get(id);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => reject(req.error);
      });
    } catch (err) {
      console.warn('SlideStorageService.getSlideFile error:', err);
      return null;
    }
  }

  /**
   * Get an active Object URL for streaming the PDF/Slide deck to an iframe or player
   */
  static async getSlideBlobUrl(id: string): Promise<string | null> {
    if (this.blobUrlCache.has(id)) {
      return this.blobUrlCache.get(id)!;
    }

    const record = await this.getSlideFile(id);
    if (!record || !record.blob) return null;

    const url = URL.createObjectURL(record.blob);
    this.blobUrlCache.set(id, url);
    return url;
  }

  /**
   * Delete an uploaded slide file from local storage
   */
  static async deleteSlideFile(id: string): Promise<boolean> {
    try {
      if (this.blobUrlCache.has(id)) {
        try {
          URL.revokeObjectURL(this.blobUrlCache.get(id)!);
        } catch {}
        this.blobUrlCache.delete(id);
      }

      const db = await this.getDB();
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const req = store.delete(id);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });

      return true;
    } catch (err) {
      console.error('SlideStorageService.deleteSlideFile failed:', err);
      return false;
    }
  }

  /**
   * Check if a slide file exists in storage
   */
  static async hasSlideFile(id: string): Promise<boolean> {
    const record = await this.getSlideFile(id);
    return record !== null;
  }
}
