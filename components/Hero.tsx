"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [location, setLocation] = useState("");
  const [dates, setDates] = useState({ checkIn: "", checkOut: "" });
  const [guests, setGuests] = useState("2");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate scroll to featured grid or search filter behavior
    const grid = document.getElementById("villas");
    if (grid) {
      grid.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full">
      {/* Background Image Wrapper */}
      <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/hero_santorini.png"
          alt="Santorini caldera view from a luxury villa"
          fill
          priority
          className="object-cover object-center scale-105 animate-[subtle-zoom_20s_ease-out_infinite]"
        />
        {/* Editorial Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-aegean-950/60 via-aegean-900/40 to-aegean-950/80" />

        {/* Hero Content */}
        <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center text-white z-10 flex flex-col items-center">
          <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-aegean-300 mb-4 inline-block drop-shadow-md">
            The Ultimate Cycladic Escape
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light tracking-tight leading-tight mb-6 drop-shadow-lg">
            Your Private Sanctuary <br className="hidden sm:inline" /> Overlooking the Aegean
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light tracking-wide text-aegean-100/90 max-w-2xl mb-8 drop-shadow-md">
            Handpicked luxury villas in Santorini featuring private infinity pools, breathtaking caldera views, and bespoke 24/7 local concierge services.
          </p>
          <a
            href="#villas"
            className="px-8 py-3.5 bg-white text-aegean-950 hover:bg-aegean-50 font-medium text-xs tracking-widest uppercase transition-all duration-300 rounded shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore the Collection
          </a>
        </div>
      </div>

      {/* Floating Search Widget */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 -mt-16 md:-mt-20 relative z-20 pb-8">
        <form
          onSubmit={handleSearch}
          className="bg-white/95 dark:bg-aegean-900/95 backdrop-blur-md border border-aegean-100/10 dark:border-aegean-800/30 shadow-2xl rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-end"
        >
          {/* Destination */}
          <div className="flex-1 w-full flex flex-col gap-2">
            <label className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-aegean-500 dark:text-aegean-300">
              Location
            </label>
            <div className="relative">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-50 dark:bg-aegean-950 border border-slate-200 dark:border-aegean-800 rounded px-4 py-3 text-sm text-aegean-900 dark:text-aegean-50 font-medium focus:outline-none focus:ring-1 focus:ring-aegean-500 appearance-none cursor-pointer"
              >
                <option value="">Select location...</option>
                <option value="oia">Oia (Sunset & Caves)</option>
                <option value="imerovigli">Imerovigli (Caldera Balcony)</option>
                <option value="fira">Fira (Heart of Santorini)</option>
                <option value="akrotiri">Akrotiri (Historic & Secluded)</option>
              </select>
              {/* Dropdown Chevron */}
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400 dark:text-aegean-500">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="w-full md:w-auto flex-1 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-aegean-500 dark:text-aegean-300">
                Check In
              </label>
              <input
                type="date"
                value={dates.checkIn}
                onChange={(e) => setDates({ ...dates, checkIn: e.target.value })}
                className="w-full bg-slate-50 dark:bg-aegean-950 border border-slate-200 dark:border-aegean-800 rounded px-4 py-3 text-sm text-aegean-900 dark:text-aegean-50 font-medium focus:outline-none focus:ring-1 focus:ring-aegean-500 cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-aegean-500 dark:text-aegean-300">
                Check Out
              </label>
              <input
                type="date"
                value={dates.checkOut}
                onChange={(e) => setDates({ ...dates, checkOut: e.target.value })}
                className="w-full bg-slate-50 dark:bg-aegean-950 border border-slate-200 dark:border-aegean-800 rounded px-4 py-3 text-sm text-aegean-900 dark:text-aegean-50 font-medium focus:outline-none focus:ring-1 focus:ring-aegean-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="w-full md:w-[160px] flex flex-col gap-2">
            <label className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-aegean-500 dark:text-aegean-300">
              Guests
            </label>
            <div className="relative">
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-slate-50 dark:bg-aegean-950 border border-slate-200 dark:border-aegean-800 rounded px-4 py-3 text-sm text-aegean-900 dark:text-aegean-50 font-medium focus:outline-none focus:ring-1 focus:ring-aegean-500 appearance-none cursor-pointer"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="4">3 - 4 Guests</option>
                <option value="6">5 - 6 Guests</option>
                <option value="8">7+ Guests</option>
              </select>
              {/* Dropdown Chevron */}
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400 dark:text-aegean-500">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Search CTA */}
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3.5 bg-aegean-600 hover:bg-aegean-700 dark:bg-aegean-500 dark:hover:bg-aegean-600 text-white dark:text-aegean-950 font-medium text-xs tracking-widest uppercase transition-all duration-300 rounded shadow-md hover:shadow-lg focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>

      {/* Tailwind animation extension inline for slow zoom */}
      <style jsx global>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1.03); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1.03); }
        }
      `}</style>
    </section>
  );
}
