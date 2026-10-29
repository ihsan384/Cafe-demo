import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink, Calendar, Car, Info } from 'lucide-react';
import { cafeData } from '../data/cafeData';

export default function VisitUs({ onOpenReserve }) {
  const daysSchedule = [
    { day: 'Monday', hours: '07:30 – 21:00', status: 'Open' },
    { day: 'Tuesday', hours: '07:30 – 21:00', status: 'Open' },
    { day: 'Wednesday', hours: '07:30 – 21:00', status: 'Open' },
    { day: 'Thursday', hours: '07:30 – 21:00', status: 'Open' },
    { day: 'Friday', hours: '07:30 – 22:00', status: 'Evening Roasting' },
    { day: 'Saturday', hours: '08:00 – 22:00', status: 'Weekend Brunch' },
    { day: 'Sunday', hours: '08:00 – 21:30', status: 'Slow Bar & Bakes' },
  ];

  return (
    <section id="visit" className="py-20 lg:py-32 bg-[#F0EBE2] border-b border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#85866A]">
            VISIT THE SANCTUARY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#302820] font-normal leading-tight">
            We look forward to welcoming you in Panampilly Nagar.
          </h2>
          <p className="text-base text-[#51483F] font-sans">
            Tucked along the tree-lined avenues of Panampilly Nagar, Kochi. Natural shade, outdoor courtyard seating, and calm indoor air-conditioned acoustics.
          </p>
        </div>

        {/* Demo Notice Disclaimer Banner */}
        <div className="mb-10 p-4 bg-[#FAF8F3] border border-[#B9AA98]/60 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#85866A] shrink-0 mt-0.5" />
          <div className="text-xs text-[#51483F] space-y-0.5">
            <span className="font-semibold text-[#302820] uppercase tracking-wider text-[10px]">
              Demo Showcase Notice:
            </span>
            <p>
              This is a demonstration website showcasing high-end café design for prospective clients. Contact details, phone lines, and reservation receipts are simulated for preview purposes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Hours & Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Opening Hours Table */}
            <div className="bg-[#FAF8F3] p-7 border border-[#E6DFD5] shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#E6DFD5]">
                <div className="flex items-center gap-2 text-[#302820]">
                  <Clock className="w-4 h-4 text-[#85866A]" />
                  <h3 className="text-xs uppercase tracking-widest font-semibold">Opening Hours</h3>
                </div>
                <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 bg-[#85866A]/10 text-[#85866A] font-semibold">
                  Kitchen closes 45m prior
                </span>
              </div>

              <div className="space-y-3 text-xs">
                {daysSchedule.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between py-1 border-b border-[#E6DFD5]/40 text-[#51483F]"
                  >
                    <span className="font-medium text-[#302820]">{item.day}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px]">{item.hours}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Address & Demo Contact */}
            <div className="bg-[#FAF8F3] p-7 border border-[#E6DFD5] shadow-sm space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#302820]">
                  <MapPin className="w-4 h-4 text-[#85866A]" />
                  <h3 className="text-xs uppercase tracking-widest font-semibold">Location &amp; Address</h3>
                </div>
                <p className="text-sm text-[#302820] font-serif font-medium leading-relaxed">
                  {cafeData.location.addressLine1}<br />
                  {cafeData.location.neighborhood}, {cafeData.location.city}
                </p>
                <p className="text-xs text-[#85866A]">
                  Landmark: {cafeData.location.landmark}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6DFD5] space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#85866A] font-medium">Telephone (Demo):</span>
                  <span className="font-mono text-[#302820] font-medium">{cafeData.contact.phone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#85866A] font-medium">Enquiries:</span>
                  <span className="text-[#302820] font-medium">{cafeData.contact.email}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={cafeData.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs tracking-widest uppercase font-semibold bg-[#302820] text-[#FAF8F3] hover:bg-[#85866A] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
                <button
                  onClick={onOpenReserve}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs tracking-widest uppercase font-semibold border border-[#302820] text-[#302820] hover:bg-[#FAF8F3] transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Table</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Preview Card & Neighborhood Context (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Map Visual Frame */}
            <div className="bg-[#FAF8F3] border border-[#E6DFD5] shadow-sm overflow-hidden flex-1 flex flex-col">
              <div className="p-4 bg-[#EFE9DF] border-b border-[#E6DFD5] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-medium text-[#302820]">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                  <span>Panampilly Nagar, Kochi, Kerala</span>
                </div>
                <a
                  href={cafeData.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#85866A] hover:text-[#302820] font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Styled Minimalist Map Visual Representation */}
              <div className="relative flex-1 min-h-[320px] bg-[#EAE3D6] overflow-hidden flex items-center justify-center p-6">
                {/* Abstract Stylized Map Grid Lines */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#B9AA98_1px,transparent_1px)] [background-size:24px_24px]" />
                
                {/* Diagonal roads */}
                <div className="absolute w-[180%] h-12 bg-[#FAF8F3]/60 -rotate-12 top-1/3 -left-10 border-y border-[#B9AA98]/30" />
                <div className="absolute w-14 h-[180%] bg-[#FAF8F3]/60 rotate-45 top-0 left-1/2 border-x border-[#B9AA98]/30" />

                {/* Park Zone */}
                <div className="absolute top-10 right-10 w-44 h-32 bg-[#85866A]/15 border border-[#85866A]/30 rounded-sm p-3">
                  <p className="text-[10px] uppercase tracking-widest text-[#85866A] font-semibold">
                    Central Park
                  </p>
                </div>

                {/* Pin Card */}
                <div className="relative z-10 bg-[#FAF8F3] p-5 border border-[#302820] shadow-[0_12px_30px_rgba(48,40,32,0.15)] max-w-xs text-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-[#302820] text-[#FAF8F3] flex items-center justify-center mx-auto">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-[#302820]">
                      KŌVA Café &amp; Roastery
                    </h4>
                    <p className="text-xs text-[#51483F]">
                      Plot 42, 8th Cross Rd, Panampilly Nagar
                    </p>
                  </div>
                  <div className="pt-2 text-[10px] text-[#85866A] uppercase tracking-wider font-semibold border-t border-[#E6DFD5]">
                    Valet &amp; Bicycle Racks Available
                  </div>
                </div>
              </div>

              {/* Neighborhood Context & Transit Tips */}
              <div className="p-6 bg-[#FAF8F3] border-t border-[#E6DFD5] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#51483F]">
                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-[#85866A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#302820] mb-0.5">Parking &amp; Access</p>
                    <p>Dedicated customer parking bay for 8 cars + shaded bicycle racks at front entrance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-[#85866A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#302820] mb-0.5">Transit &amp; Distance</p>
                    <p>7 minutes from Ernakulam South Railway Station; 5 minutes from Kadavanthra Metro.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
