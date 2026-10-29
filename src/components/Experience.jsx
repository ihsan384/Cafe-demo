import React from 'react';
import { cafeData } from '../data/cafeData';
import SafeImage from './SafeImage';
import { Disc, Sparkles, Feather, Wind } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-20 lg:py-32 bg-[#FAF8F3] border-b border-[#E6DFD5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#85866A]">
            {cafeData.experience.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#302820] font-normal leading-[1.12]">
            {cafeData.experience.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#51483F] leading-relaxed font-sans">
            {cafeData.experience.lead}
          </p>
        </div>

        {/* Large Format Photography Showcase */}
        <div className="relative group mb-16">
          <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden border border-[#E6DFD5] shadow-[0_12px_40px_rgba(48,40,32,0.06)] bg-[#F0EBE2]">
            <SafeImage
              src={cafeData.experience.image}
              alt={cafeData.experience.imageAlt}
              className="w-full h-full img-editorial"
            />
          </div>

          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#FAF8F3]/90 backdrop-blur-sm px-4 py-2 border border-[#E6DFD5] text-[11px] uppercase tracking-widest text-[#302820] font-semibold">
            Panampilly Nagar Studio • Morning Light
          </div>
        </div>

        {/* Four Atmospheric Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
          {cafeData.experience.pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-6 bg-[#F0EBE2]/60 border border-[#E6DFD5] space-y-3 hover:border-[#85866A]/60 transition-colors"
            >
              <span className="text-xs font-mono text-[#85866A] font-semibold tracking-wider">
                0{index + 1}
              </span>
              <h3 className="font-serif text-xl font-medium text-[#302820]">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#51483F] leading-relaxed font-sans">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
