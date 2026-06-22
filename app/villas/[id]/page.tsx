"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { villasData } from "@/components/FeaturedGrid";

export default function VillaDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const villa = villasData.find((v) => v.id === id) || null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  if (!villa) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-aegean-950 px-6 py-32 text-center">
        <h2 className="font-serif text-3xl text-aegean-900 dark:text-aegean-100 mb-4">
          Villa Sanctuary Not Found
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 max-w-md">
          The requested luxury property details could not be retrieved. Please return to our main catalog to explore active listings.
        </p>
        <Link
          href="/"
          className="px-8 py-3 bg-aegean-600 hover:bg-aegean-700 dark:bg-aegean-500 dark:hover:bg-aegean-600 text-white dark:text-aegean-950 font-medium text-xs tracking-widest uppercase transition-colors rounded shadow-md"
        >
          Return to Collection
        </Link>
      </div>
    );
  }

  // Setup gallery images based on active villa
  const galleryImages = [
    villa.image, // Main
    villa.id === "villa-alis" ? "/villa_2.png" : villa.id === "villa-thalassa" ? "/villa_3.png" : "/villa_1.png",
    villa.id === "villa-alis" ? "/villa_3.png" : villa.id === "villa-thalassa" ? "/villa_1.png" : "/villa_2.png",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate concierge api check
    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50/50 dark:bg-aegean-950/20">
      {/* Detail Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-8">
          <Link href="/" className="hover:text-aegean-650 dark:hover:text-aegean-300 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-aegean-900 dark:text-aegean-100 font-medium">{villa.name}</span>
        </div>

        {/* Header Title & Location */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-aegean-100 dark:bg-aegean-900 text-aegean-750 dark:text-aegean-300 font-semibold text-[10px] tracking-widest uppercase rounded">
                Verified Luxury
              </span>
              <span className="flex items-center gap-1 text-amber-500 font-medium text-xs">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {villa.rating}
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-aegean-900 dark:text-aegean-50">
              {villa.name}
            </h1>
            <p className="text-sm font-light text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1.5">
              <svg className="w-4 h-4 text-aegean-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {villa.location}
            </p>
          </div>

          <div className="text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-aegean-500 dark:border-aegean-400 pl-4 md:pl-0 md:pr-4">
            <p className="text-xs text-slate-400 dark:text-slate-500 tracking-widest uppercase">Starting From</p>
            <p className="font-serif text-3xl md:text-4xl font-light text-aegean-750 dark:text-aegean-300 mt-1">
              €{villa.pricePerNight}
              <span className="text-sm text-slate-500 font-sans tracking-normal">/night</span>
            </p>
          </div>
        </div>

        {/* Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 h-[50vh] min-h-[350px] md:min-h-[450px]">
          {/* Main Large Image */}
          <div className="md:col-span-2 relative h-full w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src={galleryImages[0]}
              alt={`${villa.name} Main View`}
              fill
              priority
              className="object-cover hover:scale-102 transition-transform duration-500"
            />
          </div>
          {/* Secondary Stacked Images */}
          <div className="hidden md:flex flex-col gap-6 h-full">
            <div className="relative flex-1 w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={galleryImages[1]}
                alt={`${villa.name} Interior`}
                fill
                className="object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>
            <div className="relative flex-1 w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={galleryImages[2]}
                alt={`${villa.name} Terrace`}
                fill
                className="object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Details / Booking split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Details (2/3 width on desktop) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div className="bg-white dark:bg-aegean-900/20 border border-slate-200/50 dark:border-aegean-800/30 rounded-xl p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-medium text-aegean-900 dark:text-aegean-50 mb-4">
                The Sanctuary Experience
              </h3>
              <p className="text-sm md:text-base text-slate-650 dark:text-slate-300 font-light leading-relaxed mb-6">
                Welcome to {villa.name}, a pinnacle of private luxury nestled in {villa.location.split(",")[0]}. Immersed in the classic white-washed architecture of Santorini, this exclusive residence has been designed to maximize panoramic vistas of the volcano and the endless blue Aegean Sea.
              </p>
              <p className="text-sm md:text-base text-slate-650 dark:text-slate-300 font-light leading-relaxed">
                Whether lounging by the custom infinity plunge pool, enjoying local vintages on your private sun deck, or experiencing bespoke island tours curated by your personal 24/7 local host, {villa.name} provides an unmatched standard of service, privacy, and Cycladic elegance.
              </p>

              {/* Quick Details */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 mt-8 border-t border-slate-100 dark:border-aegean-800/40 text-center sm:text-left">
                <div>
                  <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">Guests</span>
                  <span className="font-serif text-lg font-light text-aegean-750 dark:text-aegean-300">{villa.guests} guests max</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">Bedrooms</span>
                  <span className="font-serif text-lg font-light text-aegean-750 dark:text-aegean-300">{villa.bedrooms} Bedrooms</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">Bathrooms</span>
                  <span className="font-serif text-lg font-light text-aegean-750 dark:text-aegean-300">{villa.bathrooms} En-Suite</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">Infinity Pool</span>
                  <span className="font-serif text-lg font-light text-aegean-750 dark:text-aegean-300">Private Private</span>
                </div>
              </div>
            </div>

            {/* Amenities Grid */}
            <div>
              <h3 className="font-serif text-2xl font-medium text-aegean-900 dark:text-aegean-50 mb-6">
                Premium In-Villa Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Private Heated Infinity Pool", desc: "Volcanic stone edge with caldera views", icon: "🌊" },
                  { name: "Panoramic Caldera Sunset Terrace", desc: "Furnished with premium sun loungers", icon: "🌅" },
                  { name: "Complimentary VIP Port/Airport Transfer", desc: "Mercedes-Benz private chauffeur", icon: "🚐" },
                  { name: "24/7 Dedicated Butler & Local Concierge", desc: "Bespoke itineraries and yacht booking", icon: "🛎️" },
                  { name: "Daily Organic Greek Breakfast", desc: "Prepared fresh by the villa chef", icon: "🥞" },
                  { name: "Fully Stocked Luxury Wine Cellar", desc: "Assorted Santorini Assyrtiko vintages", icon: "🍷" },
                  { name: "Eco Climate Control & Air Conditioning", desc: "Quiet zoned ventilation system", icon: "❄️" },
                  { name: "High-Speed Fiber Wi-Fi Connection", desc: "Complimentary access throughout the estate", icon: "📡" },
                ].map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 bg-white dark:bg-aegean-900/10 border border-slate-100 dark:border-aegean-800/20 rounded-lg hover:border-aegean-200 dark:hover:border-aegean-800/60 transition-all duration-300"
                  >
                    <span className="text-2xl flex-shrink-0">{amenity.icon}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-aegean-900 dark:text-aegean-50">
                        {amenity.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-light mt-0.5">
                        {amenity.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Brackets */}
            <div className="bg-white dark:bg-aegean-900/20 border border-slate-200/50 dark:border-aegean-800/30 rounded-xl p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-medium text-aegean-900 dark:text-aegean-50 mb-2">
                Seasonal Rates
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mb-6 uppercase tracking-widest">
                Rates & reservation options
              </p>

              <div className="divide-y divide-slate-100 dark:divide-aegean-800/40">
                {[
                  { season: "Low Season", dates: "October 1 – April 30", rate: `€${Math.floor(villa.pricePerNight * 0.7)} / night` },
                  { season: "Mid Season", dates: "May 1 – May 31 & September 1 – September 30", rate: `€${Math.floor(villa.pricePerNight * 0.85)} / night` },
                  { season: "High Season", dates: "June 1 – August 31", rate: `€${villa.pricePerNight} / night` },
                ].map((bracket, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4">
                    <div>
                      <h4 className="text-sm font-semibold text-aegean-900 dark:text-aegean-50">{bracket.season}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-light mt-0.5">{bracket.dates}</p>
                    </div>
                    <span className="font-serif text-sm sm:text-base font-medium text-aegean-750 dark:text-aegean-300">
                      {bracket.rate}
                    </span>
                  </div>
                ))}
              </div>

              {/* Deposit Reminder */}
              <div className="bg-slate-50 dark:bg-aegean-950/40 border-l-2 border-aegean-500 rounded p-4 mt-6 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                <span className="font-semibold text-aegean-700 dark:text-aegean-300">Booking Terms:</span> In line with our transparency policy, a 20% deposit locks in your selected dates. The remaining 80% is payable 30 days prior to arrival. Free cancellation is offered up to 60 days before check-in.
              </div>
            </div>
          </div>

          {/* Right Lead Generation Form (1/3 width, sticky on desktop) */}
          <div className="lg:sticky lg:top-24 bg-white dark:bg-aegean-900/40 border border-slate-200/60 dark:border-aegean-800/40 rounded-xl p-8 shadow-lg">
            <h3 className="font-serif text-xl font-medium text-aegean-900 dark:text-aegean-50 mb-1">
              Check Availability
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-light">
              Receive a live status report from our concierge in under 2 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Alexis Georgiou"
                  className="w-full bg-slate-50 dark:bg-aegean-950 border border-slate-200 dark:border-aegean-800 rounded px-4 py-2.5 text-sm text-aegean-900 dark:text-aegean-50 focus:outline-none focus:ring-1 focus:ring-aegean-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="alexis@domain.com"
                  className="w-full bg-slate-50 dark:bg-aegean-950 border border-slate-200 dark:border-aegean-800 rounded px-4 py-2.5 text-sm text-aegean-900 dark:text-aegean-50 focus:outline-none focus:ring-1 focus:ring-aegean-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+30 690 123 4567"
                  className="w-full bg-slate-50 dark:bg-aegean-950 border border-slate-200 dark:border-aegean-800 rounded px-4 py-2.5 text-sm text-aegean-900 dark:text-aegean-50 focus:outline-none focus:ring-1 focus:ring-aegean-500"
                />
              </div>

              {/* Dates Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
                    Check In
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    required
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 dark:bg-aegean-950 border border-slate-200 dark:border-aegean-800 rounded px-3 py-2 text-xs text-aegean-900 dark:text-aegean-50 focus:outline-none focus:ring-1 focus:ring-aegean-500 cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
                    Check Out
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    required
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 dark:bg-aegean-950 border border-slate-200 dark:border-aegean-800 rounded px-3 py-2 text-xs text-aegean-900 dark:text-aegean-50 focus:outline-none focus:ring-1 focus:ring-aegean-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
                  Concierge Requests
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Need chef service, yacht tours..."
                  rows={3}
                  className="w-full bg-slate-50 dark:bg-aegean-950 border border-slate-200 dark:border-aegean-800 rounded px-4 py-2 text-sm text-aegean-900 dark:text-aegean-50 focus:outline-none focus:ring-1 focus:ring-aegean-500 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-aegean-600 hover:bg-aegean-700 dark:bg-aegean-500 dark:hover:bg-aegean-600 disabled:bg-slate-300 disabled:dark:bg-slate-700 text-white dark:text-aegean-950 font-semibold text-xs tracking-widest uppercase transition-all duration-300 rounded shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white dark:text-aegean-950" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Securing Connection...</span>
                  </>
                ) : (
                  "Check Live Availability"
                )}
              </button>
            </form>

            <p className="text-[10px] text-slate-400 text-center font-light mt-4">
              Submitting doesn&apos;t incur any charges. Standard 20% deposit will be requested upon formal invitation.
            </p>
          </div>
        </div>
      </div>

      {/* Confirmation Glassmorphic Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-aegean-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-aegean-900 border border-slate-200/50 dark:border-aegean-800/40 rounded-xl p-8 md:p-10 max-w-lg w-full text-center shadow-2xl relative animate-scale-up">
            {/* Success Check Icon */}
            <div className="w-16 h-16 bg-aegean-100 dark:bg-aegean-950/80 text-aegean-650 dark:text-aegean-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-medium text-aegean-900 dark:text-aegean-50 mb-3">
              Booking Request Received
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-6">
              Thank you, <span className="font-semibold text-aegean-750 dark:text-aegean-300">{formData.name}</span>. 
              Our elite concierge team has received your check availability request for{" "}
              <span className="font-semibold text-aegean-750 dark:text-aegean-300">{villa.name}</span> for the period{" "}
              <span className="font-semibold text-aegean-750 dark:text-aegean-300">{formData.checkIn}</span> to{" "}
              <span className="font-semibold text-aegean-750 dark:text-aegean-300">{formData.checkOut}</span>.
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-light border-t border-slate-100 dark:border-aegean-800/40 pt-4 mb-6 leading-relaxed">
              We are currently contacting the on-site property host. A formal booking proposal and invoice link for the 20% security deposit (€{Math.floor(villa.pricePerNight * 0.2)} E.U.) will be sent to your email (<span className="font-semibold">{formData.email}</span>) within 2 hours.
            </p>

            <button
              onClick={() => {
                setShowModal(false);
                router.push("/");
              }}
              className="px-8 py-3 bg-aegean-600 hover:bg-aegean-700 dark:bg-aegean-500 dark:hover:bg-aegean-600 text-white dark:text-aegean-950 font-medium text-xs tracking-widest uppercase transition-colors rounded shadow-md w-full"
            >
              Close & Return Home
            </button>
          </div>
        </div>
      )}

      {styleAdditions}
    </div>
  );
}

// Inline extra styles for smooth modal fades and scale animation
const styleAdditions = (
  <style jsx global>{`
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes scale-up {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .animate-fade-in {
      animation: fade-in 0.2s ease-out forwards;
    }
    .animate-scale-up {
      animation: scale-up 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `}</style>
);
