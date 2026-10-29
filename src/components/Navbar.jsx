import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cafeData } from '../data/cafeData';

export default function Navbar({ onOpenReserve }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Visit Us', href: '#visit' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#E6DFD5] py-4 shadow-[0_4px_20px_rgba(48,40,32,0.03)]'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Fictional Cafe Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex flex-col items-start focus:outline-none"
            aria-label="Kōva Café Home"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] font-semibold text-[#302820] uppercase transition-colors group-hover:text-[#85866A]">
              {cafeData.brand.name}
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#302820]/60 font-medium">
              Kochi • Atelier
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-10 text-xs tracking-[0.18em] uppercase font-medium text-[#302820]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative py-1 transition-colors hover:text-[#302820] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#302820] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Reserve a Table CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenReserve}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-medium border border-[#302820] text-[#302820] bg-transparent hover:bg-[#302820] hover:text-[#FAF8F3] transition-all duration-300 cursor-pointer rounded-none active:scale-[0.98]"
            >
              <span>Reserve a Table</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onOpenReserve}
              className="text-[11px] tracking-wider uppercase font-medium px-3 py-1.5 border border-[#302820] text-[#302820] bg-transparent active:bg-[#302820] active:text-[#FAF8F3] transition-colors"
            >
              Reserve
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#302820] hover:text-[#85866A] focus:outline-none cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-30 lg:hidden bg-[#FAF8F3] transition-all duration-500 ease-in-out flex flex-col justify-between px-8 pt-28 pb-10 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#85866A] font-semibold">
            Directory
          </p>
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-serif text-3xl text-[#302820] hover:text-[#85866A] transition-colors flex items-center justify-between py-1 border-b border-[#E6DFD5]/60"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <span>{link.label}</span>
                <span className="text-xs font-sans tracking-widest text-[#B9AA98]">0{idx + 1}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-[#E6DFD5] space-y-5">
          <div className="grid grid-cols-2 gap-4 text-xs text-[#302820]/80">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#B9AA98] mb-1 font-semibold">Hours</p>
              <p>Mon–Fri: 07:30 – 21:00</p>
              <p>Sat–Sun: 08:00 – 22:00</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#B9AA98] mb-1 font-semibold">Location</p>
              <p>Panampilly Nagar</p>
              <p>Kochi, Kerala</p>
            </div>
          </div>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenReserve();
            }}
            className="w-full flex items-center justify-center gap-2 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold bg-[#302820] text-[#FAF8F3] hover:bg-[#85866A] transition-colors"
          >
            <span>Reserve a Table</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
