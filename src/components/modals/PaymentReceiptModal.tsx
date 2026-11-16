import React, { useState } from 'react';
import { 
  Receipt, 
  Printer, 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  Copy, 
  Check, 
  X, 
  ExternalLink,
  CreditCard,
  Calendar,
  User,
  Sparkles
} from 'lucide-react';
import { PaymentReceipt } from '../../types/auth';

interface PaymentReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  receipt: PaymentReceipt | null;
}

export const PaymentReceiptModal: React.FC<PaymentReceiptModalProps> = ({
  isOpen,
  onClose,
  receipt,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !receipt) return null;

  const handleCopyReceiptId = () => {
    navigator.clipboard.writeText(receipt.receiptNumber || receipt.paymentId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const formattedDate = new Date(receipt.timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });

  return (
    <>
      {/* Inject print-specific styles to guarantee a pristine A4 printout */}
      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
          }
          #devforge-receipt-printable, #devforge-receipt-printable * {
            visibility: visible !important;
          }
          #devforge-receipt-printable {
            position: fixed !important;
            left: 0 !important;
            top: 0 !important;
            width: 100vw !important;
            height: auto !important;
            margin: 0 !important;
            padding: 36px 48px !important;
            background: #ffffff !important;
            color: #0f172a !important;
            box-shadow: none !important;
            border: none !important;
            z-index: 9999999 !important;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
          }
          .no-print {
            display: none !important;
          }
          .print-border {
            border: 1px solid #cbd5e1 !important;
          }
          .print-bg-slate {
            background-color: #f8fafc !important;
          }
          .print-text-dark {
            color: #0f172a !important;
          }
          .print-text-muted {
            color: #475569 !important;
          }
        }
      `}</style>

      {/* Modal Backdrop */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto no-print animate-in fade-in duration-200"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden my-8">
          
          {/* Header Action Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-800/80 border-b border-slate-700/70">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <Receipt className="w-4 h-4" />
              </span>
              <div>
                <h2 className="text-sm font-bold text-white tracking-wide">
                  Official Payment Receipt
                </h2>
                <span className="text-[11px] text-slate-400 font-mono">
                  {receipt.receiptNumber}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-md shadow-indigo-600/30 transition"
                title="Print or Save PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Invoice Container */}
          <div id="devforge-receipt-printable" className="p-6 md:p-8 space-y-6 text-slate-200 bg-slate-900">
            
            {/* Top Brand Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 print-border">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-500/20">
                    DF
                  </div>
                  <span className="text-lg font-black text-white tracking-tight print-text-dark">
                    DevForge
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                    Academy
                  </span>
                </div>
                <p className="text-xs text-slate-400 print-text-muted">
                  DevForge Academy of Software Engineering • Bangalore, India
                </p>
              </div>

              <div className="text-left sm:text-right space-y-1">
                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PAID & VERIFIED</span>
                </span>
                <p className="text-xs font-mono text-slate-400 print-text-muted">
                  Invoice #: <span className="text-white font-bold print-text-dark">{receipt.receiptNumber}</span>
                </p>
                <p className="text-[11px] text-slate-500 print-text-muted">
                  Date: {formattedDate}
                </p>
              </div>
            </div>

            {/* Two-Column Parties Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-800 print-bg-slate print-border text-xs">
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase print-text-muted">
                  Billed To (Learner):
                </span>
                <p className="font-bold text-white text-sm print-text-dark">
                  {receipt.userName || 'DevForge Student'}
                </p>
                <p className="text-slate-300 print-text-muted font-mono">
                  {receipt.userEmail}
                </p>
                {receipt.userId && (
                  <p className="text-[11px] text-slate-500 font-mono">
                    Student ID: {receipt.userId}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase print-text-muted">
                  Payment Reference:
                </span>
                <p className="font-mono text-indigo-400 font-bold print-text-dark flex items-center space-x-1">
                  <span>{receipt.paymentId}</span>
                </p>
                <p className="text-slate-300 print-text-muted">
                  Gateway: Razorpay Live Ledger
                </p>
                <p className="text-[11px] text-slate-500">
                  Payment Method: {receipt.paymentMethod || 'UPI / ONLINE'}
                </p>
              </div>
            </div>

            {/* Line Items Table */}
            <div className="overflow-hidden rounded-xl border border-slate-800 print-border">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-800/60 print-bg-slate text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800 print-border">
                  <tr>
                    <th className="py-3 px-4">Item & Description</th>
                    <th className="py-3 px-4 text-center">Type</th>
                    <th className="py-3 px-4 text-center">Qty</th>
                    <th className="py-3 px-4 text-right">Amount (INR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 print-border">
                  <tr>
                    <td className="py-3.5 px-4 space-y-0.5">
                      <p className="font-bold text-white print-text-dark text-sm">
                        {receipt.itemTitle}
                      </p>
                      <p className="text-[11px] text-slate-400 print-text-muted">
                        Interactive lessons, hands-on sandboxes, guided projects, and graduation certification.
                      </p>
                    </td>
                    <td className="py-3.5 px-4 text-center text-slate-300 print-text-muted capitalize">
                      {receipt.itemType} pass
                    </td>
                    <td className="py-3.5 px-4 text-center text-slate-300 print-text-muted font-mono">
                      1
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-white print-text-dark text-sm">
                      ₹{receipt.amountInr}.00
                    </td>
                  </tr>
                  <tr className="bg-slate-800/20 print-bg-slate">
                    <td colSpan={3} className="py-2.5 px-4 text-right text-slate-400 print-text-muted">
                      Taxes & Gateway Processing Fees:
                    </td>
                    <td className="py-2.5 px-4 text-right text-slate-400 print-text-muted font-mono">
                      Included (₹0.00)
                    </td>
                  </tr>
                  <tr className="bg-indigo-950/20 print-bg-slate border-t border-indigo-500/30 print-border">
                    <td colSpan={3} className="py-3 px-4 text-right font-bold text-white print-text-dark text-sm">
                      Total Amount Paid:
                    </td>
                    <td className="py-3 px-4 text-right font-mono font-extrabold text-emerald-400 print-text-dark text-base">
                      ₹{receipt.amountInr}.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Authenticity Seal & Footer */}
            <div className="pt-4 border-t border-slate-800 print-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="space-y-1">
                <div className="flex items-center space-x-1 text-slate-400 print-text-muted">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold text-slate-300 print-text-dark">Tamper-Proof Verification Hash:</span>
                </div>
                <p className="font-mono text-[11px] text-slate-500 print-text-muted break-all">
                  {receipt.verificationHash}
                </p>
                <p className="text-[11px] text-slate-500 print-text-muted">
                  This is a computer-generated tax receipt officially issued by DevForge Academy.
                </p>
              </div>

              <div className="no-print flex items-center space-x-2 shrink-0">
                <button
                  onClick={handleCopyReceiptId}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center space-x-1.5 border border-slate-700 transition"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Receipt ID' : 'Copy ID'}</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center space-x-1.5 shadow-lg shadow-indigo-600/30 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download / Print</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
