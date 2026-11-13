import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { UserStats, TierLevel, Track } from './types';
import { User as UserType, Certificate, AdminSession } from './types/auth';
import { ProgressStorage } from './services/progressStorage';
import { AuthService } from './services/authService';
import { Navbar } from './components/layout/Navbar';
import { DashboardView } from './components/views/DashboardView';
import { TracksCatalogView } from './components/views/TracksCatalogView';
import { ProjectsCatalogView } from './components/views/ProjectsCatalogView';
import { LessonWorkspace } from './components/learning/LessonWorkspace';
import { ProjectWorkspace } from './components/learning/ProjectWorkspace';
import { PlaygroundWorkspace } from './components/playground/PlaygroundWorkspace';
import { QuickCheatSheetModal } from './components/views/QuickCheatSheetModal';
import { PlacementQuizModal } from './components/views/PlacementQuizModal';
import { FlashcardsModal } from './components/views/FlashcardsModal';
import { RoadmapSkillTreeView } from './components/views/RoadmapSkillTreeView';
import { CertificatesVaultView } from './components/views/CertificatesVaultView';
import { AuthModal } from './components/auth/AuthModal';
import { CertificateModal } from './components/certificate/CertificateModal';
import { AdminPortalView } from './components/admin/AdminPortalView';
import { AdminLockScreen } from './components/admin/AdminLockScreen';
import { DecoyNotFoundView } from './components/views/DecoyNotFoundView';
import { CourseStorageService } from './services/courseStorageService';
import { AdminSecurityService } from './services/adminSecurityService';
import { ALL_PROJECTS, getProjectBySlug } from './data/projects';

