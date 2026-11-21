import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  Award, 
  Hammer, 
  ArrowRight, 
  CheckCircle2, 
  Layers,
  Code2,
  Lock,
  Zap,
  ShieldCheck,
  AlertCircle,
  FolderGit2,
  Search
} from 'lucide-react';
import { GuidedProject, UserStats } from '../../types';
import { User as UserType } from '../../types/auth';
import { ALL_PROJECTS } from '../../data/projects';
import { PaymentService } from '../../services/paymentService';
import { AuthService } from '../../services/authService';

interface ProjectsCatalogViewProps {
  userStats: UserStats;
  currentUser?: UserType | null;
  onSelectProject: (projectId: string) => void;
  onOpenAuth?: (config?: any) => void;
}

const COURSE_FILTERS = [
  { id: 'all', label: 'All Courses' },
  { id: 'python', label: 'Python & PyShark' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'sql', label: 'SQL' },
  { id: 'cpp', label: 'Modern C++' },
  { id: 'cloud', label: 'Cloud & K8s' },
  { id: 'dsa', label: 'DSA' },
  { id: 'bash', label: 'Linux & Bash' },
  { id: 'r', label: 'R Data Science' },
  { id: 'rust', label: 'Rust' },
  { id: 'golang', label: 'Go' },
  { id: 'java', label: 'Java' },
  { id: 'nodejs', label: 'Node.js' },
  { id: 'html', label: 'HTML' },
  { id: 'css', label: 'CSS' },
  { id: 'git', label: 'Git' },
  { id: 'docker', label: 'Docker' }
];

