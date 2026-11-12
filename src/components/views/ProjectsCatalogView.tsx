import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  Award, 
  Hammer, 
  ArrowRight, 
  CheckCircle2, 
  Layers,
  Code2
} from 'lucide-react';
import { GuidedProject, UserStats } from '../../types';
import { ALL_PROJECTS } from '../../data/projects';

interface ProjectsCatalogViewProps {
  userStats: UserStats;
  onSelectProject: (projectId: string) => void;
}

export const ProjectsCatalogView: React.FC<ProjectsCatalogViewProps> = ({
  userStats,
  onSelectProject
}) => {
  const [filterLang, setFilterLang] = useState<string>('all');

  const filtered = ALL_PROJECTS.filter(p => {
    if (filterLang !== 'all' && p.language !== filterLang) return false;
    return true;
  });

  return (
    <div className="h-[calc(100vh-3.5rem)] overflow-y-auto bg-slate-950 p-6 md:p-8 space-y-6 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Guided Real-World Projects
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Build production-grade applications step-by-step with progressive milestone verification.
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(project => {
          const completedMilestones = project.milestones.filter(m => userStats.completedMilestoneIds.includes(m.id)).length;
          const isFinished = userStats.completedProjectIds.includes(project.id);

          return (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-xl flex flex-col justify-between hover:border-indigo-500/40 transition group"
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

                  <span className="text-xs font-mono font-bold text-amber-400 flex items-center space-x-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>+{project.xpReward} XP</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Milestones list preview */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Milestones ({completedMilestones}/{project.milestones.length})
                  </span>
                  <div className="space-y-1.5">
                    {project.milestones.map((m, mIdx) => {
                      const done = userStats.completedMilestoneIds.includes(m.id);
                      return (
                        <div key={m.id} className="flex items-center space-x-2 text-xs">
                          {done ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          ) : (
                            <span className="w-3.5 h-3.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-mono flex items-center justify-center text-slate-400 shrink-0">
                              {mIdx + 1}
                            </span>
                          )}
                          <span className={done ? 'text-slate-400 line-through' : 'text-slate-300'}>
                            {m.title}
                          </span>
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
                  <span>{project.estimatedHours} hours estimated</span>
                </span>

                <button
                  onClick={() => onSelectProject(project.id)}
                  className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-md shadow-indigo-600/30 transition"
                >
                  <span>{isFinished ? 'Review Project' : completedMilestones > 0 ? 'Resume Project' : 'Start Project'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
