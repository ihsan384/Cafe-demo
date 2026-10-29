import React from 'react';
import { ArrowUpRight, Sparkles, BookOpen } from 'lucide-react';
import { cafeData } from '../data/cafeData';
import SafeImage from './SafeImage';

export default function MenuPreview({ onOpenFullMenu }) {
  return (
    <section id="menu" className="py-20 lg:py-32 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E6DFD5]">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#85866A]">
              SIGNATURE SELECTION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#302820] font-normal leading-tight">
              Crafted with intention, served with grace.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-xs text-[#51483F] max-w-xs font-sans">
              All our coffees are extracted from current season shade-grown Arabicas, paired with organic whole farm milk or freshly pressed oat milk.
            </p>
            <button
              onClick={onOpenFullMenu}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs tracking-[0.18em] uppercase font-semibold bg-[#302820] text-[#FAF8F3] hover:bg-[#85866A] transition-colors cursor-pointer shrink-0"
            >
              <span>View Full Menu</span>
              <BookOpen className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Editorial Menu Grid - 6 Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E6DFD5] border-x border-b border-[#E6DFD5] mt-10">
          {cafeData.signatureMenu.map((item, index) => (
            <article
              key={item.id}
              className="group bg-[#FAF8F3] p-7 flex flex-col justify-between hover:bg-[#F0EBE2] transition-colors duration-500 relative"
            >
              <div>
                {/* Top Item Meta: Number & Badge */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E6DFD5]/60 text-xs">
                  <span className="text-[11px] font-sans font-medium text-[#B9AA98] tracking-widest">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-[#FAF8F3] border border-[#B9AA98]/40 text-[#85866A]">
                    {item.badge}
                  </span>
                </div>

                {/* Image Preview with Subtle Hover Scale */}
                <div className="aspect-[16/10] overflow-hidden mb-6 border border-[#E6DFD5] bg-[#EFE9DF]">
                  <SafeImage
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full img-editorial"
                  />
                </div>

                {/* Title & Price Header */}
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-serif text-2xl text-[#302820] font-medium leading-snug group-hover:text-[#85866A] transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-serif text-2xl font-semibold text-[#302820] shrink-0">
                    ₹{item.price}
                  </span>
                </div>

                {/* Origin / Process */}
                <p className="text-[11px] uppercase tracking-wider text-[#85866A] font-medium mb-3">
                  {item.origin}
                </p>

                {/* Tasting Notes */}
                <p className="text-sm text-[#51483F] leading-relaxed mb-6 font-sans">
                  {item.notes}
                </p>
              </div>

              {/* Bottom Dietary / Pairing Footnote */}
              <div className="pt-4 border-t border-[#E6DFD5]/60 flex items-center justify-between text-[11px] text-[#B9AA98] font-medium">
                <span>{item.dietary}</span>
                <span className="text-[#302820]/40 group-hover:text-[#302820] transition-colors">
                  Single cup
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner with Menu Action */}
        <div className="mt-12 p-6 sm:p-8 bg-[#F0EBE2] border border-[#E6DFD5] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-xl text-[#302820]">
              Looking for Manual Pour Overs, Cold Brews, or Sourdough Tartines?
            </h4>
            <p className="text-xs text-[#51483F]">
              Explore our complete seasonal roastery and kitchen menu featuring single origins from Wayanad and Coorg.
            </p>
          </div>
          <button
            onClick={onOpenFullMenu}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs tracking-[0.18em] uppercase font-semibold border border-[#302820] text-[#302820] bg-transparent hover:bg-[#302820] hover:text-[#FAF8F3] transition-colors cursor-pointer shrink-0"
          >
            <span>Open Complete Menu</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