export const ProjectsCatalogView: React.FC<ProjectsCatalogViewProps> = ({
  userStats,
  currentUser,
  onSelectProject,
  onOpenAuth,
}) => {
  const [filterLang, setFilterLang] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [purchasingId, setPurchasingId] = useState<string | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [, setRefreshKey] = useState<number>(0);

  const filtered = ALL_PROJECTS.filter(p => {
    if (filterLang !== 'all' && p.language !== filterLang) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchSkills = p.skillsLearned.some(s => s.toLowerCase().includes(q));
      const matchLang = p.language.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchSkills && !matchLang) return false;
    }
    return true;
  });

  const isSuperAdmin = AuthService.isSuperAdmin(currentUser);

  const checkProjectPurchased = (projectId: string): boolean => {
    if (isSuperAdmin) return true;
    return PaymentService.isProjectPurchased(projectId, currentUser);
  };

  const handleUnlockProject = (project: GuidedProject) => {
    setPaymentError(null);

    // Pre-Payment Authentication Gate
    if (!currentUser) {
      if (onOpenAuth) {
        onOpenAuth({
          title: `Create an Account to Unlock "${project.title}"`,
          desc: 'Sign in with Google or GitHub to link your guided project access, save code progress, and earn project milestones.',
          pendingCheckoutProject: project,
        });
      } else {
        alert('Please sign in or create an account before unlocking this guided project.');
      }
      return;
    }

    setPurchasingId(project.id);
    PaymentService.openProjectCheckout({
      project,
      currentUser: currentUser || null,
      onSuccess: () => {
        setPurchasingId(null);
        setRefreshKey(k => k + 1);
      },
      onError: (err) => {
        setPurchasingId(null);
        setPaymentError(err);
      }
    });
  };

  const getTierBadgeText = (price: number) => {
    if (price <= 49) return 'Essential Lab';
    if (price <= 99) return 'Practical Project';
    if (price <= 149) return 'Architecture';
    return 'Flagship System';
  };

  return (
    <div className="h-[calc(100vh-3.5rem)] overflow-y-auto bg-slate-950 p-6 md:p-8 space-y-6 font-sans">
      {/* Payment Error Toast Banner */}
      {paymentError && (
        <div className="p-4 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-200 text-xs flex items-center justify-between shadow-lg">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{paymentError}</span>
          </div>
          <button
            onClick={() => setPaymentError(null)}
            className="text-rose-400 hover:text-rose-200 underline text-xs font-semibold ml-4"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* SuperAdmin Banner */}
      {isSuperAdmin && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/60 via-indigo-950/40 to-slate-900 border border-amber-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-amber-300 flex items-center space-x-2">
                <span>SuperAdmin Access Active</span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  ADMIN PASS
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mt-0.5">
                All {ALL_PROJECTS.length} projects, all milestone stages, and verified solution keys are fully unlocked for your account.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 font-mono text-[11px] text-amber-400 bg-slate-950/60 px-3 py-1.5 rounded-xl border border-amber-500/30 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{currentUser?.email}</span>
          </div>
        </div>
      )}

      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
            <FolderGit2 className="w-7 h-7 text-indigo-400" />
            <span>Course-Specific Guided Projects</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Build resume-ready, production-grade applications with automated unit test verification and sequential milestone unlocks.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by topic, skill..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition font-sans"
          />
        </div>
      </div>

      {/* Filter Chips Bar */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 scrollbar-none">
        {COURSE_FILTERS.map(f => (
          <button
            key={f.id}
            onClick={() => setFilterLang(f.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap font-mono transition ${
              filterLang === f.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-bold'
                : 'bg-slate-900/90 border border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/60 pb-3">
        <span>Showing {filtered.length} of {ALL_PROJECTS.length} Guided Projects</span>
        <span className="font-mono text-[11px] text-slate-500">Sequential Milestone Gating Active</span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(project => {
          const completedMilestones = project.milestones.filter(m => userStats.completedMilestoneIds.includes(m.id)).length;
          const isFinished = userStats.completedProjectIds.includes(project.id);
          const isPurchased = checkProjectPurchased(project.id);
          const price = PaymentService.getProjectPrice(project);
          const isCurrentLoading = purchasingId === project.id;
          const tierLabel = getTierBadgeText(price);

          return (
            <div
              key={project.id}
              className={`rounded-2xl bg-slate-900/60 border ${
                isPurchased ? 'border-slate-800 hover:border-indigo-500/40' : 'border-indigo-900/40 hover:border-indigo-500/50'
              } overflow-hidden shadow-xl flex flex-col justify-between transition group relative backdrop-blur-sm`}
            >
              <div className="p-5 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-800 text-indigo-400 border border-slate-700">
                      {project.language}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400">
                      {tierLabel}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    {/* Price / Unlocked Status Badge */}
                    {isSuperAdmin ? (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-amber-400" />
                        Admin Pass
                      </span>
                    ) : isPurchased ? (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Unlocked
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold tracking-wider bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
                        <Lock className="w-3 h-3 text-indigo-400" />
                        ₹{price}
                      </span>
                    )}

                    <span className="text-xs font-mono font-bold text-amber-400 flex items-center space-x-0.5 pl-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>+{project.xpReward} XP</span>
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Milestones list preview with Sequential Progression Indicator */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                      Milestones ({completedMilestones}/{project.milestones.length})
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Sequential
                    </span>
                  </div>
                  <div className="space-y-1">
                    {project.milestones.map((m, mIdx) => {
                      const done = userStats.completedMilestoneIds.includes(m.id);
                      const isMilestoneUnlocked = isSuperAdmin || (isPurchased && (mIdx === 0 || userStats.completedMilestoneIds.includes(project.milestones[mIdx - 1].id)));

                      return (
                        <div key={m.id} className="flex items-center space-x-2 text-xs">
                          {done ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          ) : isMilestoneUnlocked ? (
                            <span className="w-3.5 h-3.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-[10px] font-mono flex items-center justify-center text-indigo-300 shrink-0">
                              {mIdx + 1}
                            </span>
                          ) : (
                            <Lock className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                          )}
                          <span className={`truncate ${done ? 'text-slate-400 line-through' : isMilestoneUnlocked ? 'text-slate-200' : 'text-slate-500'}`}>
                            {m.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Skills Learned Badges */}
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {project.skillsLearned.slice(0, 3).map((skill, sIdx) => (
                    <span key={sIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60 truncate max-w-[140px]">
                      {skill}
                    </span>
                  ))}
                  {project.skillsLearned.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800/50 text-slate-500">
                      +{project.skillsLearned.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-3.5 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>{project.estimatedHours}h est.</span>
                </span>

                {isPurchased ? (
                  <button
                    onClick={() => onSelectProject(project.id)}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-md shadow-indigo-600/30 transition"
                  >
                    <span>
                      {isFinished ? 'Review' : completedMilestones > 0 ? 'Resume' : 'Start M1'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleUnlockProject(project)}
                    disabled={isCurrentLoading}
                    className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-md shadow-indigo-600/30 transition active:scale-95 disabled:opacity-50"
                  >
                    <Lock className="w-3.5 h-3.5 text-indigo-300" />
                    <span>{isCurrentLoading ? 'Opening...' : `Unlock for ₹${price}`}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
