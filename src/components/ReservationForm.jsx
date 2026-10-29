import React, { useState } from 'react';
import { Calendar, Clock, Users, Mail, Phone, User, MessageSquare, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { cafeData } from '../data/cafeData';

export default function ReservationForm({ isModal = false, onClose = () => {} }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '10:00',
    guests: '2',
    seatingPreference: 'Indoor AC',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Today's date in YYYY-MM-DD for min date attribute
  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid telephone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.date) newErrors.date = 'Please pick a preferred date';
    if (!formData.time) newErrors.time = 'Please select a preferred arrival time';
    if (!formData.guests) newErrors.guests = 'Please specify guest count';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    // Simulate realistic API roundtrip (850ms)
    setTimeout(() => {
      setIsLoading(false);
      setSubmittedData({ ...formData, referenceId: `KVA-${Math.floor(100000 + Math.random() * 900000)}` });
    }, 850);
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '10:00',
      guests: '2',
      seatingPreference: 'Indoor AC',
      message: '',
    });
    setErrors({});
  };

  return (
    <div className={`${isModal ? 'p-6 sm:p-10' : 'py-20 lg:py-32 bg-[#FAF8F3] border-b border-[#E6DFD5]'}`}>
      <div className={`${isModal ? 'max-w-2xl mx-auto' : 'max-w-4xl mx-auto px-6 sm:px-8'}`}>
        {!isModal && (
          <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#85866A]">
              TABLE RESERVATIONS &amp; ENQUIRIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#302820] font-normal">
              Reserve your table at Kōva
            </h2>
            <p className="text-xs sm:text-sm text-[#51483F]">
              We hold a limited number of tables for advance reservations during morning filter rituals and weekend brunch hours.
            </p>
          </div>
        )}

        {submittedData ? (
          /* Success Confirmation State */
          <div className="bg-[#FAF8F3] p-8 sm:p-10 border border-[#85866A]/40 shadow-sm text-center space-y-6 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-[#85866A]/10 text-[#85866A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#85866A] font-semibold">
                Demo Reservation Received
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#302820]">
                Thank you, {submittedData.name.split(' ')[0]}
              </h3>
              <p className="text-xs font-mono text-[#85866A] tracking-wider">
                Booking Reference: {submittedData.referenceId}
              </p>
            </div>

            <div className="bg-[#F0EBE2] p-5 text-left border border-[#E6DFD5] text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between py-1 border-b border-[#E6DFD5]">
                <span className="text-[#85866A]">Date &amp; Time:</span>
                <span className="font-medium text-[#302820]">{submittedData.date} at {submittedData.time}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E6DFD5]">
                <span className="text-[#85866A]">Party Size:</span>
                <span className="font-medium text-[#302820]">{submittedData.guests} Guest(s) • {submittedData.seatingPreference}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E6DFD5]">
                <span className="text-[#85866A]">Contact:</span>
                <span className="font-medium text-[#302820]">{submittedData.phone}</span>
              </div>
              {submittedData.message && (
                <div className="py-1">
                  <span className="text-[#85866A] block mb-0.5">Notes:</span>
                  <span className="italic text-[#302820]">{submittedData.message}</span>
                </div>
              )}
            </div>

            <div className="p-4 bg-[#FAF8F3] border border-[#E6DFD5] text-left text-xs text-[#51483F] space-y-1">
              <p className="font-semibold text-[#302820] uppercase tracking-wider text-[10px]">
                Demo Client Architecture Note:
              </p>
              <p>
                In your live café website deployment, this form will instantly trigger automated WhatsApp confirmations to the customer and push the reservation to your POS (Petpooja, Posist, UrbanPiper) or Google Calendar.
              </p>
            </div>

            <div className="flex justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold border border-[#302820] text-[#302820] hover:bg-[#F0EBE2] transition-colors"
              >
                Make Another Test Booking
              </button>
              {isModal && (
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold bg-[#302820] text-[#FAF8F3] hover:bg-[#85866A] transition-colors"
                >
                  Close Window
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Form Controls */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-[#FAF8F3] p-7 sm:p-10 border border-[#E6DFD5] shadow-sm space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="res-name"
                  className="block text-[11px] uppercase tracking-widest font-semibold text-[#302820]"
                >
                  Full Name <span className="text-red-700">*</span>
                </label>
                <div className="relative">
                  <input
                    id="res-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Arun Nair"
                    className={`w-full px-3.5 py-2.5 bg-white border text-xs text-[#302820] placeholder-[#B9AA98] focus:outline-none focus:border-[#302820] transition-colors ${
                      errors.name ? 'border-red-600 bg-red-50/20' : 'border-[#D9D0C3]'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-[11px] text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label
                  htmlFor="res-phone"
                  className="block text-[11px] uppercase tracking-widest font-semibold text-[#302820]"
                >
                  Phone Number <span className="text-red-700">*</span>
                </label>
                <input
                  id="res-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98460 00000"
                  className={`w-full px-3.5 py-2.5 bg-white border text-xs text-[#302820] placeholder-[#B9AA98] focus:outline-none focus:border-[#302820] transition-colors ${
                    errors.phone ? 'border-red-600 bg-red-50/20' : 'border-[#D9D0C3]'
                  }`}
                />
                {errors.phone && (
                  <p className="text-[11px] text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-1.5 sm:col-span-2">
                <label
                  htmlFor="res-email"
                  className="block text-[11px] uppercase tracking-widest font-semibold text-[#302820]"
                >
                  Email Address <span className="text-red-700">*</span>
                </label>
                <input
                  id="res-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@domain.com"
                  className={`w-full px-3.5 py-2.5 bg-white border text-xs text-[#302820] placeholder-[#B9AA98] focus:outline-none focus:border-[#302820] transition-colors ${
                    errors.email ? 'border-red-600 bg-red-50/20' : 'border-[#D9D0C3]'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Date */}
              <div className="space-y-1.5">
                <label
                  htmlFor="res-date"
                  className="block text-[11px] uppercase tracking-widest font-semibold text-[#302820]"
                >
                  Preferred Date <span className="text-red-700">*</span>
                </label>
                <input
                  id="res-date"
                  name="date"
                  type="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full px-3.5 py-2.5 bg-white border text-xs text-[#302820] focus:outline-none focus:border-[#302820] transition-colors ${
                    errors.date ? 'border-red-600 bg-red-50/20' : 'border-[#D9D0C3]'
                  }`}
                />
                {errors.date && (
                  <p className="text-[11px] text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.date}</span>
                  </p>
                )}
              </div>

              {/* Time */}
              <div className="space-y-1.5">
                <label
                  htmlFor="res-time"
                  className="block text-[11px] uppercase tracking-widest font-semibold text-[#302820]"
                >
                  Arrival Time <span className="text-red-700">*</span>
                </label>
                <select
                  id="res-time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D9D0C3] text-xs text-[#302820] focus:outline-none focus:border-[#302820]"
                >
                  <option value="08:00">08:00 AM (Early Filter Session)</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM (Morning Sourdough)</option>
                  <option value="11:30">11:30 AM</option>
                  <option value="13:00">01:00 PM (Lunch Tartines)</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:30">04:30 PM (Afternoon Slow Bar)</option>
                  <option value="18:00">06:00 PM</option>
                  <option value="19:30">07:30 PM (Evening Ambient)</option>
                </select>
              </div>

              {/* Guests Count */}
              <div className="space-y-1.5">
                <label
                  htmlFor="res-guests"
                  className="block text-[11px] uppercase tracking-widest font-semibold text-[#302820]"
                >
                  Number of Guests <span className="text-red-700">*</span>
                </label>
                <select
                  id="res-guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D9D0C3] text-xs text-[#302820] focus:outline-none focus:border-[#302820]"
                >
                  <option value="1">1 Person (Quiet Corner)</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons (Teak Table)</option>
                  <option value="5">5 Persons</option>
                  <option value="6+">6+ Persons (Communal Studio Table)</option>
                </select>
              </div>

              {/* Seating Preference */}
              <div className="space-y-1.5">
                <label
                  htmlFor="res-seating"
                  className="block text-[11px] uppercase tracking-widest font-semibold text-[#302820]"
                >
                  Seating Zone
                </label>
                <select
                  id="res-seating"
                  name="seatingPreference"
                  value={formData.seatingPreference}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D9D0C3] text-xs text-[#302820] focus:outline-none focus:border-[#302820]"
                >
                  <option value="Indoor AC">Indoor AC (Main Roastery Hall)</option>
                  <option value="Courtyard Veranda">Courtyard Veranda (Shaded Garden)</option>
                  <option value="Barista Brew Bar">Barista Brew Bar (Slow Pour Over Stools)</option>
                </select>
              </div>

              {/* Special Requests */}
              <div className="space-y-1.5 sm:col-span-2">
                <label
                  htmlFor="res-message"
                  className="block text-[11px] uppercase tracking-widest font-semibold text-[#302820]"
                >
                  Dietary Preferences or Special Notes (Optional)
                </label>
                <textarea
                  id="res-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="e.g. Need high chair, vegan milk preferences, celebrating an anniversary..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D9D0C3] text-xs text-[#302820] placeholder-[#B9AA98] focus:outline-none focus:border-[#302820]"
                />
              </div>
            </div>

            {/* Demo submission explanation */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E6DFD5]">
              <span className="text-[11px] text-[#85866A]">
                Instant demo confirmation with sample reference code.
              </span>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs tracking-[0.18em] uppercase font-semibold bg-[#302820] text-[#FAF8F3] hover:bg-[#85866A] transition-colors disabled:opacity-70 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Validating Table...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Reservation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
