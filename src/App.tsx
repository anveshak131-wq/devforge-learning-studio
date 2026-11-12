import React, { useState, useEffect } from 'react';
import { UserStats } from './types';
import { ProgressStorage } from './services/progressStorage';
import { Navbar } from './components/layout/Navbar';
import { DashboardView } from './components/views/DashboardView';
import { TracksCatalogView } from './components/views/TracksCatalogView';
import { ProjectsCatalogView } from './components/views/ProjectsCatalogView';
import { LessonWorkspace } from './components/learning/LessonWorkspace';
import { ProjectWorkspace } from './components/learning/ProjectWorkspace';
import { PlaygroundWorkspace } from './components/playground/PlaygroundWorkspace';
import { QuickCheatSheetModal } from './components/views/QuickCheatSheetModal';
import { ALL_TRACKS, getTrackBySlug, getLessonById } from './data/courses';
import { ALL_PROJECTS, getProjectBySlug } from './data/projects';

export function App() {
  const [userStats, setUserStats] = useState<UserStats>(() => ProgressStorage.getStats());
  const [currentView, setCurrentView] = useState<string>('dashboard');
  const [viewPayload, setViewPayload] = useState<any>(null);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);

  // Sync stats updates
  const handleStatsUpdate = (newStats: UserStats) => {
    setUserStats({ ...newStats });
  };

  const handleNavigate = (view: string, payload?: any) => {
    if (view === 'cheatsheet') {
      setIsCheatSheetOpen(true);
      return;
    }
    setCurrentView(view);
    setViewPayload(payload || null);
  };

  // Determine active lesson / track
  let activeTrack = ALL_TRACKS[0];
  let activeLesson = ALL_TRACKS[0].lessons[0];

  if (currentView === 'lesson' && viewPayload) {
    if (viewPayload.lessonId) {
      const match = getLessonById(viewPayload.lessonId);
      if (match) {
        activeTrack = match.track;
        activeLesson = match.lesson;
      }
    } else if (viewPayload.trackSlug) {
      const track = getTrackBySlug(viewPayload.trackSlug);
      if (track) {
        activeTrack = track;
        activeLesson = track.lessons[0];
      }
    }
  }

  // Determine active project
  let activeProject = ALL_PROJECTS[0];
  if (currentView === 'project-milestone' && viewPayload?.projectId) {
    const proj = getProjectBySlug(viewPayload.projectId);
    if (proj) {
      activeProject = proj;
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        userStats={userStats}
        onResetProgress={() => {
          const reset = ProgressStorage.resetProgress();
          setUserStats(reset);
        }}
      />

      {/* Main View Router */}
      <main className="flex-1 overflow-hidden">
        {currentView === 'dashboard' && (
          <DashboardView
            userStats={userStats}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'tracks' && (
          <TracksCatalogView
            userStats={userStats}
            onSelectLesson={(trackSlug, lessonId) => {
              handleNavigate('lesson', { trackSlug, lessonId });
            }}
          />
        )}

        {currentView === 'lesson' && (
          <LessonWorkspace
            track={activeTrack}
            lesson={activeLesson}
            onNavigateLesson={(lessonId) => {
              handleNavigate('lesson', { lessonId });
            }}
            onBackToTracks={() => handleNavigate('tracks')}
            userStats={userStats}
            onStatsUpdate={handleStatsUpdate}
          />
        )}

        {currentView === 'projects' && (
          <ProjectsCatalogView
            userStats={userStats}
            onSelectProject={(projectId) => {
              handleNavigate('project-milestone', { projectId });
            }}
          />
        )}

        {currentView === 'project-milestone' && (
          <ProjectWorkspace
            project={activeProject}
            onBackToProjects={() => handleNavigate('projects')}
            userStats={userStats}
            onStatsUpdate={handleStatsUpdate}
          />
        )}

        {currentView === 'playground' && (
          <PlaygroundWorkspace />
        )}
      </main>

      {/* Cheatsheet Modal */}
      <QuickCheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />
    </div>
  );
}

export default App;
