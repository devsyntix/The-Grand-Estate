import { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/sections/Hero';
import { Overview } from './components/sections/Overview';
import { Highlights } from './components/sections/Highlights';
import { Amenities } from './components/sections/Amenities';
import { Gallery } from './components/sections/Gallery';
import { Pricing } from './components/sections/Pricing';
import { FloorPlans } from './components/sections/FloorPlans';
import { Location } from './components/sections/Location';
import { VideoTour } from './components/sections/VideoTour';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/common/Footer';

// Modals & Floating Overlays
import { BrochureModal } from './components/common/BrochureModal';
import { SiteVisitModal } from './components/common/SiteVisitModal';
import { EnquiryModal } from './components/common/EnquiryModal';
import { LightboxModal } from './components/common/LightboxModal';
import { VideoModal } from './components/common/VideoModal';
import { DemoLeadsDrawer } from './components/common/DemoLeadsDrawer';
import { ConversionWidgets } from './components/common/ConversionWidgets';
import { DevSyntixShowcaseBar } from './components/common/DevSyntixShowcaseBar';

import { GALLERY_IMAGES } from './data/estateData';
import type { LeadSubmission } from './types';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  // Modal states
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isLeadsDrawerOpen, setIsLeadsDrawerOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [enquiryConfigTitle, setEnquiryConfigTitle] = useState<string>('4 BHK Presidential Villa (₹3.5 Cr*)');

  // Leads state with localStorage persistence
  const [leads, setLeads] = useState<LeadSubmission[]>(() => {
    try {
      const stored = localStorage.getItem('devsyntix_builder_leads');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Failed to parse leads from local storage', e);
    }
    // Seed initial demo leads to showcase CRM capabilities
    return [
      {
        id: 'TGE-BLR-89410',
        fullName: 'Vikramaditya Roy',
        mobile: '+91 98450 12345',
        email: 'v.roy@venturecapital.in',
        configuration: '5 BHK Royal Estate Villa',
        budget: '₹5.0 Cr - ₹8.0 Cr',
        source: 'Chauffeured Site Visit Booking',
        submittedAt: 'Today, 10:15 AM',
      },
      {
        id: 'TGE-BLR-89392',
        fullName: 'Dr. Sameer & Shalini Rao',
        mobile: '+91 98860 67890',
        email: 'dr.rao@apollo.org',
        configuration: '4 BHK Presidential Villa',
        budget: '₹3.5 Cr - ₹5.0 Cr',
        source: 'Brochure Download Modal',
        submittedAt: 'Yesterday, 04:30 PM',
      },
    ];
  });

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('devsyntix_builder_leads', JSON.stringify(leads));
    } catch (e) {
      console.warn('Failed to save leads to localStorage', e);
    }
  }, [leads]);

  const handleLeadSuccess = (newLead: LeadSubmission) => {
    setLeads((prev) => [newLead, ...prev]);
    setToastMessage(`Lead registered for ${newLead.fullName} (${newLead.id})`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleClearLeads = () => {
    setLeads([]);
    localStorage.removeItem('devsyntix_builder_leads');
  };

  const openEnquiryWithConfig = (configTitle?: string) => {
    if (configTitle) {
      setEnquiryConfigTitle(configTitle);
    }
    setIsEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#121614] selection:bg-[#C5A880] selection:text-[#061D15]">
      {/* DevSyntix Demo Controls */}
      <DevSyntixShowcaseBar
        onOpenLeadsDrawer={() => setIsLeadsDrawerOpen(true)}
        leadsCount={leads.length}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 p-4 rounded-2xl bg-[#091D16] border border-[#D4AF37] text-white shadow-2xl flex items-center gap-3 animate-slideDown max-w-md">
          <div className="w-8 h-8 rounded-full bg-[#16382A] text-[#D4AF37] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <span className="text-[#D4AF37] font-semibold uppercase tracking-wider block">
              DEMO CRM EVENT
            </span>
            <span className="text-white font-medium">{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        onOpenEnquiry={() => openEnquiryWithConfig()}
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
        onOpenLeadsDrawer={() => setIsLeadsDrawerOpen(true)}
        leadsCount={leads.length}
      />

      {/* Hero Section */}
      <Hero
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenVideo={() => setIsVideoOpen(true)}
        onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
        onSuccessLead={handleLeadSuccess}
      />

      {/* Overview Section */}
      <Overview
        onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* Architectural Highlights */}
      <Highlights onOpenEnquiry={openEnquiryWithConfig} />

      {/* Lifestyle Amenities */}
      <Amenities onOpenEnquiry={openEnquiryWithConfig} />

      {/* Photographic Image Gallery */}
      <Gallery
        onOpenLightbox={(idx) => setLightboxIndex(idx)}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* Pricing & Configurations */}
      <Pricing
        onOpenEnquiry={openEnquiryWithConfig}
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
      />

      {/* Interactive Floor Plans */}
      <FloorPlans
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenEnquiry={openEnquiryWithConfig}
      />

      {/* Location Advantages & Connectivity */}
      <Location onOpenSiteVisit={() => setIsSiteVisitOpen(true)} />

      {/* 4K Cinematic Walkthrough Video Banner */}
      <VideoTour
        onOpenVideo={() => setIsVideoOpen(true)}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FAQ onOpenEnquiry={() => openEnquiryWithConfig()} />

      {/* Contact & VIP Booking Section */}
      <ContactSection
        onSuccessLead={handleLeadSuccess}
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
      />

      {/* Footer */}
      <Footer />

      {/* Conversion Overlays & Floating Tools */}
      <ConversionWidgets
        onOpenEnquiry={() => openEnquiryWithConfig()}
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenSiteVisit={() => setIsSiteVisitOpen(true)}
      />

      {/* Modals */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        onSuccess={handleLeadSuccess}
      />

      <SiteVisitModal
        isOpen={isSiteVisitOpen}
        onClose={() => setIsSiteVisitOpen(false)}
        onSuccess={handleLeadSuccess}
      />

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        onSuccess={handleLeadSuccess}
        defaultConfig={enquiryConfigTitle}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <LightboxModal
        isOpen={lightboxIndex !== null}
        images={GALLERY_IMAGES}
        currentIndex={lightboxIndex ?? 0}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        onEnquire={() => {
          setLightboxIndex(null);
          setIsEnquiryOpen(true);
        }}
      />

      <DemoLeadsDrawer
        isOpen={isLeadsDrawerOpen}
        onClose={() => setIsLeadsDrawerOpen(false)}
        leads={leads}
        onClearLeads={handleClearLeads}
      />
    </div>
  );
}

export default App;
