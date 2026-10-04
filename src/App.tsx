import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProgramsSection } from './components/ProgramsSection';
import { AboutSection } from './components/AboutSection';
import { FacilityShowcase } from './components/FacilityShowcase';
import { InteractiveGoalFinder } from './components/InteractiveGoalFinder';
import { PricingSection } from './components/PricingSection';
import { CoachesSection } from './components/CoachesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { VideoModal } from './components/VideoModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { ScrollToTop } from './components/ScrollToTop';
import { Program, PricingPlan } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingItem, setSelectedBookingItem] = useState('Performance');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const handleOpenBooking = (item: string = 'Performance') => {
    setSelectedBookingItem(item);
    setBookingModalOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan, isAnnual: boolean) => {
    setSelectedBookingItem(`${plan.name} (${isAnnual ? 'Annual' : 'Monthly'})`);
    setBookingModalOpen(true);
  };

  const handleSelectProgram = (program: Program) => {
    setSelectedProgram(program);
  };

  const handleSelectGoalProtocol = (goalTitle: string) => {
    handleOpenBooking(`Goal Protocol: ${goalTitle}`);
  };

  return (
    <div className="min-h-screen bg-[#05090D] text-[#D9DEE3] selection:bg-[#F5223A] selection:text-white flex flex-col font-sans">
      {/* Fixed Sticky Header */}
      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* 1. Dramatic Dark Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onOpenVideo={() => setVideoModalOpen(true)}
        />

        {/* 2. Light Programs Section (Contrast Rhythm) */}
        <ProgramsSection
          onSelectProgram={handleSelectProgram}
          onOpenBooking={handleOpenBooking}
        />

        {/* 3. Dark About / Experience Split Section */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* 4. Dark Facility Showcase & Counters */}
        <FacilityShowcase />

        {/* Interactive Training Architect / Goal Finder */}
        <div className="bg-[#05090D] py-6 content-container w-full">
          <InteractiveGoalFinder onSelectProtocol={handleSelectGoalProtocol} />
        </div>

        {/* 5. Light Pricing Section (Contrast Rhythm) */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 6. Dark Coaches Section */}
        <CoachesSection onOpenBooking={handleOpenBooking} />

        {/* 7. Light Testimonials Section (Contrast Rhythm) */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* 8. Dark Final CTA Section */}
        <CtaSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* 9. Dark Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultPlanOrTour={selectedBookingItem}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onBook={(programTitle) => handleOpenBooking(`Program: ${programTitle}`)}
      />

      {/* Scroll to Top Floating Button */}
      <ScrollToTop />
    </div>
  );
}
