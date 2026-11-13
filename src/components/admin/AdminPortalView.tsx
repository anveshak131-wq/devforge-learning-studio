import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Save, 
  Play, 
  Trash2, 
  Plus, 
  RotateCcw, 
  Video, 
  ExternalLink, 
  Eye, 
  Download, 
  Upload, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  BookOpen, 
  Users, 
  Code2, 
  Film, 
  Key, 
  RefreshCw,
  Clock,
  Award,
  Sparkles,
  ChevronRight,
  LogOut,
  FolderPlus,
  HelpCircle,
  FileText
} from 'lucide-react';
import { Track, Lesson, WorkedExampleItem, Difficulty, TierLevel } from '../../types';
import { User, AdminAuditLog } from '../../types/auth';
import { CourseStorageService } from '../../services/courseStorageService';
import { AdminSecurityService } from '../../services/adminSecurityService';
import { AuthService } from '../../services/authService';
import { LanguageIcon } from '../common/LanguageIcon';
import { YouTubePlayer } from '../video/YouTubePlayer';
import { isValidYoutubeUrl, extractYoutubeId } from '../../utils/youtube';

interface AdminPortalViewProps {
  onNavigateLesson: (trackSlug: string, lessonId: string) => void;
  onCloseAdmin: () => void;
  targetLessonId?: string;
  targetTrackSlug?: string;
}

