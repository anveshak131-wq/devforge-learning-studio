import React, { useState, useMemo } from 'react';
import {
  Users,
  Search,
  Filter,
  Download,
  Award,
  BookOpen,
  Clock,
  Flame,
  Zap,
  ShieldCheck,
  RefreshCw,
  Gift,
  Mail,
  ExternalLink,
  ChevronRight,
  X,
  CheckCircle2,
  AlertTriangle,
  FileText,
  DollarSign,
  Lock,
  ArrowUpDown,
  CreditCard,
  UserCheck
} from 'lucide-react';
import { LearnerRecord } from '../../types/crm';
import { StudentCRMService } from '../../services/studentCRMService';

interface AdminStudentCRMTabProps {
  onShowToast: (text: string, type?: 'success' | 'error' | 'info') => void;
}

export const AdminStudentCRMTab: React.FC<AdminStudentCRMTabProps> = ({ onShowToast }) => {
  const [learners, setLearners] = useState<LearnerRecord[]>(() => StudentCRMService.getLearners());
  const [searchQuery, setSearchQuery] = useState('');
  const [trackFilter, setTrackFilter] = useState<'all' | 'python' | 'sql' | 'vip'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'certified' | 'in_progress' | 'at_risk'>('all');
  const [sortBy, setSortBy] = useState<'xp' | 'score' | 'progress' | 'recent' | 'ltv'>('xp');

  // Selected student for 360° Dossier Slide-Over Modal
  const [selectedStudent, setSelectedStudent] = useState<LearnerRecord | null>(null);
  const [dossierTab, setDossierTab] = useState<'progress' | 'exams' | 'certificates' | 'billing'>('progress');

  // Metrics
  const metrics = useMemo(() => {
    const total = learners.length;
    const paying = learners.filter((l) => l.ltvInr > 0).length;
    const certified = learners.filter((l) => l.certificates && l.certificates.length > 0).length;
    const totalLtv = learners.reduce((sum, l) => sum + (l.ltvInr || 0), 0);
    const now = Date.now();
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
    const atRisk = learners.filter((l) => now - new Date(l.lastActiveAt).getTime() > sevenDaysMs).length;

    return { total, paying, certified, totalLtv, atRisk };
  }, [learners]);

  // Filtered & Sorted Learners
  const filteredLearners = useMemo(() => {
    const now = Date.now();
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;

    return learners
      .filter((l) => {
        // Search
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = l.fullName.toLowerCase().includes(q);
          const matchEmail = l.email.toLowerCase().includes(q);
          const matchCert = l.certificates.some((c) => c.credentialId.toLowerCase().includes(q));
          if (!matchName && !matchEmail && !matchCert) return false;
        }

        // Track filter
        if (trackFilter === 'python') {
          if (!l.purchasedCourses.includes('python') && !l.hasPromoAccess) return false;
        } else if (trackFilter === 'sql') {
          if (!l.purchasedCourses.includes('sql') && !l.hasPromoAccess) return false;
        } else if (trackFilter === 'vip') {
          if (!l.hasPromoAccess) return false;
        }

        // Status filter
        if (statusFilter === 'certified') {
          if (!l.certificates || l.certificates.length === 0) return false;
        } else if (statusFilter === 'in_progress') {
          const pyLessons = l.completedLessonsCount?.python || 0;
          const sqlLessons = l.completedLessonsCount?.sql || 0;
          if (pyLessons === 0 && sqlLessons === 0) return false;
          if (l.certificates && l.certificates.length > 0) return false;
        } else if (statusFilter === 'at_risk') {
          if (now - new Date(l.lastActiveAt).getTime() <= sevenDaysMs) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'xp') return (b.xp || 0) - (a.xp || 0);
        if (sortBy === 'score') {
          const maxA = Math.max(a.examRecords?.python?.bestScore || 0, a.examRecords?.sql?.bestScore || 0);
          const maxB = Math.max(b.examRecords?.python?.bestScore || 0, b.examRecords?.sql?.bestScore || 0);
          return maxB - maxA;
        }
        if (sortBy === 'progress') {
          const sumA = (a.completedLessonsCount?.python || 0) + (a.completedLessonsCount?.sql || 0);
          const sumB = (b.completedLessonsCount?.python || 0) + (b.completedLessonsCount?.sql || 0);
          return sumB - sumA;
        }
        if (sortBy === 'ltv') return (b.ltvInr || 0) - (a.ltvInr || 0);
        if (sortBy === 'recent') {
          return new Date(b.lastActiveAt).getTime() - new Date(a.lastActiveAt).getTime();
        }
        return 0;
      });
  }, [learners, searchQuery, trackFilter, statusFilter, sortBy]);

  // Actions
  const handleGrantEmergencyVoucher = (studentEmail: string, trackId: string) => {
    if (
      !confirm(
        `Grant an emergency re-attempt voucher for ${trackId.toUpperCase()} to ${studentEmail}?\n\nNote: Student scores remain strictly read-only and immutable. The student will receive a free exam slot to test honestly.`
      )
    ) {
      return;
    }

    const success = StudentCRMService.grantEmergencyVoucher(studentEmail, trackId);
    if (success) {
      const updated = StudentCRMService.getLearners();
      setLearners(updated);
      if (selectedStudent && selectedStudent.email.toLowerCase() === studentEmail.toLowerCase()) {
        const found = updated.find((l) => l.email.toLowerCase() === studentEmail.toLowerCase());
        if (found) setSelectedStudent(found);
      }
      onShowToast(`Emergency exam voucher granted to ${studentEmail}`, 'success');
    } else {
      onShowToast('Could not grant voucher', 'error');
    }
  };

  const handleGrantTrackAccess = (studentEmail: string, trackId: string) => {
    if (!confirm(`Grant complimentary full access for ${trackId.toUpperCase()} to ${studentEmail}?`)) {
      return;
    }

    const success = StudentCRMService.grantTrackAccess(studentEmail, trackId);
    if (success) {
      const updated = StudentCRMService.getLearners();
      setLearners(updated);
      if (selectedStudent && selectedStudent.email.toLowerCase() === studentEmail.toLowerCase()) {
        const found = updated.find((l) => l.email.toLowerCase() === studentEmail.toLowerCase());
        if (found) setSelectedStudent(found);
      }
      onShowToast(`Granted ${trackId.toUpperCase()} curriculum access to ${studentEmail}`, 'success');
    } else {
      onShowToast('Could not grant track access', 'error');
    }
  };

  const handleExportCSV = () => {
    StudentCRMService.exportLearnersCSV(filteredLearners);
    onShowToast(`Exported ${filteredLearners.length} student records to CSV`, 'info');
  };

  return (
    <div className="h-full flex flex-col bg-slate-950 font-sans text-slate-200 overflow-hidden">
      
      {/* Top Banner / Metrics Overview */}
      <div className="p-6 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border-b border-indigo-500/20 space-y-4 shrink-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-bold text-white tracking-tight">
                  Students & Learner CRM 360°
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                  Live Learner Hub
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Track enrolled students, subscriptions, course progress, quiz retakes, XP levels, and issue emergency support vouchers.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleExportCSV}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center space-x-2 border border-slate-800 transition"
              title="Download CSV export"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Export CSV ({filteredLearners.length})</span>
            </button>
          </div>
        </div>

        {/* 5 KPI Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-1">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-0.5">
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">Total Enrolled</span>
            <span className="text-xl font-bold font-mono text-white">{metrics.total}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-0.5">
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">Paying Students</span>
            <span className="text-xl font-bold font-mono text-emerald-400">{metrics.paying}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-0.5">
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">Platform Revenue</span>
            <span className="text-xl font-bold font-mono text-cyan-400">₹{metrics.totalLtv.toLocaleString()}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-0.5">
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">Graduates (Certs)</span>
            <span className="text-xl font-bold font-mono text-amber-400">{metrics.certified}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-0.5">
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">At-Risk (&gt;7d Inactive)</span>
            <span className={`text-xl font-bold font-mono ${metrics.atRisk > 0 ? 'text-rose-400' : 'text-slate-400'}`}>
              {metrics.atRisk}
            </span>
          </div>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="p-4 border-b border-slate-800 bg-slate-900/50 space-y-3 shrink-0">
        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Search Box */}
          <div className="relative flex-1 w-full">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by student name, email, or credential ID..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Track Filter */}
          <select
            value={trackFilter}
            onChange={(e) => setTrackFilter(e.target.value as any)}
            className="w-full md:w-44 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-indigo-500"
          >
            <option value="all">All Courses</option>
            <option value="python">Python Enrolled</option>
            <option value="sql">SQL Enrolled</option>
            <option value="vip">All-Access VIP Only</option>
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="w-full md:w-48 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-indigo-500"
          >
            <option value="all">All Learner Statuses</option>
            <option value="certified">Certified Graduates</option>
            <option value="in_progress">Active In Progress</option>
            <option value="at_risk">⚠️ At-Risk (&gt;7d Inactive)</option>
          </select>

          {/* Sort By */}
          <div className="flex items-center space-x-1.5 w-full md:w-auto">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full md:w-40 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-indigo-500"
            >
              <option value="xp">Sort by Highest XP</option>
              <option value="score">Sort by Exam Score</option>
              <option value="progress">Sort by Lessons Done</option>
              <option value="ltv">Sort by Customer LTV</option>
              <option value="recent">Sort by Last Active</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Table Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-950/80 border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-4">Student Profile</th>
                  <th className="py-3 px-4">Courses & Subscriptions</th>
                  <th className="py-3 px-4">Curriculum Progress</th>
                  <th className="py-3 px-4">XP & Streak</th>
                  <th className="py-3 px-4">Highest Exam Score</th>
                  <th className="py-3 px-4">Retakes & Cooldown</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredLearners.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-16 text-center text-slate-500">
                      <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-2 text-slate-600">
                        <Users className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-semibold text-white">No students match your criteria</p>
                      <p className="text-xs text-slate-400 mt-1">Try resetting search query or track filters.</p>
                    </td>
                  </tr>
                ) : (
                  filteredLearners.map((student) => {
                    const isAtRisk = Date.now() - new Date(student.lastActiveAt).getTime() > 7 * 24 * 60 * 60 * 1000;
                    const pyLessons = student.completedLessonsCount?.python || 0;
                    const sqlLessons = student.completedLessonsCount?.sql || 0;
                    const pyPercent = Math.min(100, Math.round((pyLessons / 150) * 100));
                    const sqlPercent = Math.min(100, Math.round((sqlLessons / 160) * 100));

                    // Best exam overall
                    const pyScore = student.examRecords?.python?.bestScore;
                    const sqlScore = student.examRecords?.sql?.bestScore;

                    // Active retake pass or cooldown
                    const pyRetakeActive = student.examRecords?.python?.isRetakePassActive;
                    const pyCooldown = student.examRecords?.python?.cooldownEndsAt && new Date(student.examRecords.python.cooldownEndsAt).getTime() > Date.now();

                    return (
                      <tr
                        key={student.id}
                        className="hover:bg-slate-800/40 transition group"
                      >
                        {/* 1. Student Identity */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-center space-x-3">
                            <img
                              src={student.avatarUrl}
                              alt={student.fullName}
                              className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 object-cover shrink-0"
                            />
                            <div className="min-w-0">
                              <div className="font-bold text-white flex items-center space-x-1.5 truncate">
                                <span>{student.fullName}</span>
                                {student.hasPromoAccess && (
                                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                    VIP
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] text-slate-400 font-mono truncate">{student.email}</div>
                              <div className="flex items-center space-x-1.5 mt-0.5 text-[10px]">
                                <span className="text-slate-500">
                                  {student.provider === 'google' ? 'Google Auth' : 'Email/Pass'}
                                </span>
                                {isAtRisk && (
                                  <span className="px-1.5 rounded text-[9px] font-bold bg-rose-500/20 text-rose-300">
                                    ⚠️ Inactive
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* 2. Courses & Subscriptions */}
                        <td className="py-3.5 px-4">
                          <div className="space-y-1">
                            <div className="flex flex-wrap gap-1">
                              {student.hasPromoAccess ? (
                                <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center space-x-1">
                                  <Gift className="w-3 h-3" />
                                  <span>All-Access VIP Free</span>
                                </span>
                              ) : (
                                <>
                                  {student.purchasedCourses.includes('python') && (
                                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                      🐍 Python (₹199)
                                    </span>
                                  )}
                                  {student.purchasedCourses.includes('sql') && (
                                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                      🐬 SQL (₹199)
                                    </span>
                                  )}
                                </>
                              )}

                              {pyRetakeActive && (
                                <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                                  🎟️ Retake Pass Active
                                </span>
                              )}
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono">
                              Total LTV: <strong className="text-white">₹{student.ltvInr}</strong>
                            </div>
                          </div>
                        </td>

                        {/* 3. Curriculum Progress */}
                        <td className="py-3.5 px-4">
                          <div className="space-y-1.5 w-40">
                            {/* Python bar */}
                            {student.purchasedCourses.includes('python') && (
                              <div>
                                <div className="flex items-center justify-between text-[10px]">
                                  <span className="text-slate-400">🐍 Python</span>
                                  <span className="font-mono text-emerald-400 font-semibold">{pyLessons}/150 ({pyPercent}%)</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-0.5">
                                  <div
                                    className="h-full bg-emerald-500 rounded-full"
                                    style={{ width: `${pyPercent}%` }}
                                  />
                                </div>
                              </div>
                            )}

                            {/* SQL bar */}
                            {student.purchasedCourses.includes('sql') && (
                              <div>
                                <div className="flex items-center justify-between text-[10px]">
                                  <span className="text-slate-400">🐬 SQL</span>
                                  <span className="font-mono text-cyan-400 font-semibold">{sqlLessons}/160 ({sqlPercent}%)</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-0.5">
                                  <div
                                    className="h-full bg-cyan-500 rounded-full"
                                    style={{ width: `${sqlPercent}%` }}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </td>

                        {/* 4. XP & Streak */}
                        <td className="py-3.5 px-4 font-mono">
                          <div className="space-y-0.5">
                            <div className="font-bold text-amber-400 flex items-center space-x-1">
                              <Zap className="w-3.5 h-3.5" />
                              <span>{student.xp.toLocaleString()} XP</span>
                            </div>
                            <div className="text-[10px] text-slate-400 flex items-center space-x-1">
                              <Flame className="w-3 h-3 text-rose-400" />
                              <span>{student.streakDays} Day Streak</span>
                            </div>
                            <span className="inline-block text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 border border-slate-700">
                              {student.tierName}
                            </span>
                          </div>
                        </td>

                        {/* 5. Highest Exam Score */}
                        <td className="py-3.5 px-4">
                          <div className="space-y-1">
                            {pyScore !== undefined && pyScore !== null ? (
                              <div className="flex items-center space-x-1.5">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                                  pyScore >= 90
                                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                    : pyScore >= 70
                                    ? 'bg-slate-300/20 text-slate-200 border border-slate-400/30'
                                    : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                                }`}>
                                  PY: {pyScore}%
                                </span>
                                {pyScore >= 90 && <span title="Distinction (Gold Seal)">🥇</span>}
                                {pyScore >= 70 && pyScore < 90 && <span title="Honors (Silver Seal)">🥈</span>}
                              </div>
                            ) : null}

                            {sqlScore !== undefined && sqlScore !== null ? (
                              <div className="flex items-center space-x-1.5">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                                  sqlScore >= 90
                                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                    : sqlScore >= 70
                                    ? 'bg-slate-300/20 text-slate-200 border border-slate-400/30'
                                    : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                                }`}>
                                  SQL: {sqlScore}%
                                </span>
                                {sqlScore >= 90 && <span title="Distinction (Gold Seal)">🥇</span>}
                                {sqlScore >= 70 && sqlScore < 90 && <span title="Honors (Silver Seal)">🥈</span>}
                              </div>
                            ) : null}

                            {!pyScore && !sqlScore && (
                              <span className="text-slate-500 text-[10px] italic">No exam attempts yet</span>
                            )}
                          </div>
                        </td>

                        {/* 6. Retakes & Cooldown */}
                        <td className="py-3.5 px-4 font-mono text-[11px]">
                          <div className="space-y-1">
                            <div>
                              Attempts: <strong className="text-white">{student.examRecords?.python?.attemptsCount || 0} / 3</strong>
                            </div>
                            {pyCooldown ? (
                              <span className="text-amber-400 text-[10px] flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>⏳ Cooldown Active</span>
                              </span>
                            ) : (
                              <span className="text-emerald-400 text-[10px] flex items-center space-x-1">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>Exam Slot Ready</span>
                              </span>
                            )}
                          </div>
                        </td>

                        {/* 7. Actions */}
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => setSelectedStudent(student)}
                            className="px-3 py-1.5 rounded-lg bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600/30 transition text-xs font-semibold flex items-center space-x-1 ml-auto border border-indigo-500/30"
                          >
                            <span>360° Dossier</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </td>

                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* 360° STUDENT PROFILE DOSSIER SLIDE-OVER DRAWER / MODAL */}
      {/* ================================================================= */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/80 backdrop-blur-sm">
          <div className="w-full max-w-2xl h-full bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-200">
            
            {/* Drawer Header */}
            <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-3.5">
                <img
                  src={selectedStudent.avatarUrl}
                  alt={selectedStudent.fullName}
                  className="w-12 h-12 rounded-full border-2 border-indigo-500/40 object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-base font-bold text-white">{selectedStudent.fullName}</h3>
                    {selectedStudent.hasPromoAccess && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        VIP All-Access
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 font-mono">{selectedStudent.email}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    Member since {new Date(selectedStudent.joinedAt).toLocaleDateString()} • LTV: ₹{selectedStudent.ltvInr}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedStudent(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Dossier Tabs */}
            <div className="px-6 border-b border-slate-800 flex space-x-4 text-xs font-semibold shrink-0 bg-slate-900/50">
              <button
                onClick={() => setDossierTab('progress')}
                className={`py-3 border-b-2 transition ${
                  dossierTab === 'progress'
                    ? 'border-indigo-500 text-white'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                Curriculum Progress
              </button>

              <button
                onClick={() => setDossierTab('exams')}
                className={`py-3 border-b-2 transition ${
                  dossierTab === 'exams'
                    ? 'border-indigo-500 text-white'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                Quizzes & Exams ({Object.keys(selectedStudent.examRecords || {}).length})
              </button>

              <button
                onClick={() => setDossierTab('certificates')}
                className={`py-3 border-b-2 transition ${
                  dossierTab === 'certificates'
                    ? 'border-indigo-500 text-white'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                Certificates ({selectedStudent.certificates?.length || 0})
              </button>

              <button
                onClick={() => setDossierTab('billing')}
                className={`py-3 border-b-2 transition ${
                  dossierTab === 'billing'
                    ? 'border-indigo-500 text-white'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                Billing Ledger ({selectedStudent.subscriptions?.length || 0})
              </button>
            </div>

            {/* Tab Contents */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              
              {/* TAB 1: CURRICULUM PROGRESS */}
              {dossierTab === 'progress' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
                      Course Completion Overview
                    </h4>
                    
                    {/* Python */}
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-semibold">🐍 Python: Beginner to Pro (150 Topics)</span>
                        <span className="font-mono text-emerald-400 font-bold">
                          {selectedStudent.completedLessonsCount?.python || 0} / 150 Completed
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{
                            width: `${Math.round(((selectedStudent.completedLessonsCount?.python || 0) / 150) * 100)}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* SQL */}
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-semibold">🐬 SQL: Beginner to Pro (160 Topics)</span>
                        <span className="font-mono text-cyan-400 font-bold">
                          {selectedStudent.completedLessonsCount?.sql || 0} / 160 Completed
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-cyan-500 rounded-full"
                          style={{
                            width: `${Math.round(((selectedStudent.completedLessonsCount?.sql || 0) / 160) * 100)}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Last Visited Lesson & Stuck Point */}
                  {selectedStudent.lastLessonVisited && (
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1 text-xs">
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Current Stuck Point / Last Opened:</div>
                      <div className="font-bold text-indigo-300">{selectedStudent.lastLessonVisited.lessonTitle}</div>
                      <div className="text-[10px] text-slate-400">
                        Track: {selectedStudent.lastLessonVisited.trackId.toUpperCase()} • Visited {new Date(selectedStudent.lastLessonVisited.visitedAt).toLocaleString()}
                      </div>
                    </div>
                  )}

                  {/* Gamification breakdown */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-500 uppercase font-mono">Total XP</div>
                      <div className="text-base font-bold font-mono text-amber-400 mt-1">{selectedStudent.xp}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-500 uppercase font-mono">Daily Streak</div>
                      <div className="text-base font-bold font-mono text-rose-400 mt-1">{selectedStudent.streakDays} Days</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-500 uppercase font-mono">Rank Tier</div>
                      <div className="text-base font-bold font-mono text-white mt-1">{selectedStudent.tierName}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: EXAMS & RETAKES */}
              {dossierTab === 'exams' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 flex items-start space-x-2">
                    <Lock className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>
                      <strong>Strict Score Immutability:</strong> Historical attempt scores are digitally sealed and cannot be manually modified by admins. Use the Emergency Voucher button below to grant a fresh attempt slot.
                    </span>
                  </div>

                  {Object.entries(selectedStudent.examRecords || {}).map(([trackKey, examRec]) => (
                    <div key={trackKey} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                        <h4 className="text-xs font-bold text-white uppercase font-mono">
                          {examRec.trackTitle}
                        </h4>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300">
                          {examRec.attemptsCount} / {examRec.maxAttempts} Attempts Used
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase font-mono block">Verified Best Score</span>
                          <span className="text-lg font-bold font-mono text-emerald-400">
                            {examRec.bestScore !== null ? `${examRec.bestScore}%` : 'No attempts'}
                          </span>
                          <div className="text-[10px] text-slate-400">{examRec.bestGrade || 'Score is read-only 🔒'}</div>
                        </div>

                        <div>
                          <span className="text-[10px] text-slate-500 uppercase font-mono block">Retake Pass Status</span>
                          <span className="font-bold text-white">
                            {examRec.isRetakePassActive ? '🎟️ ₹49 Pass Active' : 'None Active'}
                          </span>
                        </div>
                      </div>

                      {/* Attempt History */}
                      {examRec.history.length > 0 && (
                        <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                          <span className="text-[10px] text-slate-400 font-mono uppercase">Attempt Audit Logs:</span>
                          {examRec.history.map((h) => (
                            <div
                              key={h.attemptNumber}
                              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs font-mono"
                            >
                              <div>
                                <span className="text-white font-bold">Attempt #{h.attemptNumber}:</span>{' '}
                                <span className="text-emerald-400 font-bold">{h.scorePercent}%</span>{' '}
                                <span className="text-slate-400">({h.grade})</span>
                              </div>
                              <div className="text-[10px] text-slate-500">
                                {h.durationMinutes}m duration • {h.focusViolations} focus lost
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Grant Emergency Voucher Button */}
                      <button
                        onClick={() => handleGrantEmergencyVoucher(selectedStudent.email, trackKey)}
                        className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center space-x-2 transition border border-slate-700 mt-2"
                      >
                        <RefreshCw className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Grant Emergency Re-Attempt Voucher (Reset Cooldown)</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 3: CERTIFICATES & CREDENTIALS */}
              {dossierTab === 'certificates' && (
                <div className="space-y-3">
                  {selectedStudent.certificates && selectedStudent.certificates.length > 0 ? (
                    selectedStudent.certificates.map((cert) => (
                      <div
                        key={cert.credentialId}
                        className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Award className="w-5 h-5 text-amber-400" />
                            <div>
                              <div className="text-xs font-bold text-white">{cert.trackTitle}</div>
                              <div className="text-[10px] font-mono text-indigo-300">
                                Credential ID: {cert.credentialId}
                              </div>
                            </div>
                          </div>

                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                            cert.distinctionTier === 'Distinction'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : 'bg-slate-300/20 text-slate-200 border border-slate-400/30'
                          }`}>
                            {cert.distinctionTier} Seal
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                          <span>Score: <strong className="text-emerald-400">{cert.scorePercent}%</strong></span>
                          <span>Issued: {new Date(cert.issuedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="py-12 text-center text-slate-500 text-xs">
                      <Award className="w-8 h-8 mx-auto mb-2 text-slate-600" />
                      <p>No certificates issued yet for this student.</p>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: BILLING & SUBSCRIPTIONS */}
              {dossierTab === 'billing' && (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Total Lifetime Value (LTV):</span>
                    <span className="text-base font-bold font-mono text-cyan-400">₹{selectedStudent.ltvInr}</span>
                  </div>

                  <div className="space-y-2">
                    {selectedStudent.subscriptions?.map((sub) => (
                      <div
                        key={sub.id}
                        className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs"
                      >
                        <div>
                          <div className="font-bold text-white">{sub.trackTitle}</div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            {sub.paymentId ? `Payment ID: ${sub.paymentId}` : 'Administrative Grant'}
                          </div>
                          <div className="text-[10px] text-slate-500">
                            Purchased: {new Date(sub.purchasedAt).toLocaleString()}
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="font-bold font-mono text-white">₹{sub.amountInr}</div>
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-mono uppercase bg-emerald-500/20 text-emerald-400">
                            {sub.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Drawer Footer Support Toolkit */}
            <div className="p-5 bg-slate-950 border-t border-slate-800 space-y-2 shrink-0">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                1-Click Administrative Support Actions:
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleGrantTrackAccess(selectedStudent.email, 'python')}
                  className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center space-x-1.5 transition border border-slate-700"
                >
                  <Gift className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Grant Python Track</span>
                </button>

                <button
                  onClick={() => handleGrantTrackAccess(selectedStudent.email, 'sql')}
                  className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center space-x-1.5 transition border border-slate-700"
                >
                  <Gift className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Grant SQL Track</span>
                </button>

                <a
                  href={`mailto:${selectedStudent.email}?subject=DevForge Learning Support&body=Hello ${encodeURIComponent(selectedStudent.fullName)},%0D%0A%0D%0AWe noticed you are making great progress on DevForge!`}
                  className="py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
