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
  FolderGit2
} from 'lucide-react';
import { GuidedProject, UserStats } from '../../types';
import { User as UserType } from '../../types/auth';
import { ALL_PROJECTS } from '../../data/projects';
import { PaymentService } from '../../services/paymentService';

interface ProjectsCatalogViewProps {
  userStats: UserStats;
  currentUser?: UserType | null;
  onSelectProject: (projectId: string) => void;
}

export const ProjectsCatalogView: React.FC<ProjectsCatalogViewProps> = ({
  userStats,
  currentUser,
  onSelectProject
}) => {
  const [filterLang, setFilterLang] = useState<string>('all');
  const [purchasingId, setPurchasingId] = useState<string | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [, setRefreshKey] = useState<number>(0);

  const filtered = ALL_PROJECTS.filter(p => {
    if (filterLang !== 'all' && p.language !== filterLang) return false;
    return true;
  });

  const checkProjectPurchased = (projectId: string): boolean => {
    return PaymentService.isProjectPurchased(projectId, currentUser);
  };

  const allProjectsPurchased = ALL_PROJECTS.every(p => checkProjectPurchased(p.id));

  const handleUnlockProject = (project: GuidedProject) => {
    setPaymentError(null);
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

  const handleUnlockBundle = () => {
    setPaymentError(null);
    setPurchasingId('bundle');
    PaymentService.openAllProjectsBundleCheckout({
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

      {/* Header & Filter Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <FolderGit2 className="w-6 h-6 text-indigo-400" />
            <span>Guided Real-World Projects</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Build production-grade applications step-by-step with automated unit test suites and sequential milestone verification.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
          {['all', 'javascript', 'typescript', 'sql'].map(lang => (
            <button
              key={lang}
              onClick={() => setFilterLang(lang)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider font-mono transition ${
                filterLang === lang
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Hero: All-Projects Portfolio Pass (₹249 Bundle) */}
      <div className="rounded-2xl bg-gradient-to-r from-indigo-950/80 via-purple-950/50 to-slate-900/90 border border-indigo-500/30 p-6 md:p-7 shadow-2xl relative overflow-hidden backdrop-blur-sm">
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Best Value Bundle • 50% Off
              </span>
              <span className="text-[11px] font-mono text-indigo-300">
                Save ₹247 vs Individual
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-black text-white tracking-tight">
              All-Projects Portfolio Pass
            </h2>

            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Unlock the complete 4-project engineering curriculum in one pass. Master Kanban DOM mechanics, High-Throughput E-Commerce SQL Analytics, Custom Type-Safe Redux Architecture, and Async Weather API Cache microservices.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-300">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/80 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                4 Production Projects
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/80 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Sequential Milestone Progression
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/80 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                Verified Portfolio Badges & XP
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end justify-center shrink-0 space-y-3 bg-slate-950/60 lg:bg-transparent p-4 lg:p-0 rounded-xl border border-slate-800 lg:border-none">
            {allProjectsPurchased ? (
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Portfolio Pass Active • All Projects Unlocked</span>
              </div>
            ) : (
              <>
                <div className="text-left lg:text-right">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-slate-400 line-through font-mono">₹496</span>
                    <span className="text-3xl font-black text-white font-mono">₹249</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">One-Time Fee • Lifetime Access</span>
                </div>

                <button
                  onClick={handleUnlockBundle}
                  disabled={purchasingId === 'bundle'}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition active:scale-95 disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                  <span>{purchasingId === 'bundle' ? 'Opening Gateway...' : 'Unlock All 4 Projects Pass — ₹249'}</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(project => {
          const completedMilestones = project.milestones.filter(m => userStats.completedMilestoneIds.includes(m.id)).length;
          const isFinished = userStats.completedProjectIds.includes(project.id);
          const isPurchased = checkProjectPurchased(project.id);
          const price = PaymentService.getProjectPrice(project);
          const isCurrentLoading = purchasingId === project.id;

          return (
            <div
              key={project.id}
              className={`rounded-2xl bg-slate-900/60 border ${
                isPurchased ? 'border-slate-800 hover:border-indigo-500/40' : 'border-indigo-900/40 hover:border-indigo-500/50'
              } overflow-hidden shadow-xl flex flex-col justify-between transition group relative`}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-800 text-indigo-400 border border-slate-700">
                      {project.language}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300">
                      {project.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    {/* Price / Unlocked Status Badge */}
                    {isPurchased ? (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Unlocked
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold tracking-wider bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
                        <Lock className="w-3 h-3 text-indigo-400" />
                        ₹{price} Lifetime
                      </span>
                    )}

                    <span className="text-xs font-mono font-bold text-amber-400 flex items-center space-x-1 pl-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>+{project.xpReward} XP</span>
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition flex items-center gap-2">
                    <span>{project.title}</span>
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Milestones list preview with Sequential Progression Indicator */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-slate-400 uppercase tracking-wider">
                      Milestones ({completedMilestones}/{project.milestones.length})
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Sequential Gating
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {project.milestones.map((m, mIdx) => {
                      const done = userStats.completedMilestoneIds.includes(m.id);
                      const isMilestoneUnlocked = isPurchased && (mIdx === 0 || userStats.completedMilestoneIds.includes(project.milestones[mIdx - 1].id));

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
                          <span className={done ? 'text-slate-400 line-through' : isMilestoneUnlocked ? 'text-slate-200' : 'text-slate-500'}>
                            {m.title}
                          </span>
                          {!isPurchased && mIdx === 0 && (
                            <span className="text-[10px] text-amber-400 font-mono ml-auto">Unlocks on buy</span>
                          )}
                          {!isPurchased && mIdx > 0 && (
                            <span className="text-[10px] text-slate-600 font-mono ml-auto">Locked</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Skills Learned Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.skillsLearned.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>{project.estimatedHours}h estimated</span>
                </span>

                {isPurchased ? (
                  <button
                    onClick={() => onSelectProject(project.id)}
                    className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-md shadow-indigo-600/30 transition"
                  >
                    <span>
                      {isFinished ? 'Review Project' : completedMilestones > 0 ? 'Resume Project' : 'Start Milestone 1'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleUnlockProject(project)}
                    disabled={isCurrentLoading}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-md shadow-indigo-600/30 transition active:scale-95 disabled:opacity-50"
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