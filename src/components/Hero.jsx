import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, Clock, MapPin } from 'lucide-react';
import { cafeData } from '../data/cafeData';
import SafeImage from './SafeImage';

export default function Hero({ onOpenMenuModal }) {
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
    <section id="home" className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Subtle Top Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E6DFD5] text-[11px] tracking-[0.2em] uppercase font-medium text-[#302820]/70">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#85866A]" />
            <span>Specialty Coffee Roasters • Est. {cafeData.brand.established}</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#85866A]" />
              {cafeData.hero.eyebrow}
            </span>
          </div>
        </div>

        {/* Editorial Asymmetrical Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column: 5 Cols */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#85866A]">
                The Sanctuary At Kochi
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#302820] leading-[1.08] tracking-[-0.02em] font-normal">
                {cafeData.hero.headline}
              </h1>
            </div>

            <p className="text-[#51483F] text-base sm:text-lg leading-relaxed font-normal font-sans max-w-xl">
              {cafeData.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('menu')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs tracking-[0.18em] uppercase font-semibold bg-[#302820] text-[#FAF8F3] hover:bg-[#85866A] transition-all duration-300 cursor-pointer shadow-[0_4px_16px_rgba(48,40,32,0.08)]"
              >
                <span>Explore Our Menu</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => scrollToSection('visit')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs tracking-[0.18em] uppercase font-semibold border border-[#302820] text-[#302820] bg-transparent hover:bg-[#F0EBE2] transition-all duration-300 cursor-pointer"
              >
                <span>Find Us</span>
                <Compass className="w-3.5 h-3.5 text-[#85866A]" />
              </button>
            </div>

            {/* Micro details: Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#E6DFD5] text-[#302820]">
              {cafeData.hero.quickStats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="font-serif text-2xl font-medium text-[#302820]">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#85866A] font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Imagery Column: 7 Cols (Editorial Visual Focus) */}
          <div className="lg:col-span-7 relative">
            <div className="relative group">
              {/* Main Editorial Hero Image */}
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#E6DFD5] shadow-[0_12px_40px_rgba(48,40,32,0.06)]">
                <SafeImage
                  src={cafeData.hero.image}
                  alt={cafeData.hero.imageAlt}
                  className="w-full h-full img-editorial"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Editorial Floating Caption / Badge */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#FAF8F3] p-5 border border-[#E6DFD5] max-w-xs shadow-[0_8px_30px_rgba(48,40,32,0.08)]">
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#85866A] mt-1 shrink-0" />
                  <div>
                    <p className="font-serif text-sm font-medium text-[#302820] italic">
                      "Slow down and taste the terroir of high-elevation Wayanad and Chikmagalur."
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#B9AA98] mt-2 font-semibold">
                      Roasted in-house daily
                    </p>
                  </div>
                </div>
              </div>

              {/* Tasteful Secondary Inset Image: The Handcrafted Cup */}
              <div className="hidden md:block absolute -top-8 -right-6 w-44 aspect-square overflow-hidden border-2 border-[#FAF8F3] shadow-[0_8px_30px_rgba(48,40,32,0.12)]">
                <SafeImage
                  src={cafeData.hero.secondaryImage}
                  alt={cafeData.hero.secondaryAlt}
                  className="w-full h-full img-editorial"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
