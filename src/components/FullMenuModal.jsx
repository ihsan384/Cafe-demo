import React, { useEffect, useState } from 'react';
import { X, Sparkles, Coffee, Download } from 'lucide-react';
import { cafeData } from '../data/cafeData';

export default function FullMenuModal({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="full-menu-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#302820]/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF8F3] w-full max-w-4xl max-h-[90vh] flex flex-col border border-[#E6DFD5] shadow-[0_20px_60px_rgba(48,40,32,0.18)] overflow-hidden"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E6DFD5] bg-[#F0EBE2]">
          <div className="flex items-center gap-3">
            <Coffee className="w-5 h-5 text-[#85866A]" />
            <div>
              <h2 id="full-menu-title" className="font-serif text-2xl text-[#302820] font-semibold">
                KŌVA Roastery &amp; Kitchen Menu
              </h2>
              <p className="text-[10px] uppercase tracking-widest text-[#85866A] font-medium">
                Seasonal Terroir Edition • Panampilly Nagar, Kochi
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#302820] hover:text-[#85866A] hover:bg-[#FAF8F3] transition-colors cursor-pointer border border-[#E6DFD5]"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center border-b border-[#E6DFD5] bg-[#FAF8F3] overflow-x-auto px-6 scrollbar-none">
          {cafeData.fullMenuCategories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(idx)}
              className={`py-3.5 px-4 text-xs uppercase tracking-widest font-semibold whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
                activeCategory === idx
                  ? 'border-[#302820] text-[#302820]'
                  : 'border-transparent text-[#302820]/60 hover:text-[#302820]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {cafeData.fullMenuCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className={`space-y-6 ${activeCategory === idx ? 'block' : 'hidden'}`}
            >
              <div className="pb-3 border-b border-[#E6DFD5]/70">
                <h3 className="font-serif text-2xl text-[#302820]">{cat.title}</h3>
                <p className="text-xs text-[#51483F] mt-1">{cat.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-4 bg-[#F0EBE2]/60 border border-[#E6DFD5] flex flex-col justify-between"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-serif text-lg font-medium text-[#302820]">
                        {item.name}
                      </h4>
                      <span className="font-serif text-lg font-semibold text-[#302820] shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs text-[#51483F] mt-2 font-sans">
                      {item.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Sourcing & Allergen Notice */}
          <div className="p-4 bg-[#FAF8F3] border border-[#E6DFD5] text-xs text-[#85866A] space-y-1">
            <p className="font-semibold uppercase tracking-wider text-[10px]">
              Notes &amp; Customizations:
            </p>
            <p>
              • Oat Milk (in-house pressed) available for +₹40. Almond milk +₹50.
            </p>
            <p>
              • Decaf available for all espresso beverages via Mountain Water Process.
            </p>
            <p>
              • Please notify our barista team if you have any gluten or tree nut allergies.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-[#E6DFD5] bg-[#F0EBE2] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#51483F]">
          <span>All prices in INR. Government taxes applicable as per regulations.</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#302820] text-[#FAF8F3] text-xs uppercase tracking-wider font-semibold hover:bg-[#85866A] transition-colors"
          >
            Back to Website
          </button>
        </div>
      </div>
    </div>
  );
}
