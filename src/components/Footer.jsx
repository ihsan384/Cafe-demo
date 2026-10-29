import React from 'react';
import { cafeData } from '../data/cafeData';
import { ArrowUp, MapPin, Clock, Music, Coffee, Compass } from 'lucide-react';

export default function Footer({ onOpenReserve }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#FAF8F3] text-[#302820] border-t border-[#E6DFD5] pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#E6DFD5]">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.25em] font-semibold text-[#302820] uppercase">
                {cafeData.brand.name}
              </span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#85866A] font-semibold">
                {cafeData.brand.subname}
              </p>
            </div>

            <p className="text-sm text-[#51483F] leading-relaxed max-w-sm font-sans">
              A quiet neighborhood atelier dedicated to direct-trade Indian specialty coffee, slow fermentation sourdough, and mindful morning rituals in Panampilly Nagar, Kochi.
            </p>

            <div className="pt-2 flex items-center space-x-6 text-xs text-[#85866A]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#302820] transition-colors flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>
              <span className="text-[#E6DFD5]">•</span>
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); alert("Kōva Atelier Radio (Analog Jazz & Ambient) • Spotify integration available in live demo."); }}
                className="hover:text-[#302820] transition-colors flex items-center gap-1.5"
              >
                <Music className="w-3.5 h-3.5" />
                <span>Atelier Radio</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#85866A]">
              Index
            </p>
            <ul className="space-y-2.5 text-xs text-[#51483F]">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-[#302820] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('story')}
                  className="hover:text-[#302820] transition-colors cursor-pointer"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="hover:text-[#302820] transition-colors cursor-pointer"
                >
                  Signature Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="hover:text-[#302820] transition-colors cursor-pointer"
                >
                  Photo Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('visit')}
                  className="hover:text-[#302820] transition-colors cursor-pointer"
                >
                  Visit &amp; Directions
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenReserve}
                  className="hover:text-[#302820] transition-colors font-semibold text-[#302820] cursor-pointer"
                >
                  Reserve Table
                </button>
              </li>
            </ul>
          </div>

          {/* Hours (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#85866A]">
              Hours
            </p>
            <div className="space-y-2 text-xs text-[#51483F]">
              <div>
                <p className="font-semibold text-[#302820]">Mon – Thu</p>
                <p>07:30 – 21:00</p>
              </div>
              <div>
                <p className="font-semibold text-[#302820]">Friday</p>
                <p>07:30 – 22:00</p>
              </div>
              <div>
                <p className="font-semibold text-[#302820]">Saturday</p>
                <p>08:00 – 22:00</p>
              </div>
              <div>
                <p className="font-semibold text-[#302820]">Sunday</p>
                <p>08:00 – 21:30</p>
              </div>
            </div>
          </div>

          {/* Location & Demo Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#85866A]">
              Sanctuary
            </p>
            <div className="space-y-2 text-xs text-[#51483F]">
              <p className="font-medium text-[#302820]">
                {cafeData.location.addressLine1}
              </p>
              <p>{cafeData.location.neighborhood}</p>
              <p>{cafeData.location.city}</p>
              <p className="text-[11px] text-[#85866A] pt-1">
                Direct Line (Demo): {cafeData.contact.phone}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#302820] hover:text-[#85866A] transition-colors border-b border-[#E6DFD5] pb-1 cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Sub-Footer with Discreet Demo Studio Watermark */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B9AA98]">
          <p>
            &copy; {new Date().getFullYear()} {cafeData.brand.name} Specialty Coffee Roasters. All rights reserved.
          </p>

          {/* Discreet Subtle Watermark */}
          <p className="text-[11px] tracking-wide text-[#B9AA98]/80 font-normal">
            Designed &amp; developed by{' '}
            <a
              href="https://redix.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#85866A] hover:text-[#302820] transition-colors font-medium underline underline-offset-2 decoration-[#B9AA98]/60"
            >
              Redix Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