export function App() {
  const [allTracks, setAllTracks] = useState<Track[]>(() => CourseStorageService.getTracks());
  const [userStats, setUserStats] = useState<UserStats>(() => ProgressStorage.getStats());
  const [currentUser, setCurrentUser] = useState<UserType | null>(() => AuthService.getCurrentUser());
  const [adminSession, setAdminSession] = useState<AdminSession | null>(() => AdminSecurityService.getActiveSession());
  const [currentView, setCurrentView] = useState<string>('dashboard');
  const [viewPayload, setViewPayload] = useState<any>(null);

  // Subscribe to live curriculum edits made by Admin
  useEffect(() => {
    return CourseStorageService.subscribe(() => {
      setAllTracks(CourseStorageService.getTracks());
    });
  }, []);

  // Stealth URL Gateway & Decoy Trap Listener
  useEffect(() => {
    const handleUrlRouting = () => {
      const hash = window.location.hash || '';
      const search = window.location.search || '';
      const combined = (hash + ' ' + search).toLowerCase();

      // Check if visitor/crawler visited a decoy admin path (#admin, /admin, ?admin, etc.)
      if (AdminSecurityService.isDecoyAdminPath(combined)) {
        setCurrentView('decoy_404');
        return;
      }

      // Check if matching private stealth slug (#forge-ops-9842 or custom slug)
      if (AdminSecurityService.isStealthSlugMatch(hash) || AdminSecurityService.isStealthSlugMatch(search)) {
        setCurrentView('admin');

        // Immediately scrub the secret slug from the browser address bar so it cannot be copied/seen in history
        try {
          const currentSlug = AdminSecurityService.getStealthSlug();
          const cleanSearch = window.location.search.replace(new RegExp(`[\\?&]${currentSlug}(=[^&]*)?`, 'gi'), '');
          window.history.replaceState(null, '', window.location.pathname + (cleanSearch || ''));
        } catch {
          // ignore
        }
        return;
      }
    };

    handleUrlRouting();
    window.addEventListener('hashchange', handleUrlRouting);
    return () => window.removeEventListener('hashchange', handleUrlRouting);
  }, []);

  // Global Secret Keyboard Shortcut for Admins: Ctrl+Shift+A or Cmd+Shift+A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setCurrentView('admin');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  // Modals state
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);
  const [isPlacementQuizOpen, setIsPlacementQuizOpen] = useState(false);
  const [isFlashcardsOpen, setIsFlashcardsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalConfig, setAuthModalConfig] = useState<{ title?: string; desc?: string; pendingTrack?: Track } | null>(null);

  // Certificate Modal State
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  const handleStatsUpdate = (newStats: UserStats) => {
    setUserStats({ ...newStats });
  };

  const handleNavigate = (view: string, payload?: any) => {
    if (view === 'cheatsheet') {
      setIsCheatSheetOpen(true);
      return;
    }
    if (window.location.hash) {
      try {
        window.history.replaceState(null, '', window.location.pathname);
      } catch {}
    }
    setCurrentView(view);
    setViewPayload(payload || null);
  };

  const handleClaimCertificate = (track: Track) => {
    if (!currentUser) {
      setAuthModalConfig({
        title: 'Claim Your Course Certificate',
        desc: `Create an account or sign in so your name is permanently stamped on your ${track.title} credential.`,
        pendingTrack: track
      });
      setIsAuthModalOpen(true);
    } else {
      issueAndShowCertificate(track, currentUser);
    }
  };

  const issueAndShowCertificate = (track: Track, user: UserType) => {
    const skills = track.lessons.map(l => l.title);
    const cert = AuthService.issueCertificate(track.id, track.title, track.language, skills);
    setActiveCertificate(cert);
    setIsCertModalOpen(true);
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 }
    });
  };

  const handleAuthSuccess = (user: UserType) => {
    setCurrentUser(user);
    if (authModalConfig?.pendingTrack) {
      issueAndShowCertificate(authModalConfig.pendingTrack, user);
      setAuthModalConfig(null);
    }
  };

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
  };

  // Determine active lesson / track
  let activeTrack = allTracks[0];
  let activeLesson = allTracks[0]?.lessons[0];

  if (currentView === 'lesson' && viewPayload) {
    if (viewPayload.lessonId) {
      const match = CourseStorageService.getLessonById(viewPayload.lessonId);
      if (match) {
        activeTrack = match.track;
        activeLesson = match.lesson;
      }
    } else if (viewPayload.trackSlug) {
      const track = CourseStorageService.getTrackBySlug(viewPayload.trackSlug);
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
        currentUser={currentUser}
        onOpenFlashcards={() => setIsFlashcardsOpen(true)}
        onOpenPlacementQuiz={() => setIsPlacementQuizOpen(true)}
        onOpenAuth={() => {
          setAuthModalConfig(null);
          setIsAuthModalOpen(true);
        }}
        onLogout={handleLogout}
      />

      {/* Main View Router */}
      <main className="flex-1 overflow-hidden">
        {currentView === 'dashboard' && (
          <DashboardView
            userStats={userStats}
            onNavigate={handleNavigate}
            onOpenPlacementQuiz={() => setIsPlacementQuizOpen(true)}
            onOpenFlashcards={() => setIsFlashcardsOpen(true)}
          />
        )}

        {currentView === 'roadmap' && (
          <RoadmapSkillTreeView
            userStats={userStats}
            onSelectLesson={(trackSlug, lessonId) => {
              handleNavigate('lesson', { trackSlug, lessonId });
            }}
            onOpenPlacementQuiz={() => setIsPlacementQuizOpen(true)}
          />
        )}

        {currentView === 'tracks' && (
          <TracksCatalogView
            userStats={userStats}
            onSelectLesson={(trackSlug, lessonId) => {
              handleNavigate('lesson', { trackSlug, lessonId });
            }}
            onOpenPlacementQuiz={() => setIsPlacementQuizOpen(true)}
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
            onClaimCertificate={handleClaimCertificate}
            onOpenAdmin={(trackSlug, lessonId) => {
              handleNavigate('admin', { trackSlug, lessonId });
            }}
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

        {currentView === 'vault' && (
          <CertificatesVaultView
            currentUser={currentUser}
            userStats={userStats}
            onOpenAuth={() => {
              setAuthModalConfig(null);
              setIsAuthModalOpen(true);
            }}
            onViewCertificate={(cert) => {
              setActiveCertificate(cert);
              setIsCertModalOpen(true);
            }}
            onNavigateLesson={(trackSlug, lessonId) => {
              handleNavigate('lesson', { trackSlug, lessonId });
            }}
            onUserUpdated={(u) => setCurrentUser(u)}
          />
        )}

        {currentView === 'playground' && (
          <PlaygroundWorkspace />
        )}

        {/* Decoy 404 Honeypot Trap for intruders trying #admin, /admin, etc. */}
        {currentView === 'decoy_404' && (
          <DecoyNotFoundView onBackHome={() => handleNavigate('dashboard')} />
        )}

        {/* Protected Super Administrator Portal (Secret Admin Gateway) */}
        {currentView === 'admin' && (
          adminSession ? (
            <AdminPortalView
              onNavigateLesson={(trackSlug, lessonId) => {
                handleNavigate('lesson', { trackSlug, lessonId });
              }}
              onCloseAdmin={() => {
                setAdminSession(null);
                AdminSecurityService.destroySession();
                handleNavigate('dashboard');
              }}
              targetLessonId={viewPayload?.lessonId}
              targetTrackSlug={viewPayload?.trackSlug}
            />
          ) : (
            <AdminLockScreen
              onUnlocked={(session) => {
                setAdminSession(session);
                setCurrentUser(AuthService.getCurrentUser());
              }}
              onCancel={() => handleNavigate('dashboard')}
            />
          )
        )}
      </main>

      {/* Platform Footer (Completely clean of any admin hints or triggers) */}
      {currentView !== 'admin' && currentView !== 'lesson' && currentView !== 'decoy_404' && (
        <footer className="py-3 px-6 border-t border-slate-900 bg-slate-950 flex items-center justify-between text-[11px] text-slate-500 font-mono select-none">
          <span>© 2026 DevForge Learning Studio. All rights reserved.</span>
          <span className="text-slate-600">Enterprise Coding Curriculum</span>
        </footer>
      )}

      {/* Cheatsheet Modal */}
      <QuickCheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />

      {/* Diagnostic Placement Quiz Modal */}
      <PlacementQuizModal
        isOpen={isPlacementQuizOpen}
        onClose={() => setIsPlacementQuizOpen(false)}
        onTierSelected={(tier: TierLevel) => {
          const updated = ProgressStorage.setDiagnosedTier(tier);
          setUserStats(updated);
          handleNavigate('tracks');
        }}
      />

      {/* Spaced Repetition Flashcards Modal */}
      <FlashcardsModal
        isOpen={isFlashcardsOpen}
        onClose={() => setIsFlashcardsOpen(false)}
        onStatsUpdate={handleStatsUpdate}
      />

      {/* Auth Modal (Sign Up / Sign In) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
        customTitle={authModalConfig?.title}
        customDescription={authModalConfig?.desc}
      />

      {/* Verified Certificate Modal */}
      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        certificate={activeCertificate}
      />
    </div>
  );
}

export default App;
