import React from 'react';
import { cafeData } from '../data/cafeData';
import SafeImage from './SafeImage';
import { Sparkles, Sun, Droplets, Flame } from 'lucide-react';

export default function Philosophy() {
  const commitments = [
    {
      icon: Sun,
      title: 'Shade-Grown Canopy',
      text: 'Cultivated under wild jackfruit, fig, and rosewood canopies that foster natural biodiversity and soil health.',
    },
    {
      icon: Droplets,
      title: 'Careful Fermentation',
      text: 'Anaerobic naturals and thermal honey processing curated to unlock fruit complexity rather than raw acidity.',
    },
    {
      icon: Flame,
      title: 'Small-Batch Profiling',
      text: 'Roasted on our 5kg cast-iron drum roaster, monitoring rate-of-rise to highlight sweet caramelization.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F0EBE2] border-y border-[#E6DFD5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Subtle Frame (5 Cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              <div className="aspect-[3/4] overflow-hidden border border-[#B9AA98]/40 shadow-[0_8px_30px_rgba(48,40,32,0.05)]">
                <SafeImage
                  src={cafeData.philosophy.image}
                  alt={cafeData.philosophy.imageAlt}
                  className="w-full h-full img-editorial"
                />
              </div>

              {/* Quote Card */}
              <div className="mt-6 p-6 bg-[#FAF8F3] border border-[#E6DFD5] space-y-2">
                <p className="font-serif text-lg text-[#302820] italic leading-snug">
                  {cafeData.philosophy.quote}
                </p>
                <p className="text-[11px] uppercase tracking-widest text-[#85866A] font-semibold">
                  {cafeData.philosophy.founderNote}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#85866A]">
                {cafeData.philosophy.tag}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#302820] font-normal leading-[1.15]">
                {cafeData.philosophy.heading}
              </h2>
            </div>

            <p className="text-lg text-[#302820] font-medium leading-relaxed font-serif">
              {cafeData.philosophy.lead}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#51483F] leading-relaxed font-sans">
              {cafeData.philosophy.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Commitments breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#D9D0C3]">
              {commitments.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2 text-[#85866A]">
                      <Icon className="w-4 h-4" strokeWidth={1.8} />
                      <h3 className="text-xs uppercase tracking-widest font-semibold text-[#302820]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#51483F] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
