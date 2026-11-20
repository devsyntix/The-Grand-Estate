import React from 'react';
import { X, Users, Trash2, Download, ExternalLink, ShieldCheck, Clock, Phone, Mail, Home } from 'lucide-react';
import { LeadSubmission } from '../../types';

interface DemoLeadsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  leads: LeadSubmission[];
  onClearLeads: () => void;
}

export const DemoLeadsDrawer: React.FC<DemoLeadsDrawerProps> = ({
  isOpen,
  onClose,
  leads,
  onClearLeads,
}) => {
  if (!isOpen) return null;

  const exportCSV = () => {
    if (leads.length === 0) return;
    const headers = 'ID,Name,Mobile,Email,Configuration,Budget,Source,Time\n';
    const rows = leads
      .map(
        (l) =>
          `"${l.id}","${l.fullName}","${l.mobile}","${l.email}","${l.configuration}","${l.budget}","${l.source}","${l.submittedAt}"`
      )
      .join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `DevSyntix_Builder_Leads_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="crm-drawer-title"
    >
      <div
        className="relative w-full max-w-xl h-full bg-[#0B1713] text-[#FBF9F4] border-l border-[#C5A880]/40 shadow-2xl flex flex-col overflow-hidden overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#11231C] border-b border-[#C5A880]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#1A382C] text-[#D4AF37] border border-[#C5A880]/40">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A880] font-semibold">
                DEVSYNTIX CRM ENGINE • LIVE DEMO
              </span>
              <h3 id="crm-drawer-title" className="text-lg font-serif text-white font-semibold">
                Captured Lead Submissions ({leads.length})
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A0AFA8] hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close Leads Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Feature note for Builders */}
        <div className="p-4 bg-[#142A21] border-b border-[#C5A880]/20 text-xs text-[#C5A880] flex items-center justify-between">
          <span>⚡ Real-time local storage persistence & webhook ready.</span>
          <div className="flex gap-2">
            {leads.length > 0 && (
              <>
                <button
                  onClick={exportCSV}
                  className="px-2.5 py-1 rounded bg-[#C5A880] hover:bg-[#D4AF37] text-[#0B2B20] font-semibold text-[11px] flex items-center gap-1 transition-all"
                  title="Export to CSV"
                >
                  <Download className="w-3 h-3" /> Export CSV
                </button>
                <button
                  onClick={onClearLeads}
                  className="p-1 rounded text-red-300 hover:text-red-100 hover:bg-red-950/50 transition-colors"
                  title="Clear demo list"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Leads List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5">
          {leads.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 text-[#A0AFA8]">
              <Users className="w-12 h-12 text-[#C5A880]/30 mb-3" />
              <h4 className="text-white font-serif text-base mb-1">No Leads Submitted Yet</h4>
              <p className="text-xs max-w-xs leading-relaxed">
                Test the floating hero form, the "Download Brochure" button, or "Schedule Site Visit" modal to see leads appear instantly here.
              </p>
            </div>
          ) : (
            leads.map((lead) => (
              <div
                key={lead.id}
                className="p-4 rounded-xl bg-[#12221B] border border-[#C5A880]/30 shadow-md hover:border-[#D4AF37] transition-all text-xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[#D4AF37] font-semibold text-xs tracking-wider">
                    {lead.id}
                  </span>
                  <span className="text-[10px] text-white/50 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {lead.submittedAt}
                  </span>
                </div>

                <div className="text-white text-sm font-semibold">{lead.fullName}</div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#A0AFA8] pt-1">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span className="text-white font-mono">{lead.mobile}</span>
                  </div>
                  <div className="flex items-center gap-1.5 truncate">
                    <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span className="truncate">{lead.email}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/10">
                  <span className="px-2 py-0.5 rounded bg-[#163528] text-[#6EE7B7] text-[10px] font-medium flex items-center gap-1">
                    <Home className="w-3 h-3" /> {lead.configuration}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#1C2C24] text-[#C5A880] text-[10px]">
                    Budget: {lead.budget}
                  </span>
                  <span className="ml-auto text-[10px] text-white/40 italic">
                    via {lead.source}
                  </span>
                </div>

                {lead.preferredDate && (
                  <div className="mt-1 p-2 rounded bg-[#0A1712] text-[11px] text-[#E5DDD0] border border-[#C5A880]/20">
                    <strong className="text-[#D4AF37]">Site Visit Slot:</strong> {lead.preferredDate}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer info for Developers */}
        <div className="p-4 bg-[#0E1C16] border-t border-[#C5A880]/30 text-xs text-[#A0AFA8] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>DevSyntix Enterprise CRM Webhook Bridge</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#C5A880] text-[#0B2B20] font-bold text-xs uppercase tracking-wider"
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  );
};
