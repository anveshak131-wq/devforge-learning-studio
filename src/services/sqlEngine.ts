import initSqlJs, { Database, SqlJsStatic } from 'sql.js';

let SQLModule: SqlJsStatic | null = null;
let sqlInitPromise: Promise<SqlJsStatic> | null = null;

export async function getSqlJs(): Promise<SqlJsStatic> {
  if (SQLModule) return SQLModule;
  if (!sqlInitPromise) {
    sqlInitPromise = initSqlJs({
      locateFile: (file) => `/${file}`
    }).then((sql) => {
      SQLModule = sql;
      return sql;
    });
  }
  return sqlInitPromise;
}

export interface SqlQueryResult {
  columns: string[];
  values: any[][];
}

export interface TableSchema {
  name: string;
  columns: {
    cid: number;
    name: string;
    type: string;
    notnull: number;
    dflt_value: any;
    pk: number;
  }[];
  rowCount: number;
}

export class SqlSession {
  private db: Database | null = null;

  async init(initialSqlSchema?: string) {
    const SQL = await getSqlJs();
    this.db = new SQL.Database();
    if (initialSqlSchema && initialSqlSchema.trim()) {
      try {
        this.db.run(initialSqlSchema);
      } catch (err: any) {
        console.error('Failed to initialize SQL schema:', err);
        throw new Error(`Schema Initialization Error: ${err.message}`);
      }
    }
  }

  runQuery(query: string): SqlQueryResult[] {
    if (!this.db) {
      throw new Error('Database not initialized');
    }
    const cleanQuery = query.trim();
    if (!cleanQuery) return [];

    try {
      const results = this.db.exec(cleanQuery);
      return results.map(r => ({
        columns: r.columns,
        values: r.values
      }));
    } catch (err: any) {
      throw new Error(err.message || 'SQL Execution error');
    }
  }

  getSchema(): TableSchema[] {
    if (!this.db) return [];
    try {
      const tablesResult = this.db.exec("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name;");
      if (!tablesResult.length || !tablesResult[0].values) return [];

      const tableNames = tablesResult[0].values.map(row => String(row[0]));
      const schemas: TableSchema[] = [];

      for (const tableName of tableNames) {
        const infoResult = this.db.exec(`PRAGMA table_info("${tableName}");`);
        const countResult = this.db.exec(`SELECT COUNT(*) FROM "${tableName}";`);
        const rowCount = countResult.length && countResult[0].values.length ? Number(countResult[0].values[0][0]) : 0;

        const columns = infoResult.length ? infoResult[0].values.map(row => ({
          cid: Number(row[0]),
          name: String(row[1]),
          type: String(row[2]),
          notnull: Number(row[3]),
          dflt_value: row[4],
          pk: Number(row[5])
        })) : [];

        schemas.push({
          name: tableName,
          columns,
          rowCount
        });
      }

      return schemas;
    } catch (err) {
      console.error('Error fetching schema:', err);
      return [];
    }
  }

  exportBinary(): Uint8Array | null {
    if (!this.db) return null;
    return this.db.export();
  }

  close() {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }
}