export const AdminPortalView: React.FC<AdminPortalViewProps> = ({
  onNavigateLesson,
  onCloseAdmin,
  targetLessonId,
  targetTrackSlug
}) => {
  const [activeTab, setActiveTab] = useState<'editor' | 'video_studio' | 'security' | 'backup'>('editor');
  const [tracks, setTracks] = useState<Track[]>(() => CourseStorageService.getTracks());
  const [selectedTrackId, setSelectedTrackId] = useState<string>(targetTrackSlug || tracks[0]?.id || 'javascript');
  const [selectedLessonId, setSelectedLessonId] = useState<string>(targetLessonId || tracks[0]?.lessons[0]?.id || '');
  const [moduleFilter, setModuleFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Lesson form state
  const [formData, setFormData] = useState<Lesson | null>(null);
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);

  // New topic modal state
  const [isNewTopicModalOpen, setIsNewTopicModalOpen] = useState(false);
  const [newTopicCategory, setNewTopicCategory] = useState('');
  const [newTopicTitle, setNewTopicTitle] = useState('');

  // Security tab state
  const [usersList, setUsersList] = useState<User[]>(() => AuthService.getAllUsersList());
  const [auditLogs, setAuditLogs] = useState<AdminAuditLog[]>(() => AdminSecurityService.getAuditLogs());
  const [oldMasterKey, setOldMasterKey] = useState('');
  const [newMasterKey, setNewMasterKey] = useState('');
  const [keyChangeStatus, setKeyChangeStatus] = useState<string | null>(null);

  const currentUser = AuthService.getCurrentUser();
  const currentSession = AdminSecurityService.getActiveSession();

  // Show auto-dismissing toast
  const showToast = (text: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Sync with CourseStorageService
  useEffect(() => {
    const unsubscribe = CourseStorageService.subscribe(() => {
      setTracks(CourseStorageService.getTracks());
      setAuditLogs(AdminSecurityService.getAuditLogs());
    });
    return () => unsubscribe();
  }, []);

  const currentTrack = tracks.find(t => t.id === selectedTrackId || t.slug === selectedTrackId) || tracks[0];

  // Modules in current track
  const modulesInTrack = Array.from(new Set(currentTrack.lessons.map(l => l.category)));

  // Filter lessons
  const filteredLessons = currentTrack.lessons.filter(l => {
    if (moduleFilter !== 'all' && l.category !== moduleFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return l.title.toLowerCase().includes(q) || l.description.toLowerCase().includes(q);
    }
    return true;
  });

  // Load selected lesson into form
  useEffect(() => {
    const found = currentTrack.lessons.find(l => l.id === selectedLessonId);
    if (found) {
      setFormData(JSON.parse(JSON.stringify(found)));
    } else if (filteredLessons.length > 0) {
      setSelectedLessonId(filteredLessons[0].id);
      setFormData(JSON.parse(JSON.stringify(filteredLessons[0])));
    }
  }, [selectedLessonId, selectedTrackId]);

  // Handle Save
  const handleSaveLesson = () => {
    if (!formData) return;
    const adminEmail = currentSession?.adminEmail || currentUser?.email || 'admin@devforge.academy';
    const success = CourseStorageService.saveLesson(currentTrack.id, formData, adminEmail);
    if (success) {
      showToast(`Topic "${formData.title}" successfully saved and updated in live courses!`, 'success');
      AdminSecurityService.touchSession();
    } else {
      showToast('Failed to save topic changes.', 'error');
    }
  };

  // Handle Revert
  const handleRevertLesson = () => {
    if (!formData) return;
    if (window.confirm(`Revert "${formData.title}" back to factory defaults? All custom changes to this topic will be undone.`)) {
      const adminEmail = currentSession?.adminEmail || currentUser?.email || 'admin@devforge.academy';
      CourseStorageService.resetLesson(currentTrack.id, formData.id, adminEmail);
      showToast(`Topic reverted to original defaults.`, 'info');
      // Reload
      const fresh = CourseStorageService.getLessonById(formData.id);
      if (fresh) setFormData(JSON.parse(JSON.stringify(fresh.lesson)));
    }
  };

  // Handle Delete
  const handleDeleteLesson = () => {
    if (!formData) return;
    if (window.confirm(`Are you sure you want to delete topic "${formData.title}"? Learners will no longer see this topic.`)) {
      const adminEmail = currentSession?.adminEmail || currentUser?.email || 'admin@devforge.academy';
      CourseStorageService.deleteLesson(currentTrack.id, formData.id, adminEmail);
      showToast(`Topic deleted successfully.`, 'info');
      // Select next lesson
      const remaining = currentTrack.lessons.filter(l => l.id !== formData.id);
      if (remaining.length > 0) {
        setSelectedLessonId(remaining[0].id);
      }
    }
  };

  // Handle Create New Topic
  const handleCreateNewTopic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTopicTitle.trim()) return;

    const slug = 'custom-' + newTopicTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newLesson: Lesson = {
      id: `${currentTrack.language}-${slug}-${Date.now().toString(36)}`,
      title: newTopicTitle.trim(),
      slug,
      language: currentTrack.language,
      category: newTopicCategory || modulesInTrack[0] || 'Core Concepts',
      difficulty: 'Intermediate',
      tier: 2,
      tierName: 'Core',
      estimatedMinutes: 5,
      xp: 25,
      description: `Comprehensive hands-on lesson on ${newTopicTitle.trim()}.`,
      concepts: [newTopicTitle.trim()],
      explanationMarkdown: `### ${newTopicTitle.trim()}\n\nWrite your topic explanation and code breakdown here.\n\n\`\`\`${currentTrack.language}\n// Example code\n\`\`\``,
      analogy: 'Imagine a versatile workshop tool calibrated specifically for this task.',
      workedExample: {
        title: `Worked Example: ${newTopicTitle.trim()}`,
        code: `// Sample implementation\n`,
        explanation: 'Step-by-step breakdown of how this code works.',
        expectedOutput: 'Executed successfully'
      },
      initialCode: `// Starter code for student\n`,
      solutionCode: `// Solution code\n`,
      exerciseSteps: [
        `Review the instructions for ${newTopicTitle.trim()}.`,
        'Type your code in the editor.',
        'Run the code and check your answer.'
      ],
      hints: ['Review the worked example above for guidance.'],
      testCases: [
        {
          id: 'tc-1',
          description: `Verify correct execution of ${newTopicTitle.trim()}`,
          testFn: 'code.length > 0'
        }
      ]
    };

    const adminEmail = currentSession?.adminEmail || currentUser?.email || 'admin@devforge.academy';
    CourseStorageService.addLesson(currentTrack.id, newLesson, adminEmail);
    showToast(`New topic "${newLesson.title}" created successfully!`, 'success');
    setSelectedLessonId(newLesson.id);
    setIsNewTopicModalOpen(false);
    setNewTopicTitle('');
  };

  // Extra Worked Examples Helpers
  const handleAddExtraExample = () => {
    if (!formData) return;
    const newEx: WorkedExampleItem = {
      title: `Additional Example ${(formData.additionalExamples?.length || 0) + 2}`,
      code: `// Extra worked example code\n`,
      explanation: 'Detailed walkthrough of this pattern.',
      expectedOutput: 'Success'
    };
    setFormData({
      ...formData,
      additionalExamples: [...(formData.additionalExamples || []), newEx]
    });
  };

  const handleUpdateExtraExample = (index: number, updated: Partial<WorkedExampleItem>) => {
    if (!formData || !formData.additionalExamples) return;
    const list = [...formData.additionalExamples];
    list[index] = { ...list[index], ...updated };
    setFormData({ ...formData, additionalExamples: list });
  };

  const handleRemoveExtraExample = (index: number) => {
    if (!formData || !formData.additionalExamples) return;
    const list = formData.additionalExamples.filter((_, i) => i !== index);
    setFormData({ ...formData, additionalExamples: list });
  };

  // Master Key Change
  const handleChangeMasterKey = (e: React.FormEvent) => {
    e.preventDefault();
    const adminEmail = currentSession?.adminEmail || currentUser?.email || 'admin@devforge.academy';
    const res = AdminSecurityService.setMasterKey(oldMasterKey, newMasterKey, adminEmail);
    if (res.success) {
      setKeyChangeStatus('Master Security Key updated successfully.');
      setOldMasterKey('');
      setNewMasterKey('');
      showToast('Master Security Key updated.', 'success');
    } else {
      setKeyChangeStatus(res.error || 'Failed to update Master Key.');
    }
  };

  // Export / Import
  const handleExportData = () => {
    const json = CourseStorageService.exportCurriculum();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `devforge-curriculum-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Curriculum backup exported as JSON file.', 'success');
  };

  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const res = CourseStorageService.importCurriculum(content, currentSession?.adminEmail || 'admin');
      if (res.success) {
        showToast('Curriculum backup imported successfully!', 'success');
      } else {
        showToast(res.error || 'Failed to import curriculum.', 'error');
      }
    };
    reader.readAsText(file);
  };

  const stats = CourseStorageService.getStats();

  return (
    <div className="h-[calc(100vh-3.5rem)] flex flex-col bg-slate-950 font-sans text-slate-100 overflow-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <div className={`fixed top-16 right-6 z-50 px-4 py-2.5 rounded-xl shadow-2xl border text-xs font-semibold flex items-center space-x-2 animate-bounce ${
          toastMessage.type === 'success' 
            ? 'bg-emerald-950 border-emerald-500/40 text-emerald-200' 
            : toastMessage.type === 'error'
            ? 'bg-rose-950 border-rose-500/40 text-rose-200'
            : 'bg-indigo-950 border-indigo-500/40 text-indigo-200'
        }`}>
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Admin Top Banner */}
      <div className="bg-slate-900 border-b border-slate-800 px-6 py-3 flex flex-wrap items-center justify-between gap-4 shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 p-[1px] shadow-lg shadow-amber-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-extrabold text-white text-base tracking-tight">
                DevForge Admin Studio
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                SUPER ADMIN
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Curriculum Authoring, Real-World Analogies, YouTube Studio & High-Security RBAC
            </p>
          </div>
        </div>

        {/* Global Stats Counter */}
        <div className="flex items-center space-x-4 text-xs font-mono">
          <div className="hidden md:flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-slate-400">Tracks:</span>
            <span className="text-white font-bold">{tracks.length}</span>
          </div>

          <div className="hidden md:flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800">
            <Film className="w-3.5 h-3.5 text-red-400" />
            <span className="text-slate-400">Videos:</span>
            <span className="text-white font-bold">{stats.videoCount}</span>
          </div>

          <div className="hidden md:flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800">
            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-400">Custom Edits:</span>
            <span className="text-white font-bold">{stats.modifiedCount + stats.newCount}</span>
          </div>

          <button
            onClick={() => {
              AdminSecurityService.destroySession();
              onCloseAdmin();
            }}
            className="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold flex items-center space-x-1.5 transition"
            title="Lock Admin Portal and terminate session token"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Lock Portal</span>
          </button>
        </div>
      </div>

      {/* Admin Primary Navigation Tabs */}
      <div className="bg-slate-900/60 border-b border-slate-800 px-6 flex items-center space-x-1 shrink-0 overflow-x-auto">
        <button
          onClick={() => setActiveTab('editor')}
          className={`px-4 py-2.5 text-xs font-bold flex items-center space-x-2 border-b-2 transition ${
            activeTab === 'editor'
              ? 'border-indigo-500 text-white bg-slate-800/40'
              : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800/20'
          }`}
        >
          <BookOpen className="w-4 h-4 text-indigo-400" />
          <span>Curriculum & Topic Editor</span>
        </button>

        <button
          onClick={() => setActiveTab('video_studio')}
          className={`px-4 py-2.5 text-xs font-bold flex items-center space-x-2 border-b-2 transition ${
            activeTab === 'video_studio'
              ? 'border-red-500 text-white bg-slate-800/40'
              : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800/20'
          }`}
        >
          <Film className="w-4 h-4 text-red-400" />
          <span>Video Studio & YouTube Hub</span>
        </button>

        <button
          onClick={() => setActiveTab('security')}
          className={`px-4 py-2.5 text-xs font-bold flex items-center space-x-2 border-b-2 transition ${
            activeTab === 'security'
              ? 'border-amber-500 text-white bg-slate-800/40'
              : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800/20'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Security & Audit Logs</span>
        </button>

        <button
          onClick={() => setActiveTab('backup')}
          className={`px-4 py-2.5 text-xs font-bold flex items-center space-x-2 border-b-2 transition ${
            activeTab === 'backup'
              ? 'border-cyan-500 text-white bg-slate-800/40'
              : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800/20'
          }`}
        >
          <Download className="w-4 h-4 text-cyan-400" />
          <span>Backup & Restore</span>
        </button>
      </div>

      {/* TAB CONTENT */}
      <div className="flex-1 overflow-hidden">
        {/* ================================================================= */}
        {/* TAB 1: CURRICULUM & TOPIC EDITOR */}
        {/* ================================================================= */}
        {activeTab === 'editor' && (
          <div className="h-full flex flex-col md:flex-row overflow-hidden">
            {/* Left Sidebar: Track & Lesson Selector */}
            <div className="w-full md:w-80 lg:w-96 border-r border-slate-800 bg-slate-900/50 flex flex-col h-full shrink-0">
              {/* Track Selector Bar */}
              <div className="p-3 border-b border-slate-800 space-y-2 bg-slate-900/80">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Select Course Track ({tracks.length})
                </label>
                <div className="relative">
                  <select
                    value={selectedTrackId}
                    onChange={e => {
                      setSelectedTrackId(e.target.value);
                      setModuleFilter('all');
                    }}
                    className="w-full bg-slate-950 text-white text-xs font-semibold rounded-xl px-3 py-2 border border-slate-800 focus:outline-none focus:border-indigo-500 appearance-none pr-8 cursor-pointer"
                  >
                    {tracks.map(t => (
                      <option key={t.id} value={t.id}>
                        {t.title} ({t.lessons.length} topics)
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    ▼
                  </div>
                </div>

                {/* Filter and New Topic Row */}
                <div className="flex items-center space-x-2 pt-1">
                  <select
                    value={moduleFilter}
                    onChange={e => setModuleFilter(e.target.value)}
                    className="flex-1 bg-slate-950 text-slate-300 text-[11px] rounded-lg px-2.5 py-1.5 border border-slate-800 focus:outline-none"
                  >
                    <option value="all">All Modules ({modulesInTrack.length})</option>
                    {modulesInTrack.map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>

                  <button
                    onClick={() => {
                      setNewTopicCategory(moduleFilter === 'all' ? modulesInTrack[0] || 'Core Concepts' : moduleFilter);
                      setIsNewTopicModalOpen(true);
                    }}
                    className="px-2.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold flex items-center space-x-1 shrink-0 shadow-md shadow-indigo-600/30 transition"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>New Topic</span>
                  </button>
                </div>

                {/* Search in track */}
                <div className="relative pt-1">
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2 mt-0.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder={`Search in ${currentTrack.title.split(':')[0]}...`}
                    className="w-full bg-slate-950 text-white text-xs rounded-lg pl-8 pr-3 py-1.5 border border-slate-800 focus:outline-none focus:border-indigo-500 placeholder-slate-500"
                  />
                </div>
              </div>

              {/* Topics List in Track */}
              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {filteredLessons.map(lesson => {
                  const isSelected = lesson.id === selectedLessonId;
                  const isModified = CourseStorageService.isLessonModified(lesson.id);
                  const hasVideo = !!lesson.videoUrl;
                  const hasExtraExamples = !!(lesson.additionalExamples && lesson.additionalExamples.length > 0);

                  return (
                    <div
                      key={lesson.id}
                      onClick={() => setSelectedLessonId(lesson.id)}
                      className={`p-2.5 rounded-xl border text-left cursor-pointer transition flex items-start justify-between space-x-2 group ${
                        isSelected
                          ? 'bg-indigo-600/20 border-indigo-500/60 shadow-md shadow-indigo-600/10'
                          : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center space-x-1.5 flex-wrap gap-y-1">
                          <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded font-mono ${
                            isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                          }`}>
                            T{lesson.tier}
                          </span>

                          {hasVideo && (
                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-red-500/20 text-red-400 border border-red-500/30 flex items-center space-x-0.5">
                              <Film className="w-2.5 h-2.5" />
                              <span>Video</span>
                            </span>
                          )}

                          {hasExtraExamples && (
                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                              +Examples
                            </span>
                          )}

                          {isModified && (
                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                              Customized
                            </span>
                          )}
                        </div>

                        <h4 className="text-xs font-semibold text-white truncate mt-1 group-hover:text-indigo-300 transition">
                          {lesson.title}
                        </h4>
                        <p className="text-[10px] text-slate-400 truncate mt-0.5">
                          {lesson.category}
                        </p>
                      </div>

                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 mt-1 transition ${
                        isSelected ? 'text-indigo-400' : 'text-slate-600 group-hover:text-slate-400'
                      }`} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Main Editor Area */}
            <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-950">
              {formData ? (
                <>
                  {/* Topic Action Bar */}
                  <div className="px-6 py-3 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1.5">
                        <LanguageIcon language={formData.language} className="w-5 h-5" />
                        <span className="text-sm font-bold text-white truncate max-w-xs sm:max-w-md">
                          {formData.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                        ID: {formData.id}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onNavigateLesson(currentTrack.slug, formData.id)}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center space-x-1.5 transition border border-slate-700"
                        title="View how students see this lesson in the interactive workspace"
                      >
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Preview Live</span>
                      </button>

                      <button
                        onClick={handleRevertLesson}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center space-x-1.5 transition border border-slate-700"
                        title="Revert back to platform original"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                        <span>Revert Defaults</span>
                      </button>

                      <button
                        onClick={handleDeleteLesson}
                        className="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-semibold flex items-center space-x-1.5 transition border border-rose-500/30"
                        title="Delete topic from track"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>

                      <button
                        onClick={handleSaveLesson}
                        className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow-lg shadow-emerald-600/30"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>Save Changes</span>
                      </button>
                    </div>
                  </div>

                  {/* Form Fields Scrollable Area */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-8 max-w-5xl">
                    {/* SECTION 1: YOUTUBE VIDEO INTEGRATION */}
                    <div className="p-5 rounded-2xl bg-slate-900/70 border border-red-500/30 space-y-4 shadow-xl">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="w-7 h-7 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
                            <Film className="w-4 h-4" />
                          </span>
                          <div>
                            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                              <span>Course Video Lecture (YouTube Integration)</span>
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/10 text-red-400 border border-red-500/20">
                                YouTube Player
                              </span>
                            </h3>
                            <p className="text-[11px] text-slate-400">
                              Record a walkthrough for this topic, upload to YouTube (Public or Unlisted), and paste the link below.
                            </p>
                          </div>
                        </div>

                        {formData.videoUrl && isValidYoutubeUrl(formData.videoUrl) && (
                          <span className="text-xs text-emerald-400 font-semibold flex items-center space-x-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Valid YouTube Stream</span>
                          </span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-slate-300">
                          YouTube Video URL or Video ID
                        </label>
                        <div className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={formData.videoUrl || ''}
                            onChange={e => setFormData({ ...formData, videoUrl: e.target.value })}
                            placeholder="e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ or youtu.be/VIDEO_ID"
                            className="flex-1 bg-slate-950 text-white text-xs rounded-xl px-3.5 py-2.5 border border-slate-800 focus:outline-none focus:border-red-500 font-mono"
                          />
                          {formData.videoUrl && (
                            <button
                              onClick={() => setFormData({ ...formData, videoUrl: '' })}
                              className="px-3 py-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white text-xs"
                            >
                              Clear
                            </button>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500">
                          Supports full YouTube URLs, short <code className="text-cyan-300">youtu.be</code> links, YouTube Shorts, or raw 11-character video IDs.
                        </p>
                      </div>

                      {/* Live Video Preview in Editor */}
                      {formData.videoUrl && (
                        <div className="pt-2">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                            Live Stream Player Preview
                          </span>
                          <YouTubePlayer
                            url={formData.videoUrl}
                            title={`${formData.title} Lecture Preview`}
                            className="max-w-2xl"
                          />
                        </div>
                      )}
                    </div>

                    {/* SECTION 2: CORE METADATA */}
                    <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                      <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                        <Layers className="w-4 h-4 text-indigo-400" />
                        <span>Core Topic Metadata</span>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Topic Title
                          </label>
                          <input
                            type="text"
                            value={formData.title}
                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                            className="w-full bg-slate-950 text-white text-xs rounded-xl px-3.5 py-2.5 border border-slate-800 focus:outline-none focus:border-indigo-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Module / Category
                          </label>
                          <input
                            type="text"
                            value={formData.category}
                            onChange={e => setFormData({ ...formData, category: e.target.value })}
                            className="w-full bg-slate-950 text-white text-xs rounded-xl px-3.5 py-2.5 border border-slate-800 focus:outline-none focus:border-indigo-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Difficulty Level
                          </label>
                          <select
                            value={formData.difficulty}
                            onChange={e => setFormData({ ...formData, difficulty: e.target.value as Difficulty })}
                            className="w-full bg-slate-950 text-white text-xs rounded-xl px-3.5 py-2.5 border border-slate-800 focus:outline-none focus:border-indigo-500"
                          >
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                            <option value="Expert">Expert</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Skill Tier (1-5)
                          </label>
                          <select
                            value={formData.tier}
                            onChange={e => {
                              const t = parseInt(e.target.value) as TierLevel;
                              const names = ['Foundations', 'Core', 'Intermediate', 'Advanced', 'Masterclass'] as const;
                              setFormData({ ...formData, tier: t, tierName: names[t - 1] });
                            }}
                            className="w-full bg-slate-950 text-white text-xs rounded-xl px-3.5 py-2.5 border border-slate-800 focus:outline-none focus:border-indigo-500 font-mono"
                          >
                            <option value={1}>Tier 1: Foundations (Zero-to-One)</option>
                            <option value={2}>Tier 2: Core Concepts</option>
                            <option value={3}>Tier 3: Intermediate Mastery</option>
                            <option value={4}>Tier 4: Advanced Architecture</option>
                            <option value={5}>Tier 5: Masterclass & Systems Capstone</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Estimated Time (Minutes)
                          </label>
                          <input
                            type="number"
                            value={formData.estimatedMinutes}
                            onChange={e => setFormData({ ...formData, estimatedMinutes: parseInt(e.target.value) || 5 })}
                            className="w-full bg-slate-950 text-white text-xs rounded-xl px-3.5 py-2.5 border border-slate-800 focus:outline-none focus:border-indigo-500 font-mono"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            XP Reward Points
                          </label>
                          <input
                            type="number"
                            value={formData.xp}
                            onChange={e => setFormData({ ...formData, xp: parseInt(e.target.value) || 25 })}
                            className="w-full bg-slate-950 text-white text-xs rounded-xl px-3.5 py-2.5 border border-slate-800 focus:outline-none focus:border-indigo-500 font-mono"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Brief Topic Summary
                        </label>
                        <input
                          type="text"
                          value={formData.description}
                          onChange={e => setFormData({ ...formData, description: e.target.value })}
                          className="w-full bg-slate-950 text-white text-xs rounded-xl px-3.5 py-2.5 border border-slate-800 focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    {/* SECTION 3: REAL-WORLD INTUITIVE ANALOGY */}
                    <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <h3 className="text-sm font-bold text-white">
                          Real-Life Intuitive Analogy
                        </h3>
                        <span className="text-[10px] text-slate-400 font-normal">
                          (Crucial for beginner comprehension)
                        </span>
                      </div>
                      <textarea
                        rows={3}
                        value={formData.analogy || ''}
                        onChange={e => setFormData({ ...formData, analogy: e.target.value })}
                        placeholder="e.g. A database table is like a clean Excel spreadsheet where every row is a person and every column is an attribute..."
                        className="w-full bg-slate-950 text-white text-xs rounded-xl p-3 border border-slate-800 focus:outline-none focus:border-indigo-500 leading-relaxed italic"
                      />
                    </div>

                    {/* SECTION 4: CONCEPTUAL EXPLANATION (MARKDOWN) */}
                    <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-cyan-400" />
                          <h3 className="text-sm font-bold text-white">
                            Conceptual Explanation (Markdown & Code Blocks)
                          </h3>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono">
                          Supports Markdown & ```code blocks
                        </span>
                      </div>
                      <textarea
                        rows={8}
                        value={formData.explanationMarkdown}
                        onChange={e => setFormData({ ...formData, explanationMarkdown: e.target.value })}
                        className="w-full bg-slate-950 text-cyan-300 font-mono text-xs rounded-xl p-3 border border-slate-800 focus:outline-none focus:border-indigo-500 leading-relaxed"
                      />
                    </div>

                    {/* SECTION 5: WORKED EXAMPLES MANAGER */}
                    <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4 text-indigo-400" />
                          <h3 className="text-sm font-bold text-white">
                            Worked Examples (Run-Ready Code & Explanation)
                          </h3>
                        </div>
                        <button
                          onClick={handleAddExtraExample}
                          className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center space-x-1.5 transition shadow"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add More Examples</span>
                        </button>
                      </div>

                      {/* Primary Worked Example */}
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-indigo-300">
                            Primary Worked Example
                          </span>
                          <span className="text-[10px] text-emerald-400 font-mono">Required</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                              Example Title
                            </label>
                            <input
                              type="text"
                              value={formData.workedExample?.title || ''}
                              onChange={e => setFormData({
                                ...formData,
                                workedExample: {
                                  title: e.target.value,
                                  code: formData.workedExample?.code || '',
                                  explanation: formData.workedExample?.explanation || '',
                                  expectedOutput: formData.workedExample?.expectedOutput || 'Success'
                                }
                              })}
                              className="w-full bg-slate-900 text-white text-xs rounded-lg px-3 py-2 border border-slate-800 focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                              Expected Console Output
                            </label>
                            <input
                              type="text"
                              value={formData.workedExample?.expectedOutput || ''}
                              onChange={e => setFormData({
                                ...formData,
                                workedExample: {
                                  title: formData.workedExample?.title || '',
                                  code: formData.workedExample?.code || '',
                                  explanation: formData.workedExample?.explanation || '',
                                  expectedOutput: e.target.value
                                }
                              })}
                              className="w-full bg-slate-900 text-amber-300 font-mono text-xs rounded-lg px-3 py-2 border border-slate-800 focus:outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                            Runnable Example Code
                          </label>
                          <textarea
                            rows={4}
                            value={formData.workedExample?.code || ''}
                            onChange={e => setFormData({
                              ...formData,
                              workedExample: {
                                title: formData.workedExample?.title || '',
                                code: e.target.value,
                                explanation: formData.workedExample?.explanation || '',
                                expectedOutput: formData.workedExample?.expectedOutput || 'Success'
                              }
                            })}
                            className="w-full bg-slate-900 text-emerald-300 font-mono text-xs rounded-lg p-3 border border-slate-800 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                            How It Works Explanation
                          </label>
                          <textarea
                            rows={2}
                            value={formData.workedExample?.explanation || ''}
                            onChange={e => setFormData({
                              ...formData,
                              workedExample: {
                                title: formData.workedExample?.title || '',
                                code: formData.workedExample?.code || '',
                                explanation: e.target.value,
                                expectedOutput: formData.workedExample?.expectedOutput || 'Success'
                              }
                            })}
                            className="w-full bg-slate-900 text-slate-300 text-xs rounded-lg p-2.5 border border-slate-800 focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Additional Worked Examples List */}
                      {formData.additionalExamples && formData.additionalExamples.map((ex, exIdx) => (
                        <div key={exIdx} className="p-4 rounded-xl bg-slate-950/80 border border-indigo-500/30 space-y-3 relative">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-cyan-300 flex items-center space-x-1.5">
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>Additional Example #{exIdx + 2}</span>
                            </span>
                            <button
                              onClick={() => handleRemoveExtraExample(exIdx)}
                              className="text-xs text-rose-400 hover:text-rose-300 flex items-center space-x-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Remove</span>
                            </button>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                                Example Title
                              </label>
                              <input
                                type="text"
                                value={ex.title}
                                onChange={e => handleUpdateExtraExample(exIdx, { title: e.target.value })}
                                className="w-full bg-slate-900 text-white text-xs rounded-lg px-3 py-2 border border-slate-800 focus:outline-none"
                              />
                            </div>

                            <div>
                              <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                                Expected Output
                              </label>
                              <input
                                type="text"
                                value={ex.expectedOutput}
                                onChange={e => handleUpdateExtraExample(exIdx, { expectedOutput: e.target.value })}
                                className="w-full bg-slate-900 text-amber-300 font-mono text-xs rounded-lg px-3 py-2 border border-slate-800 focus:outline-none"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                              Executable Code
                            </label>
                            <textarea
                              rows={3}
                              value={ex.code}
                              onChange={e => handleUpdateExtraExample(exIdx, { code: e.target.value })}
                              className="w-full bg-slate-900 text-emerald-300 font-mono text-xs rounded-lg p-3 border border-slate-800 focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                              Explanation
                            </label>
                            <textarea
                              rows={2}
                              value={ex.explanation}
                              onChange={e => handleUpdateExtraExample(exIdx, { explanation: e.target.value })}
                              className="w-full bg-slate-900 text-slate-300 text-xs rounded-lg p-2.5 border border-slate-800 focus:outline-none"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* SECTION 6: CODING EXERCISE, STARTER CODE & SOLUTION */}
                    <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                      <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                        <Code2 className="w-4 h-4 text-emerald-400" />
                        <span>Interactive Exercise & Starter / Solution Code</span>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Starter Initial Code (Shown to Student)
                          </label>
                          <textarea
                            rows={8}
                            value={formData.initialCode}
                            onChange={e => setFormData({ ...formData, initialCode: e.target.value })}
                            className="w-full bg-slate-950 text-cyan-300 font-mono text-xs rounded-xl p-3 border border-slate-800 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Complete Solution Code
                          </label>
                          <textarea
                            rows={8}
                            value={formData.solutionCode}
                            onChange={e => setFormData({ ...formData, solutionCode: e.target.value })}
                            className="w-full bg-slate-950 text-emerald-300 font-mono text-xs rounded-xl p-3 border border-slate-800 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 7: TEST CASES EVALUATOR */}
                    <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                          <span>Automated Test Cases ({formData.testCases.length})</span>
                        </h3>
                        <button
                          onClick={() => {
                            const newTc = {
                              id: `tc-${formData.testCases.length + 1}`,
                              description: 'Verifies correct output or syntax',
                              testFn: "code.includes('...') || logs.length > 0"
                            };
                            setFormData({ ...formData, testCases: [...formData.testCases, newTc] });
                          }}
                          className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-white"
                        >
                          + Add Test Case
                        </button>
                      </div>

                      <div className="space-y-2">
                        {formData.testCases.map((tc, tcIdx) => (
                          <div key={tcIdx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center gap-3">
                            <input
                              type="text"
                              value={tc.description}
                              onChange={e => {
                                const list = [...formData.testCases];
                                list[tcIdx].description = e.target.value;
                                setFormData({ ...formData, testCases: list });
                              }}
                              placeholder="Test case description"
                              className="flex-1 bg-slate-900 text-xs text-white rounded-lg px-3 py-2 border border-slate-800"
                            />
                            <input
                              type="text"
                              value={tc.testFn}
                              onChange={e => {
                                const list = [...formData.testCases];
                                list[tcIdx].testFn = e.target.value;
                                setFormData({ ...formData, testCases: list });
                              }}
                              placeholder="testFn expression (e.g. code.includes('...'))"
                              className="flex-1 bg-slate-900 text-xs text-emerald-300 font-mono rounded-lg px-3 py-2 border border-slate-800"
                            />
                            <button
                              onClick={() => {
                                const list = formData.testCases.filter((_, i) => i !== tcIdx);
                                setFormData({ ...formData, testCases: list });
                              }}
                              className="text-rose-400 hover:text-rose-300 px-2 text-xs"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center p-8 text-slate-500 text-xs">
                  Select a topic from the left sidebar to start editing.
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 2: VIDEO STUDIO & YOUTUBE HUB */}
        {/* ================================================================= */}
        {activeTab === 'video_studio' && (
          <div className="h-full overflow-y-auto p-6 space-y-6 max-w-6xl mx-auto">
            {/* YouTube Studio Guide Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-red-950/40 via-slate-900 to-slate-900 border border-red-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white">
                    YouTube Studio Guide
                  </span>
                  <span className="text-xs text-slate-400">Stream Courses Seamlessly</span>
                </div>
                <h2 className="text-xl font-bold text-white">Create & Publish Videos to Courses</h2>
                <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                  Record short 2-5 minute focused concept breakdowns. Upload to your YouTube channel as <strong>Unlisted</strong> or <strong>Public</strong>, then paste the link directly into the course topics below. DevForge automatically embeds and plays them inline without ads or external interruptions.
                </p>
              </div>

              <a
                href="https://studio.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center space-x-2 transition shadow-lg shadow-red-600/30 shrink-0"
              >
                <span>Open YouTube Studio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Video Linker Table */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-white">Quick Video Linker</h3>
                  <p className="text-xs text-slate-400">Paste YouTube URLs directly across topics</p>
                </div>

                <div className="flex items-center space-x-2">
                  <select
                    value={selectedTrackId}
                    onChange={e => setSelectedTrackId(e.target.value)}
                    className="bg-slate-950 text-white text-xs font-semibold rounded-xl px-3 py-2 border border-slate-800"
                  >
                    {tracks.map(t => (
                      <option key={t.id} value={t.id}>
                        {t.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                {currentTrack.lessons.slice(0, 30).map(lesson => {
                  const hasVideo = !!lesson.videoUrl;

                  return (
                    <div
                      key={lesson.id}
                      className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-3"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded">
                            T{lesson.tier}
                          </span>
                          <h4 className="text-xs font-semibold text-white truncate">
                            {lesson.title}
                          </h4>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-0.5">{lesson.category}</p>
                      </div>

                      <div className="flex items-center space-x-2 w-full md:w-96">
                        <input
                          type="text"
                          defaultValue={lesson.videoUrl || ''}
                          onBlur={e => {
                            const val = e.target.value.trim();
                            if (val !== (lesson.videoUrl || '')) {
                              CourseStorageService.saveLesson(currentTrack.id, {
                                ...lesson,
                                videoUrl: val || undefined
                              });
                              showToast(`Video URL updated for "${lesson.title}"`, 'success');
                            }
                          }}
                          placeholder="Paste YouTube link here..."
                          className="flex-1 bg-slate-900 text-xs text-white rounded-lg px-3 py-1.5 border border-slate-800 focus:outline-none focus:border-red-500 font-mono"
                        />
                        {hasVideo && (
                          <button
                            onClick={() => onNavigateLesson(currentTrack.slug, lesson.id)}
                            className="p-1.5 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/30 text-xs"
                            title="Play in lesson view"
                          >
                            <Play className="w-3.5 h-3.5 fill-red-400" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 3: PLATFORM SECURITY & AUDIT LOGS */}
        {/* ================================================================= */}
        {activeTab === 'security' && (
          <div className="h-full overflow-y-auto p-6 space-y-6 max-w-6xl mx-auto">
            {/* Master Key Card */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center space-x-2">
                    <Key className="w-4 h-4 text-amber-400" />
                    <span>Admin Master Security Key</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    The cryptographic key required to elevate accounts and access the Admin Studio.
                  </p>
                </div>
              </div>

              <form onSubmit={handleChangeMasterKey} className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Current Master Key
                  </label>
                  <input
                    type="password"
                    value={oldMasterKey}
                    onChange={e => setOldMasterKey(e.target.value)}
                    required
                    placeholder="Enter current master key..."
                    className="w-full bg-slate-950 text-white text-xs rounded-xl px-3.5 py-2.5 border border-slate-800 focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    New Master Key (Min 8 characters)
                  </label>
                  <input
                    type="password"
                    value={newMasterKey}
                    onChange={e => setNewMasterKey(e.target.value)}
                    required
                    placeholder="Enter new strong master key..."
                    className="w-full bg-slate-950 text-white text-xs rounded-xl px-3.5 py-2.5 border border-slate-800 focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>

                <div className="md:col-span-2 flex items-center justify-between">
                  {keyChangeStatus && (
                    <span className="text-xs text-amber-400 font-medium">{keyChangeStatus}</span>
                  )}
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition ml-auto shadow-md"
                  >
                    Update Security Key
                  </button>
                </div>
              </form>
            </div>

            {/* Registered Users & Roles */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center space-x-2">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span>Registered User Accounts ({usersList.length})</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Role-Based Access Control (RBAC): Promote users to Admin or manage access.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {usersList.map(u => (
                  <div
                    key={u.id}
                    className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <img src={u.avatarUrl} alt="" className="w-8 h-8 rounded-lg bg-slate-800" />
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold text-white">{u.fullName}</span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                            u.role === 'admin'
                              ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                              : 'bg-slate-800 text-slate-400'
                          }`}>
                            {u.role.toUpperCase()}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-mono">{u.email}</span>
                      </div>
                    </div>

                    <div>
                      {u.role === 'admin' ? (
                        <button
                          onClick={() => {
                            AuthService.setUserRole(u.email, 'student');
                            setUsersList(AuthService.getAllUsersList());
                            showToast(`Demoted ${u.email} to Student`, 'info');
                          }}
                          className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs"
                        >
                          Demote to Student
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            AuthService.setUserRole(u.email, 'admin');
                            setUsersList(AuthService.getAllUsersList());
                            showToast(`Promoted ${u.email} to Admin`, 'success');
                          }}
                          className="px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold"
                        >
                          Promote to Admin
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Audit Trail */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Security & Action Audit Logs</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Immutable log of all curriculum alterations, video updates, and admin authentication challenges.
                  </p>
                </div>
                <button
                  onClick={() => {
                    AdminSecurityService.clearAuditLogs(currentUser?.email || 'admin');
                    setAuditLogs([]);
                    showToast('Audit trail cleared.', 'info');
                  }}
                  className="px-2.5 py-1 rounded bg-slate-800 text-slate-400 hover:text-white text-xs"
                >
                  Clear Logs
                </button>
              </div>

              <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
                {auditLogs.length === 0 ? (
                  <div className="p-4 text-center text-xs text-slate-500">
                    No security events recorded yet.
                  </div>
                ) : (
                  auditLogs.map(log => (
                    <div
                      key={log.id}
                      className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 flex items-start justify-between text-xs font-mono"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-2">
                          <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                            log.action === 'failed_auth'
                              ? 'bg-rose-500/20 text-rose-400'
                              : log.action === 'create_lesson'
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-indigo-500/20 text-indigo-400'
                          }`}>
                            {log.action}
                          </span>
                          <span className="text-slate-300">{log.details}</span>
                        </div>
                        <span className="text-[10px] text-slate-500">
                          By: {log.adminEmail}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 shrink-0">
                        {new Date(log.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 4: BACKUP & RESTORE */}
        {/* ================================================================= */}
        {activeTab === 'backup' && (
          <div className="h-full overflow-y-auto p-6 space-y-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 shadow-xl">
              <h2 className="text-base font-bold text-white flex items-center space-x-2">
                <Download className="w-5 h-5 text-cyan-400" />
                <span>Export Curriculum Backup Package</span>
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Download a complete JSON snapshot of all course modifications, YouTube video lecture assignments, newly added topics, and extra worked examples.
              </p>
              <button
                onClick={handleExportData}
                className="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center space-x-2 transition shadow-lg shadow-cyan-600/30"
              >
                <Download className="w-4 h-4" />
                <span>Download Curriculum Backup (.json)</span>
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 shadow-xl">
              <h2 className="text-base font-bold text-white flex items-center space-x-2">
                <Upload className="w-5 h-5 text-indigo-400" />
                <span>Import Curriculum Backup Package</span>
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Restore or synchronize curriculum customizations from a previously exported JSON backup file.
              </p>
              <label className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold cursor-pointer transition shadow-lg shadow-indigo-600/30">
                <Upload className="w-4 h-4" />
                <span>Choose Backup JSON File</span>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportData}
                  className="hidden"
                />
              </label>
            </div>

            <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-3">
              <h2 className="text-base font-bold text-rose-300 flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-rose-400" />
                <span>Factory Reset All Customizations</span>
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Clear all custom lessons, video lecture attachments, and custom code examples across all 14 tracks, resetting the entire platform back to factory original code.
              </p>
              <button
                onClick={() => {
                  if (window.confirm("WARNING: This will erase all custom admin topics, video attachments, and extra worked examples across all courses! Are you sure?")) {
                    CourseStorageService.resetAll(currentUser?.email || 'admin');
                    showToast('Platform reset to factory default.', 'info');
                  }
                }}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition shadow"
              >
                Reset Everything to Default
              </button>
            </div>
          </div>
        )}
      </div>

      {/* New Topic Modal */}
      {isNewTopicModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <FolderPlus className="w-4 h-4 text-indigo-400" />
                <span>Add New Topic to {currentTrack.title.split(':')[0]}</span>
              </h3>
              <button
                onClick={() => setIsNewTopicModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateNewTopic} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Topic Title
                </label>
                <input
                  type="text"
                  value={newTopicTitle}
                  onChange={e => setNewTopicTitle(e.target.value)}
                  required
                  placeholder="e.g. Masterclass on Rust Smart Pointers"
                  className="w-full bg-slate-950 text-white text-xs rounded-xl px-3.5 py-2.5 border border-slate-800 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Module / Category Name
                </label>
                <input
                  type="text"
                  value={newTopicCategory}
                  onChange={e => setNewTopicCategory(e.target.value)}
                  required
                  placeholder="e.g. Module 10: Production Architecture"
                  className="w-full bg-slate-950 text-white text-xs rounded-xl px-3.5 py-2.5 border border-slate-800 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsNewTopicModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold"
                >
                  Create Topic
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
