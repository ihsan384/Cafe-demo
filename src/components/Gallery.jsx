import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { cafeData } from '../data/cafeData';
import SafeImage from './SafeImage';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Sanctuary', 'Bakery', 'Barista Craft', 'Roastery', 'Slow Bar'];

  const filteredImages =
    filterCategory === 'All'
      ? cafeData.gallery
      : cafeData.gallery.filter((img) => img.category === filterCategory);

  const openLightbox = (img) => {
    setSelectedImage(img);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    const currentIndex = cafeData.gallery.findIndex((i) => i.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % cafeData.gallery.length;
    setSelectedImage(cafeData.gallery[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = cafeData.gallery.findIndex((i) => i.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + cafeData.gallery.length) % cafeData.gallery.length;
    setSelectedImage(cafeData.gallery[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-[#F0EBE2] border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D9D0C3]">
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#85866A]">
              VISUAL JOURNAL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#302820] font-normal leading-tight">
              Moments captured in amber light.
            </h2>
          </div>
          <p className="text-xs text-[#51483F] max-w-sm font-sans">
            A glimpse into the daily rhythm of our Kochi roastery — from morning flour dust and golden crema to quiet afternoon reflections.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center gap-2 py-6 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filterCategory === cat
                  ? 'bg-[#302820] text-[#FAF8F3]'
                  : 'bg-[#FAF8F3] text-[#302820]/70 hover:text-[#302820] border border-[#E6DFD5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative cursor-pointer overflow-hidden border border-[#D9D0C3] bg-[#FAF8F3] shadow-[0_4px_20px_rgba(48,40,32,0.03)] hover:shadow-[0_10px_30px_rgba(48,40,32,0.08)] transition-all duration-300"
            >
              <div className="aspect-[4/3] sm:aspect-square overflow-hidden bg-[#EFE9DF]">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full img-editorial"
                />
              </div>

              {/* Editorial Caption Bar */}
              <div className="p-4 bg-[#FAF8F3] border-t border-[#E6DFD5] flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#85866A] font-semibold">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-lg text-[#302820] font-medium leading-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#D9D0C3] flex items-center justify-center text-[#302820] group-hover:bg-[#302820] group-hover:text-[#FAF8F3] transition-colors shrink-0">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#302820]/80 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#FAF8F3] border border-[#E6DFD5] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-[#FAF8F3]/90 text-[#302820] hover:text-[#85866A] border border-[#E6DFD5] transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image side */}
              <div className="md:w-3/5 aspect-square sm:aspect-[4/3] md:aspect-auto overflow-hidden bg-[#F0EBE2]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Metadata side */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF8F3]">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#85866A]">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif text-3xl text-[#302820] font-normal">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm text-[#51483F] leading-relaxed font-sans">
                    {selectedImage.caption}
                  </p>
                </div>

                <div className="pt-8 border-t border-[#E6DFD5] flex items-center justify-between text-xs">
                  <span className="text-[#B9AA98]">Kōva Archive</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 border border-[#E6DFD5] hover:bg-[#302820] hover:text-[#FAF8F3] transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 border border-[#E6DFD5] hover:bg-[#302820] hover:text-[#FAF8F3] transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
