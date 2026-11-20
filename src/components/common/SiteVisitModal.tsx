import React, { useState } from 'react';
import { X, Calendar, Clock, Car, CheckCircle, ShieldCheck, PhoneCall } from 'lucide-react';
import { PROJECT_DETAILS } from '../../data/estateData';
import { LeadSubmission } from '../../types';

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (lead: LeadSubmission) => void;
}

export const SiteVisitModal: React.FC<SiteVisitModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM - 01:00 PM (Morning Slot)');
  const [villaInterest, setVillaInterest] = useState('4 BHK Presidential Villa');
  const [needChauffeur, setNeedChauffeur] = useState(true);
  const [pickupLocation, setPickupLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanPhone = mobile.replace(/\D/g, '');
    if (!fullName.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (cleanPhone.length < 10) {
      setError('Please provide a valid 10-digit Indian phone number.');
      return;
    }
    if (!date) {
      setError('Please select a preferred date for the site visit.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = 'VISIT-' + Math.floor(10000 + Math.random() * 90000);
      setReferenceId(generatedId);

      const newLead: LeadSubmission = {
        id: generatedId,
        fullName,
        mobile: '+91 ' + cleanPhone.slice(-10),
        email: email || 'site-visit@client.in',
        configuration: villaInterest,
        budget: '₹2.5 Cr - ₹5.0 Cr+',
        preferredDate: `${date} at ${timeSlot} (Chauffeur: ${needChauffeur ? 'Yes' : 'Self Drive'})`,
        source: 'Chauffeured Site Visit Booking Modal',
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      onSuccess(newLead);
      setIsSubmitting(false);
      setIsBooked(true);
    }, 850);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="site-visit-title"
    >
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#0E1B15] text-[#FBF9F4] rounded-2xl border border-[#C5A880]/40 shadow-2xl overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-[#9F7E50] via-[#D4AF37] to-[#C5A880]" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#A0AFA8] hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!isBooked ? (
            <>
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2.5 rounded-xl bg-[#162D23] text-[#D4AF37] border border-[#C5A880]/30">
                  <Car className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#C5A880] font-semibold">
                    VIP EXPERIENCE
                  </span>
                  <h3 id="site-visit-title" className="text-xl sm:text-2xl font-serif text-white">
                    Schedule Private Site Visit
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#A0AFA8] mb-5 leading-relaxed">
                Tour the 25-acre landscaped masterplan, experience the 4 BHK model villa, and review tailored architectural customisations with our senior property advisors.
              </p>

              {error && (
                <div className="mb-4 p-3 bg-red-950/60 border border-red-500/40 text-red-200 text-xs rounded-lg">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Vikram Malhotra"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#13251D] border border-[#C5A880]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-medium">
                      Mobile Number * (+91)
                    </label>
                    <input
                      type="tel"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#13251D] border border-[#C5A880]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-medium">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#13251D] border border-[#C5A880]/30 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-medium">
                      Preferred Time Slot *
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#13251D] border border-[#C5A880]/30 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="10:00 AM - 12:00 PM (Morning Slot)">10:00 AM - 12:00 PM (Morning)</option>
                      <option value="12:00 PM - 02:00 PM (Afternoon Slot)">12:00 PM - 02:00 PM (Afternoon)</option>
                      <option value="03:00 PM - 05:00 PM (Evening Twilight)">03:00 PM - 05:00 PM (Twilight)</option>
                      <option value="05:00 PM - 06:30 PM (Sunset Experience)">05:00 PM - 06:30 PM (Sunset)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-medium">
                      Villa of Interest
                    </label>
                    <select
                      value={villaInterest}
                      onChange={(e) => setVillaInterest(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#13251D] border border-[#C5A880]/30 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="3 BHK Signature Villa (₹2.5 Cr*)">3 BHK Signature Villa (₹2.5 Cr*)</option>
                      <option value="4 BHK Presidential Villa (₹3.5 Cr*)">4 BHK Presidential Villa (₹3.5 Cr*)</option>
                      <option value="5 BHK Royal Estate Villa (Bespoke)">5 BHK Royal Estate Villa (Bespoke)</option>
                      <option value="Undecided / Open to options">Undecided / Exploring Options</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-medium">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vikram@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#13251D] border border-[#C5A880]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Complimentary Chauffeur Toggle */}
                <div className="p-3.5 rounded-xl bg-[#152B20] border border-[#C5A880]/30 flex flex-col gap-2">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={needChauffeur}
                      onChange={(e) => setNeedChauffeur(e.target.checked)}
                      className="w-4 h-4 rounded text-[#D4AF37] focus:ring-0 bg-[#0E1B15] border-[#C5A880]/40"
                    />
                    <span className="text-xs text-white font-medium">
                      Request complimentary luxury chauffeur transfer (Mercedes/BMW pickup across Bangalore)
                    </span>
                  </label>

                  {needChauffeur && (
                    <input
                      type="text"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      placeholder="Enter pickup address / hotel / airport"
                      className="w-full mt-1 px-3 py-2 rounded-lg bg-[#0E1B15] border border-[#C5A880]/20 text-white text-xs placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                    />
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C5A880] via-[#D4AF37] to-[#B89868] text-[#0B2B20] font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-[#D4AF37]/20 transition-all cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#0B2B20] border-t-transparent rounded-full animate-spin" />
                        Confirming Concierge Slot...
                      </span>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4" />
                        Confirm Private Site Tour
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#A0AFA8] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Personal concierge assigned within 30 minutes of booking.</span>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#163828] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                APPOINTMENT RESERVED
              </span>
              <h3 className="text-2xl font-serif text-white mt-1 mb-2">
                Site Visit Confirmed!
              </h3>
              <p className="text-sm text-[#A0AFA8] mb-5 max-w-sm mx-auto">
                Dear {fullName}, your private model villa tour has been reserved. Our senior advisor will connect shortly to finalize your chauffeur itinerary.
              </p>

              <div className="p-4 rounded-xl bg-[#14261E] border border-[#C5A880]/30 text-left mb-6 space-y-2 text-xs">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#A0AFA8]">Booking Reference:</span>
                  <span className="font-mono text-[#D4AF37] font-semibold">{referenceId}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#A0AFA8]">Date & Slot:</span>
                  <span className="text-white font-medium">{date} • {timeSlot.split(' ')[0]} {timeSlot.split(' ')[1]}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#A0AFA8]">Residence Type:</span>
                  <span className="text-white font-medium">{villaInterest}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0AFA8]">Chauffeur Service:</span>
                  <span className="text-[#6EE7B7] font-medium">{needChauffeur ? 'Complimentary Chauffeur Confirmed' : 'Self Drive Arrival'}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl bg-[#1C3227] hover:bg-[#254234] text-white text-xs tracking-wider uppercase font-semibold transition-colors"
                >
                  Close
                </button>
                <a
                  href={`tel:${PROJECT_DETAILS.phone}`}
                  className="flex-1 py-3 rounded-xl bg-[#C5A880] hover:bg-[#D4AF37] text-[#0B2B20] text-xs tracking-wider uppercase font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  Call Concierge
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
