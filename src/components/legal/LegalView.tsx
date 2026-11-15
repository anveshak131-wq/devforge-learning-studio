import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  HelpCircle, 
  RotateCcw, 
  ArrowLeft, 
  Mail, 
  Clock, 
  CheckCircle2, 
  ExternalLink,
  Lock,
  Sparkles
} from 'lucide-react';

export type LegalTab = 'terms' | 'privacy' | 'refund' | 'contact';

interface LegalViewProps {
  initialTab?: LegalTab;
  onBack: () => void;
  onNavigateTab?: (tab: LegalTab) => void;
}

export const LegalView: React.FC<LegalViewProps> = ({
  initialTab = 'terms',
  onBack,
  onNavigateTab
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabChange = (tab: LegalTab) => {
    setActiveTab(tab);
    if (onNavigateTab) onNavigateTab(tab);
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-slate-950 font-sans text-slate-300 py-10 px-4 sm:px-6 lg:px-8 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Navigation & Header */}
        <div className="space-y-4">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-white transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" />
            <span>Back to DevForge</span>
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Compliance & Transparency
                </span>
                <span className="text-xs text-slate-500 font-mono">Last Updated: November 2026</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                DevForge Legal & Policy Center
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Transparent policies governing user rights, payment processing, data privacy, and course guarantees.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
          <button
            onClick={() => handleTabChange('terms')}
            className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-lg text-xs font-semibold transition flex items-center justify-center space-x-2 ${
              activeTab === 'terms'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms & Conditions</span>
          </button>

          <button
            onClick={() => handleTabChange('privacy')}
            className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-lg text-xs font-semibold transition flex items-center justify-center space-x-2 ${
              activeTab === 'privacy'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => handleTabChange('refund')}
            className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-lg text-xs font-semibold transition flex items-center justify-center space-x-2 ${
              activeTab === 'refund'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>Cancellation & Refund</span>
          </button>

          <button
            onClick={() => handleTabChange('contact')}
            className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-lg text-xs font-semibold transition flex items-center justify-center space-x-2 ${
              activeTab === 'contact'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Tab 1: Terms & Conditions */}
        {activeTab === 'terms' && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 text-xs sm:text-sm leading-relaxed">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                <FileText className="w-5 h-5 text-indigo-400" />
                <span>Terms and Conditions of Use</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Please read these terms carefully before accessing or purchasing courses on DevForge.
              </p>
            </div>

            <section className="space-y-2">
              <h3 className="font-bold text-white text-sm">1. Acceptance of Agreement</h3>
              <p>
                By accessing, browsing, or registering on <strong>DevForge Learning Studio</strong> (&ldquo;DevForge&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), located at <code>https://devforge-65f.pages.dev</code>, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-bold text-white text-sm">2. Description of Educational Services</h3>
              <p>
                DevForge provides interactive computer science learning tracks (Python, JavaScript, TypeScript, SQL, React, and Software Engineering). Features include in-browser code execution environments, automated grading test runners, capstone projects, and verifiable digital certificates.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-bold text-white text-sm">3. Course Access & Pricing Model</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li><strong>Free Preview Topics</strong>: Topics 1, 2, and 3 of every curriculum track are provided free of charge for prospective learners to assess quality and compatibility.</li>
                <li><strong>Full Course Pass</strong>: Topics 4 through 150, guided projects, and accredited completion certificates are accessible via a one-time payment of <strong>₹199 per course</strong>.</li>
                <li><strong>Lifetime Ownership</strong>: Course purchases are strictly one-time payments granting permanent, non-expiring access. There are no recurring subscription charges or hidden renewal fees.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="font-bold text-white text-sm">4. Account Responsibility & Single-User License</h3>
              <p>
                Authentication is provided via Google OAuth 2.0. Your account is personal and non-transferable. You agree not to share account credentials or redistribute proprietary course materials, tests, or curriculum content.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-bold text-white text-sm">5. Intellectual Property</h3>
              <p>
                All lesson texts, video lectures, coding challenges, slide decks, and platform UI are the exclusive intellectual property of DevForge. Code authored by students during interactive lab exercises remains the exclusive intellectual property of the respective student.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-bold text-white text-sm">6. Limitation of Liability</h3>
              <p>
                DevForge services are provided &ldquo;as is&rdquo; without warranties of any kind. While we strive for 99.9% uptime and accurate coding execution sandboxes, we are not liable for incidental or consequential damages resulting from platform downtime or code execution anomalies.
              </p>
            </section>
          </div>
        )}

        {/* Tab 2: Privacy Policy */}
        {activeTab === 'privacy' && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 text-xs sm:text-sm leading-relaxed">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                <Lock className="w-5 h-5 text-emerald-400" />
                <span>Privacy & Data Protection Policy</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Our strict commitment: Zero tracking ads, zero selling of personal data, and bank-grade encryption.
              </p>
            </div>

            <section className="space-y-2">
              <h3 className="font-bold text-white text-sm">1. Information We Collect</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li><strong>Identity Information</strong>: When you sign in with Google OAuth, we receive your verified email address, full name, and avatar image. We do not receive or store Google account passwords.</li>
                <li><strong>Academic Progress</strong>: Completed lesson IDs, quiz answers, test pass statuses, and issued certificate serial numbers are saved in your account profile.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="font-bold text-white text-sm">2. Payment Security & Zero Card Storage</h3>
              <p>
                All financial transactions on DevForge are processed securely through <strong>Razorpay Payment Gateway</strong> (certified PCI-DSS Level 1 compliant). 
              </p>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start space-x-3 text-xs">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <strong>DevForge NEVER collects, stores, or transmits</strong> your Debit/Credit card numbers, CVVs, net banking credentials, or UPI PINs. All payment processing occurs entirely within Razorpay&rsquo;s 256-bit encrypted checkout iframe.
                </span>
              </div>
            </section>

            <section className="space-y-2">
              <h3 className="font-bold text-white text-sm">3. How We Use Your Data</h3>
              <p>
                Your data is used exclusively to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>Authenticate your identity and restore your coding progress across devices.</li>
                <li>Stamp your legal name on accredited course certificates.</li>
                <li>Deliver order confirmations and critical service updates.</li>
              </ul>
              <p className="text-slate-400 text-xs">
                We will never sell, rent, or trade your personal information to third-party advertisers or data brokers under any circumstances.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-bold text-white text-sm">4. Cookies & Security Headers</h3>
              <p>
                DevForge uses a single <code>df_session</code> session cookie marked <code>HttpOnly</code>, <code>Secure</code>, and <code>SameSite=Lax</code> to protect against Cross-Site Scripting (XSS) and CSRF attacks.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-bold text-white text-sm">5. Data Deletion Requests</h3>
              <p>
                You may request complete deletion of your account and learning records at any time by emailing <code>support.privatetoolbox@gmail.com</code>.
              </p>
            </section>
          </div>
        )}

        {/* Tab 3: Cancellation & Refund Policy */}
        {activeTab === 'refund' && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 text-xs sm:text-sm leading-relaxed">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                <RotateCcw className="w-5 h-5 text-amber-400" />
                <span>Cancellation & Refund Policy</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Transparent policies governing digital course purchases, free previews, and duplicate transaction resolutions.
              </p>
            </div>

            <section className="space-y-2">
              <h3 className="font-bold text-white text-sm">1. Free Evaluation via Topics 1, 2, and 3</h3>
              <p>
                To allow prospective learners to make an informed decision, <strong>Topics 1, 2, and 3 of every curriculum track are 100% free of charge</strong>. Students can explore explanations, write code, run automated tests, and evaluate platform compatibility before committing to a purchase.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-bold text-white text-sm">2. Digital Goods Policy (All Sales Final)</h3>
              <p>
                Because full course access (₹199 per course pass) delivers immediate, non-revocable digital access to interactive lessons, capstone projects, and accredited certificate generation, <strong>all course purchases are final and non-refundable</strong> once unlocked.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-bold text-white text-sm">3. Duplicate Transactions & Technical Billing Errors</h3>
              <p>
                In the rare event that a user is accidentally charged more than once for the same course track due to a network or payment gateway glitch:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>We will gladly issue a <strong>100% refund for the duplicate transaction</strong> upon verification.</li>
                <li>Please email <code>support.privatetoolbox@gmail.com</code> with your transaction reference or Razorpay Payment ID within 7 days of the occurrence.</li>
                <li>Approved duplicate refunds are credited back to the original payment source (UPI, Card, or Bank) within <strong>5 to 7 business days</strong> via Razorpay.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="font-bold text-white text-sm">4. Cancellation of Subscriptions</h3>
              <p>
                DevForge does not charge recurring monthly subscriptions or auto-debits. Since all courses are one-time payments granting lifetime access, there are no recurring subscriptions to cancel or cancellation penalties.
              </p>
            </section>
          </div>
        )}

        {/* Tab 4: Contact Us */}
        {activeTab === 'contact' && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 text-xs sm:text-sm leading-relaxed">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Contact Customer Support</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Have questions about courses, payments, or certificates? We are here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-indigo-400 font-semibold text-xs">
                  <Mail className="w-4 h-4" />
                  <span>Official Support Email</span>
                </div>
                <p className="text-base font-bold text-white font-mono select-all">
                  support.privatetoolbox@gmail.com
                </p>
                <p className="text-[11px] text-slate-400">
                  Direct contact for course inquiries, billing, and technical assistance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-xs">
                  <Clock className="w-4 h-4" />
                  <span>Response Time & Support Hours</span>
                </div>
                <p className="text-base font-bold text-white">
                  Within 24 Hours
                </p>
                <p className="text-[11px] text-slate-400">
                  Monday to Saturday: 9:00 AM – 7:00 PM IST
                </p>
              </div>
            </div>

            <section className="space-y-3 pt-2">
              <h3 className="font-bold text-white text-sm">Entity & Service Details</h3>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Trading / Platform Name:</span>
                  <span className="font-semibold text-white">DevForge Learning Studio</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Website Address:</span>
                  <span className="font-semibold text-indigo-300 font-mono">https://devforge-65f.pages.dev</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Primary Product:</span>
                  <span className="font-semibold text-white">Interactive Coding & Software Engineering Courses</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Course Pass Pricing:</span>
                  <span className="font-semibold text-emerald-400 font-mono">₹199 per course (One-time payment)</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-400">Delivery Method:</span>
                  <span className="font-semibold text-white">Instant Digital Access via Cloud Sandbox</span>
                </div>
              </div>
            </section>
          </div>
        )}

      </div>
    </div>
  );
};
