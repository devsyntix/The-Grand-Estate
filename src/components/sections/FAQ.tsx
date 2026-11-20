import React, { useState } from 'react';
import { Sparkles, ChevronDown, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';
import { FAQ_LIST, PROJECT_DETAILS } from '../../data/estateData';

interface FAQProps {
  onOpenEnquiry: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenEnquiry }) => {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_LIST[0].id, FAQ_LIST[7].id]);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FBF9F4] text-[#121614] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B2B20]/10 border border-[#0B2B20]/20 text-[#0B2B20]">
            <HelpCircle className="w-3.5 h-3.5 text-[#9F7E50]" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold">
              CLARITY & ASSISTANCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0B2B20] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-[#4A5D54] font-light leading-relaxed">
            Everything you need to know regarding location, masterplan specifications, approvals, and scheduling your private site tour.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#C5A880] shadow-md'
                    : 'bg-white/70 border-[#C5A880]/30 hover:border-[#9F7E50]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-semibold text-base sm:text-lg text-[#0B2B20] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#0B2B20] text-[#D4AF37] rotate-180'
                        : 'bg-[#F4EFE6] text-[#0B2B20]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#4A5D54] leading-relaxed border-t border-[#F0EAE0] whitespace-pre-line animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0B2B20] text-[#FBF9F4] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-lg font-bold text-white">Have a specific architectural question?</h4>
            <p className="text-xs text-[#A0AFA8]">Our senior project directors are available 7 days a week.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onOpenEnquiry}
              className="px-4 py-2.5 rounded-xl bg-[#C5A880] hover:bg-[#D4AF37] text-[#061D15] text-xs font-bold uppercase tracking-wider transition-all"
            >
              Ask an Advisor
            </button>
            <a
              href={`https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=Hi%20DevSyntix%2C%20I%20have%20a%20question%20about%20The%20Grand%20Estate.`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
