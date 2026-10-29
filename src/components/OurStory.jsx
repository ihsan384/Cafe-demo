import React from 'react';
import { cafeData } from '../data/cafeData';
import SafeImage from './SafeImage';
import { ArrowUpRight, Award, Compass, MapPin } from 'lucide-react';

export default function OurStory() {
  const scrollTo = (id) => {
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
    <section id="story" className="py-20 lg:py-32 bg-[#FAF8F3] border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#85866A]">
                {cafeData.story.tag}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#302820] font-normal leading-[1.14]">
                {cafeData.story.heading}
              </h2>
            </div>

            <p className="font-serif text-xl text-[#302820] leading-snug italic">
              {cafeData.story.lead}
            </p>

            <div className="space-y-5 text-sm sm:text-base text-[#51483F] leading-relaxed font-sans">
              {cafeData.story.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Credential / Quality Statement */}
            <div className="p-5 bg-[#F0EBE2] border border-[#E6DFD5] flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F3] border border-[#B9AA98] flex items-center justify-center text-[#85866A] shrink-0">
                <Award className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#302820]">
                  Ethical Direct-Trade Standard
                </p>
                <p className="text-xs text-[#51483F]">
                  Paying 40% above fair-trade floor prices directly to family smallholder growers in Kerala &amp; Karnataka.
                </p>
              </div>
            </div>

            {/* Subtle Links */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                onClick={() => scrollTo('menu')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#302820] hover:text-[#85866A] transition-colors border-b border-[#302820] pb-1"
              >
                <span>Read our brew guide &amp; menu</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scrollTo('visit')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#85866A] hover:text-[#302820] transition-colors"
              >
                <span>Plan your visit to Panampilly Nagar</span>
                <Compass className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Photograph (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="aspect-[4/5] overflow-hidden border border-[#E6DFD5] shadow-[0_12px_40px_rgba(48,40,32,0.06)] bg-[#F0EBE2]">
                <SafeImage
                  src={cafeData.story.image}
                  alt={cafeData.story.imageAlt}
                  className="w-full h-full img-editorial"
                />
              </div>

              {/* Inset Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#FAF8F3] p-5 border border-[#E6DFD5] shadow-lg max-w-xs">
                <p className="text-[10px] uppercase tracking-widest text-[#85866A] font-semibold mb-1">
                  Our Mission
                </p>
                <p className="font-serif text-sm text-[#302820] leading-snug">
                  "To elevate Indian shade-grown coffee into an art form experienced unhurriedly."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
