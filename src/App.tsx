import React, { useState, useEffect } from 'react';
import { PageId } from './types/navigation';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { ProgramsPage } from './pages/ProgramsPage';
import { FacilityPage } from './pages/FacilityPage';
import { SchedulePricingPage } from './pages/SchedulePricingPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  // Read initial page from hash if present (e.g. #programs, #facility)
  const getInitialPage = (): PageId => {
    const hash = window.location.hash.replace('#', '') as PageId;
    const validPages: PageId[] = ['home', 'programs', 'facility', 'schedule-pricing', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProgramForBooking, setSelectedProgramForBooking] = useState('');

  // Sync hash on navigation
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen to browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenBooking = (programName?: string) => {
    setSelectedProgramForBooking(programName || 'Free Day Pass');
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#07080b] text-[#e3e7ee] flex flex-col font-sans selection:bg-amber-400 selection:text-black">
      {/* Persistent Sticky Header with 5-Page Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Multi-Page Container */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'programs' && (
          <ProgramsPage onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'facility' && (
          <FacilityPage onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'schedule-pricing' && (
          <SchedulePricingPage onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />

      {/* Floating WhatsApp Action Widget (9049291492) */}
      <FloatingWhatsApp />

      {/* Interactive Free Day Pass Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedProgramForBooking}
      />
    </div>
  );
};

export default App;
