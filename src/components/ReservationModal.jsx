import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import ReservationForm from './ReservationForm';

export default function ReservationModal({ isOpen, onClose }) {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#302820]/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#FAF8F3] w-full max-w-2xl max-h-[92vh] overflow-y-auto border border-[#E6DFD5] shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#302820] hover:text-[#85866A] bg-[#FAF8F3] border border-[#E6DFD5] transition-colors cursor-pointer"
          aria-label="Close Reservation Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="pt-6 px-6 sm:px-10 pb-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#85866A] font-semibold">
            Table Booking
          </span>
          <h2 className="font-serif text-3xl text-[#302820] mt-1">
            Reserve Your Visit
          </h2>
          <p className="text-xs text-[#51483F] mt-1">
            Kōva Atelier • Panampilly Nagar, Kochi
          </p>
        </div>

        <ReservationForm isModal={true} onClose={onClose} />
      </div>
    </div>
  );
}
