import React, { useState } from 'react';
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Send,
  Calendar,
  Download,
  CheckCircle,
  ShieldCheck,
  MessageSquare,
  Clock,
} from 'lucide-react';
import { PROJECT_DETAILS } from '../../data/estateData';
import { LeadSubmission } from '../../types';

interface ContactSectionProps {
  onSuccessLead: (lead: LeadSubmission) => void;
  onOpenBrochure: () => void;
  onOpenSiteVisit: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onSuccessLead,
  onOpenBrochure,
  onOpenSiteVisit,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [configuration, setConfiguration] = useState('4 BHK Presidential Villa');
  const [budget, setBudget] = useState('₹2.5 Cr - ₹3.5 Cr');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const clean = mobile.replace(/\D/g, '');
    if (!fullName.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (clean.length < 10) {
      setError('Please enter a valid 10-digit Indian phone number (+91).');
      return;
    }
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = 'TGE-MAIN-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedId);

      const newLead: LeadSubmission = {
        id: generatedId,
        fullName,
        mobile: '+91 ' + clean.slice(-10),
        email,
        configuration,
        budget,
        message: message || 'General property enquiry from contact form.',
        source: 'Main Contact & VIP Enquiry Section',
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      onSuccessLead(newLead);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 750);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#061812] text-[#FBF9F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#152B20] border border-[#C5A880]/30 text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold">
              EXCLUSIVE INVITATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Your Dream Home Starts With a Conversation.
          </h2>

          <p className="text-sm sm:text-base text-[#B2C2BA] font-light leading-relaxed">
            Schedule a private walkthrough with our senior residential advisors or request bespoke pricing documents tailored to your family's preferences.
          </p>
        </div>

        {/* 2-Column: Left Contact Details + Right Premium Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Office Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0E221A] border border-[#C5A880]/30 shadow-2xl space-y-6">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37]">
                  EXPERIENCE PAVILION & SALES LOUNGE
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  The Grand Estate Concierge
                </h3>
                <p className="text-xs text-[#A0AFA8] mt-1 leading-relaxed">
                  Open every day from 09:30 AM to 07:00 PM IST for scheduled preview visits.
                </p>
              </div>

              {/* Contact Information List */}
              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`tel:${PROJECT_DETAILS.phone}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#142C22] border border-[#C5A880]/20 hover:border-[#D4AF37] transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#061812] text-[#D4AF37]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#A0AFA8] block uppercase">Direct Sales Hotline</span>
                    <span className="text-white font-mono font-semibold text-sm group-hover:text-[#D4AF37] transition-colors">
                      {PROJECT_DETAILS.phoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${PROJECT_DETAILS.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#142C22] border border-[#C5A880]/20 hover:border-[#D4AF37] transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#061812] text-[#D4AF37]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#A0AFA8] block uppercase">Email Concierge</span>
                    <span className="text-white font-mono font-semibold text-sm group-hover:text-[#D4AF37] transition-colors">
                      {PROJECT_DETAILS.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#142C22] border border-[#C5A880]/20">
                  <div className="p-2.5 rounded-lg bg-[#061812] text-[#D4AF37] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#A0AFA8] block uppercase">Experience Gallery Address</span>
                    <span className="text-white text-xs leading-relaxed block mt-0.5">
                      {PROJECT_DETAILS.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Concierge Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=Hi%20DevSyntix%20Builder%2C%20I%20am%20interested%20in%20The%20Grand%20Estate%20luxury%20villas.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#061D15] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with Senior Advisor on WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 border-t border-white/10 text-[11px] text-[#A0AFA8] flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>RERA ID: {PROJECT_DETAILS.reraNumber}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0E221A] border border-[#C5A880]/30 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37]">
                    VIP ENQUIRY DOSSIER
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    Submit Priority Inquiry
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#18362A] text-[#6EE7B7] text-[10px] font-mono border border-[#C5A880]/30">
                  Priority Response within 15 mins
                </span>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 bg-red-950/70 border border-red-500/40 text-red-200 text-xs rounded-xl">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-[#081812] border border-[#C5A880]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rahul@enterprise.in"
                        className="w-full px-4 py-3 rounded-xl bg-[#081812] border border-[#C5A880]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-semibold">
                        Mobile Number * (+91)
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-xl bg-[#142A21] border border-r-0 border-[#C5A880]/30 text-[#C5A880] text-sm font-semibold">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="98765 43210"
                          className="w-full px-4 py-3 rounded-r-xl bg-[#081812] border border-[#C5A880]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-semibold">
                        Preferred Configuration
                      </label>
                      <select
                        value={configuration}
                        onChange={(e) => setConfiguration(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#081812] border border-[#C5A880]/30 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                      >
                        <option value="3 BHK Signature Villa (₹2.5 Cr*)">3 BHK Signature Villa (₹2.5 Cr*)</option>
                        <option value="4 BHK Presidential Villa (₹3.5 Cr*)">4 BHK Presidential Villa (₹3.5 Cr*)</option>
                        <option value="5 BHK Royal Estate Villa (Bespoke)">5 BHK Royal Estate Villa (Bespoke)</option>
                        <option value="Plotted Enclave Inquiry">Plotted Enclave Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-semibold">
                      Expected Investment Budget
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#081812] border border-[#C5A880]/30 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                    >
                      <option value="₹2.5 Cr - ₹3.5 Cr">₹2.5 Cr - ₹3.5 Cr</option>
                      <option value="₹3.5 Cr - ₹5.0 Cr">₹3.5 Cr - ₹5.0 Cr</option>
                      <option value="₹5.0 Cr - ₹8.0 Cr">₹5.0 Cr - ₹8.0 Cr</option>
                      <option value="₹8.0 Cr+ (Ultra-Luxury Trophy)">₹8.0 Cr+ (Ultra-Luxury Trophy)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-semibold">
                      Personal Message / Specific Customizations
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Inquiring about east-facing plots, corner locations, elevator installation, or payment milestones..."
                      className="w-full px-4 py-3 rounded-xl bg-[#081812] border border-[#C5A880]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                    />
                  </div>

                  {/* 3 Buttons required by user spec */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#C5A880] via-[#D4AF37] to-[#B89868] text-[#0B2B20] font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:brightness-110 shadow-xl shadow-[#D4AF37]/25 transition-all cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-[#0B2B20] border-t-transparent rounded-full animate-spin" />
                          Logging Lead...
                        </span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit VIP Enquiry
                        </>
                      )}
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={onOpenSiteVisit}
                        className="py-3 px-4 rounded-xl bg-[#142C22] hover:bg-[#1B3A2E] text-[#D4AF37] border border-[#C5A880]/40 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        Request a Site Visit
                      </button>

                      <button
                        type="button"
                        onClick={onOpenBrochure}
                        className="py-3 px-4 rounded-xl bg-[#142C22] hover:bg-[#1B3A2E] text-white border border-[#C5A880]/40 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-[#C5A880]" />
                        Download Brochure
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#A0AFA8] pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#C5A880]" />
                      Direct developer liaison
                    </span>
                    <span className="italic">Demo simulation mode active</span>
                  </div>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#163828] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                    SUBMISSION LOGGED SUCCESSFULLY
                  </span>
                  <h4 className="text-2xl font-serif font-bold text-white">
                    Thank You, {fullName}!
                  </h4>
                  <p className="text-sm text-[#A0AFA8] max-w-md mx-auto leading-relaxed">
                    Your request has been captured in our demo CRM under reference <strong className="text-white font-mono">{referenceId}</strong>. A simulated confirmation dossier has been allocated.
                  </p>

                  <div className="p-4 rounded-xl bg-[#091812] border border-[#C5A880]/30 text-xs text-left max-w-sm mx-auto space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#A0AFA8]">Phone:</span>
                      <span className="text-white font-mono">{mobile}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A0AFA8]">Configuration:</span>
                      <span className="text-white">{configuration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A0AFA8]">Status:</span>
                      <span className="text-[#6EE7B7] font-semibold">Ready for Review in Demo CRM</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#142C22] hover:bg-[#1B3A2E] text-xs font-semibold uppercase tracking-wider text-[#D4AF37] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
