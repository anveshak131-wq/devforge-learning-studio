import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { UserStats, TierLevel, Track } from './types';
import { User as UserType, Certificate } from './types/auth';
import { ProgressStorage } from './services/progressStorage';
import { AuthService } from './services/authService';
import { Navbar } from './components/layout/Navbar';
import { DashboardView } from './components/views/DashboardView';
import { TracksCatalogView } from './components/views/TracksCatalogView';
import { CourseDetailView } from './components/views/CourseDetailView';
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
import { CertificateVerifyView } from './components/certificate/CertificateVerifyView';
import { DecoyNotFoundView } from './components/views/DecoyNotFoundView';
import { LegalView, LegalTab } from './components/legal/LegalView';

// Dynamic code-splitting: Admin chunks are NEVER downloaded by public students
const AdminPortalView = React.lazy(() =>
  import('./components/admin/AdminPortalView').then(m => ({ default: m.AdminPortalView }))
);
import { CourseStorageService } from './services/courseStorageService';
import { AdminSecurityService } from './services/adminSecurityService';
import { ALL_PROJECTS, getProjectBySlug } from './data/projects';

function parseRouteFromLocation(): { view: string; payload?: any } {
  let path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  if (!path && window.location.hash) {
    path = window.location.hash.replace(/^#\/?/, '').replace(/^\/+|\/+$/g, '');
  }
  const segments = path.split('/').filter(Boolean);

  if (!segments.length || segments[0] === 'dashboard') {
    return { view: 'dashboard' };
  }

  // Decoy 404 Honeypot for common admin probing paths
  if (['admin', 'wp-admin', 'administrator', 'backend', 'cpanel', 'login-admin', 'admin-login'].includes(segments[0])) {
    return { view: 'decoy_404' };
  }

  if (segments[0] === 'tracks' || segments[0] === 'courses') {
    if (!segments[1]) {
      return { view: 'tracks' };
    }
    if (segments[2] === 'lesson' && segments[3]) {
      return { view: 'lesson', payload: { trackSlug: segments[1], lessonId: segments[3] } };
    }
    return { view: 'course-detail', payload: { trackSlug: segments[1] } };
  }

  if (segments[0] === 'lesson' && segments[1]) {
    return { view: 'lesson', payload: { lessonId: segments[1] } };
  }

  if (segments[0] === 'projects') {
    if (segments[1]) {
      return { view: 'project-milestone', payload: { projectId: segments[1] } };
    }
    return { view: 'projects' };
  }

  if (segments[0] === 'vault') return { view: 'vault' };
  if (segments[0] === 'roadmap') return { view: 'roadmap' };
  if (segments[0] === 'playground') return { view: 'playground' };
  if (segments[0] === 'verify' || segments[0] === 'certificate') {
    const credentialId = segments[1] || new URLSearchParams(window.location.search).get('id') || '';
    return { view: 'verify', payload: { credentialId } };
  }
  if (['terms', 'terms-and-conditions'].includes(segments[0])) return { view: 'terms' };
  if (['privacy', 'privacy-policy'].includes(segments[0])) return { view: 'privacy' };
  if (['refund', 'refund-policy', 'cancellation'].includes(segments[0])) return { view: 'refund' };
  if (['contact', 'contact-us'].includes(segments[0])) return { view: 'contact' };

  return { view: 'dashboard' };
}

export function App() {
  const initialRoute = parseRouteFromLocation();
  const [allTracks, setAllTracks] = useState<Track[]>(() => CourseStorageService.getTracks());
  const [userStats, setUserStats] = useState<UserStats>(() => ProgressStorage.getStats());
  const [currentUser, setCurrentUser] = useState<UserType | null>(() => AuthService.getCurrentUser());
  const [currentView, setCurrentView] = useState<string>(() => initialRoute.view);
  const [viewPayload, setViewPayload] = useState<any>(() => initialRoute.payload || null);

  // Subscribe to live curriculum edits made by Admin & fetch latest Cloudflare KV database updates
  useEffect(() => {
    CourseStorageService.fetchFromCloud();
    AuthService.syncServerSession().then(user => {
      if (user) {
        setCurrentUser(user);
      }
    });
    return CourseStorageService.subscribe(() => {
      setAllTracks(CourseStorageService.getTracks());
    });
  }, []);

  // Synchronize browser URL on Back / Forward history buttons
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parseRouteFromLocation();
      handleNavigate(parsed.view, parsed.payload, false);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
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
    };

    handleUrlRouting();
    window.addEventListener('hashchange', handleUrlRouting);
    return () => window.removeEventListener('hashchange', handleUrlRouting);
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

  const handleNavigate = (view: string, payload?: any, pushHistory = true) => {
    if (view === 'cheatsheet') {
      setIsCheatSheetOpen(true);
      return;
    }

    let nextPath = '/';
    if (view === 'dashboard') nextPath = '/dashboard';
    else if (view === 'tracks') nextPath = '/tracks';
    else if (view === 'course-detail' && payload?.trackSlug) nextPath = `/courses/${payload.trackSlug}`;
    else if (view === 'lesson') {
      if (payload?.trackSlug && payload?.lessonId) {
        nextPath = `/courses/${payload.trackSlug}/lesson/${payload.lessonId}`;
      } else if (payload?.lessonId) {
        const match = CourseStorageService.getLessonById(payload.lessonId);
        if (match) {
          nextPath = `/courses/${match.track.slug}/lesson/${payload.lessonId}`;
        } else {
          nextPath = `/lesson/${payload.lessonId}`;
        }
      }
    } else if (view === 'projects') nextPath = '/projects';
    else if (view === 'project-milestone' && payload?.projectId) nextPath = `/projects/${payload.projectId}`;
    else if (view === 'vault') nextPath = '/vault';
    else if (view === 'roadmap') nextPath = '/roadmap';
    else if (view === 'playground') nextPath = '/playground';
    else if (view === 'terms') nextPath = '/terms';
    else if (view === 'privacy') nextPath = '/privacy';
    else if (view === 'refund') nextPath = '/refund';
    else if (view === 'contact') nextPath = '/contact';
    else if (view === 'verify' && payload?.credentialId) nextPath = `/verify/${encodeURIComponent(payload.credentialId)}`;
    else if (view === 'verify') nextPath = '/verify';
    else if (view === 'admin') nextPath = window.location.pathname;

    if (pushHistory && view !== 'admin' && view !== 'decoy_404') {
      try {
        if (window.location.pathname !== nextPath) {
          window.history.pushState(null, '', nextPath);
        }
      } catch {}
    }

    if (window.location.hash) {
      try {
        window.history.replaceState(null, '', nextPath);
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

  if ((currentView === 'lesson' || currentView === 'course-detail') && viewPayload) {
    if (viewPayload.trackSlug) {
      const track = CourseStorageService.getTrackBySlug(viewPayload.trackSlug);
      if (track) {
        activeTrack = track;
        activeLesson = track.lessons[0];
      }
    }

    if (viewPayload.lessonId) {
      const match = CourseStorageService.getLessonById(viewPayload.lessonId);
      if (match) {
        activeTrack = match.track;
        activeLesson = match.lesson;
      } else if (activeTrack) {
        const num = parseInt(viewPayload.lessonId, 10);
        if (!isNaN(num) && num >= 1 && num <= activeTrack.lessons.length) {
          activeLesson = activeTrack.lessons[num - 1];
        } else {
          const found = activeTrack.lessons.find(l => l.slug === viewPayload.lessonId || l.id.endsWith(viewPayload.lessonId));
          if (found) activeLesson = found;
        }
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
            onSelectTrack={(trackSlug) => {
              handleNavigate('course-detail', { trackSlug });
            }}
            onOpenPlacementQuiz={() => setIsPlacementQuizOpen(true)}
          />
        )}

        {currentView === 'course-detail' && (
          <CourseDetailView
            track={activeTrack}
            userStats={userStats}
            onSelectLesson={(trackSlug, lessonId) => {
              handleNavigate('lesson', { trackSlug, lessonId });
            }}
            onBackToTracks={() => handleNavigate('tracks')}
            onClaimCertificate={handleClaimCertificate}
            onViewCertificate={(trackSlugOrId) => {
              const userCerts = AuthService.getUserCertificates();
              const cert = userCerts.find(c => c.trackId.toLowerCase() === trackSlugOrId.toLowerCase() || c.trackTitle.toLowerCase().includes(trackSlugOrId.toLowerCase()));
              if (cert) {
                setActiveCertificate(cert);
                setIsCertModalOpen(true);
              } else {
                handleNavigate('vault');
              }
            }}
            currentUser={currentUser}
            onOpenAuth={() => {
              setAuthModalConfig(null);
              setIsAuthModalOpen(true);
            }}
          />
        )}

        {currentView === 'lesson' && (
          <LessonWorkspace
            track={activeTrack}
            lesson={activeLesson}
            onNavigateLesson={(lessonId) => {
              handleNavigate('lesson', { trackSlug: activeTrack.slug, lessonId });
            }}
            onBackToTracks={() => handleNavigate('course-detail', { trackSlug: activeTrack.slug })}
            userStats={userStats}
            onStatsUpdate={handleStatsUpdate}
            onClaimCertificate={handleClaimCertificate}
            onOpenAdmin={(trackSlug, lessonId) => {
              handleNavigate('admin', { trackSlug, lessonId });
            }}
            currentUser={currentUser}
            onOpenAuth={() => {
              setAuthModalConfig(null);
              setIsAuthModalOpen(true);
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
            onOpenPublicVerify={(credId) => handleNavigate('verify', { credentialId: credId })}
          />
        )}

        {/* Public Certificate Verification Page */}
        {currentView === 'verify' && (
          <CertificateVerifyView
            credentialId={viewPayload?.credentialId || ''}
            onBackHome={() => handleNavigate('dashboard')}
            onNavigateCourse={(trackSlug) => handleNavigate('course-detail', { trackSlug })}
            onNavigateToId={(newId) => handleNavigate('verify', { credentialId: newId })}
          />
        )}

        {currentView === 'playground' && (
          <PlaygroundWorkspace />
        )}

        {/* Compliance Legal & Policy Pages (Terms, Privacy, Refund, Contact) */}
        {['terms', 'privacy', 'refund', 'contact'].includes(currentView) && (
          <LegalView
            initialTab={currentView as LegalTab}
            onBack={() => handleNavigate('dashboard')}
            onNavigateTab={(tab) => handleNavigate(tab)}
          />
        )}

        {/* Decoy 404 Honeypot Trap for intruders trying #admin, /admin, etc. */}
        {currentView === 'decoy_404' && (
          <DecoyNotFoundView onBackHome={() => handleNavigate('dashboard')} />
        )}

        {/* Protected Super Administrator Portal (Strict Google Whitelist Only) */}
        {currentView === 'admin' && (
          !currentUser || !AuthService.isAuthorizedAdmin(currentUser) ? (
            <DecoyNotFoundView onBackHome={() => handleNavigate('dashboard')} />
          ) : (
            <React.Suspense
              fallback={
                <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-slate-950 text-slate-400 text-xs font-mono">
                  Initializing Secure Admin Environment...
                </div>
              }
            >
              <AdminPortalView
                onNavigateLesson={(trackSlug, lessonId) => {
                  handleNavigate('lesson', { trackSlug, lessonId });
                }}
                onCloseAdmin={() => {
                  AdminSecurityService.destroySession();
                  handleNavigate('dashboard');
                }}
                targetLessonId={viewPayload?.lessonId}
                targetTrackSlug={viewPayload?.trackSlug}
              />
            </React.Suspense>
          )
        )}
      </main>

      {/* Platform Footer */}
      {currentView !== 'admin' && currentView !== 'lesson' && currentView !== 'decoy_404' && (
        <footer className="py-4 px-6 border-t border-slate-900 bg-slate-950 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 font-mono select-none print:hidden">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© 2026 DevForge Learning Studio. All rights reserved.</span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="text-slate-400 font-sans">₹199 Lifetime Access • Topics 1–3 Free Preview</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-sans">
            <button
              onClick={() => handleNavigate('terms')}
              className="text-slate-400 hover:text-indigo-300 transition"
            >
              Terms
            </button>
            <button
              onClick={() => handleNavigate('privacy')}
              className="text-slate-400 hover:text-indigo-300 transition"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNavigate('refund')}
              className="text-slate-400 hover:text-indigo-300 transition"
            >
              Refund Policy
            </button>
            <button
              onClick={() => handleNavigate('contact')}
              className="text-slate-400 hover:text-indigo-300 transition"
            >
              Contact Us
            </button>
          </div>
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
        onOpenPublicVerify={(credId) => handleNavigate('verify', { credentialId: credId })}
      />
    </div>
  );
}

export default App;
