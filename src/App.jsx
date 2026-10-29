import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import MenuPreview from './components/MenuPreview';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import OurStory from './components/OurStory';
import VisitUs from './components/VisitUs';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';
import FullMenuModal from './components/FullMenuModal';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#302820] flex flex-col font-sans selection:bg-[#B9AA98]/30 selection:text-[#302820]">
      {/* Sticky Editorial Navigation */}
      <Navbar onOpenReserve={() => setIsReserveModalOpen(true)} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        <Hero onOpenMenuModal={() => setIsMenuModalOpen(true)} />
        <Philosophy />
        <MenuPreview onOpenFullMenu={() => setIsMenuModalOpen(true)} />
        <Experience />
        <Gallery />
        <OurStory />
        <VisitUs onOpenReserve={() => setIsReserveModalOpen(true)} />

        {/* Dedicated In-Page Reservation & Enquiry Section */}
        <section id="reserve" className="scroll-mt-20">
          <ReservationForm isModal={false} />
        </section>
      </main>

      {/* Editorial Footer */}
      <Footer onOpenReserve={() => setIsReserveModalOpen(true)} />

      {/* Interactive Overlays */}
      <FullMenuModal
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
      />
      
      <ReservationModal
        isOpen={isReserveModalOpen}
        onClose={() => setIsReserveModalOpen(false)}
      />
    </div>
  );
}
