import React, { useEffect, useRef, useState } from 'react';
import { Loader2, ExternalLink, ShieldCheck } from 'lucide-react';

interface RazorpayButtonProps {
  paymentButtonId?: string;
  className?: string;
}

export const RazorpayButton: React.FC<RazorpayButtonProps> = ({
  paymentButtonId = 'pl_Tzg6tLfdsapRCO',
  className = ''
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    // Reset container for clean mounting
    form.innerHTML = '';
    setLoading(true);

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', paymentButtonId);
    script.async = true;

    script.onload = () => {
      setLoading(false);
    };

    script.onerror = () => {
      setLoading(false);
    };

    form.appendChild(script);

    // Timeout safety in case Razorpay script replaces DOM nodes before firing onload
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => {
      clearTimeout(timer);
      if (form) form.innerHTML = '';
    };
  }, [paymentButtonId]);

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {loading && (
        <div className="flex items-center justify-center space-x-2 py-3 px-5 text-xs text-slate-400 bg-slate-900/80 rounded-xl border border-slate-800 animate-pulse">
          <Loader2 className="w-4 h-4 animate-spin text-rose-400" />
          <span>Connecting to Razorpay Secure Gateway...</span>
        </div>
      )}

      {/* Official Razorpay Form Element */}
      <form 
        ref={formRef} 
        className={`w-full flex justify-center items-center ${loading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 transition-opacity duration-300'}`} 
      />
    </div>
  );
};
