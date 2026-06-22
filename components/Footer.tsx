"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-aegean-950 text-slate-400 border-t border-aegean-900/40">
      {/* 20% Deposit Policy Banner */}
      <div className="bg-aegean-900/80 border-b border-aegean-800/40 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-aegean-400 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
            <p className="text-sm text-slate-200 font-light leading-relaxed">
              <span className="font-semibold text-aegean-300">Transparent Booking Policy:</span> A{" "}
              <span className="font-semibold text-white">20% upfront deposit</span> is required to secure your selected dates. The remaining balance is settled 30 days prior to arrival.
            </p>
          </div>
          <div className="flex-shrink-0 text-xs text-aegean-400 tracking-wider uppercase border border-aegean-800/60 rounded px-3 py-1 font-medium bg-aegean-950/40">
            Secure Booking Guarantee
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="font-serif text-2xl font-semibold tracking-wide text-white"
          >
            PrivaVillas
          </Link>
          <p className="text-sm font-light text-slate-400 leading-relaxed max-w-sm">
            Curating exceptional luxury villa rentals across the volcanic cliffs of Santorini. Experience Greece at its absolute finest.
          </p>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            License No: EOT-1092837465-GR
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4 md:pl-12">
          <h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-2">
            Navigation
          </h4>
          <nav className="flex flex-col space-y-3 text-sm font-light">
            <Link href="/" className="hover:text-aegean-400 transition-colors">
              Home
            </Link>
            <Link href="/#villas" className="hover:text-aegean-400 transition-colors">
              Our Villas
            </Link>
            <Link href="/#faq" className="hover:text-aegean-400 transition-colors">
              Frequently Asked Questions
            </Link>
            <Link href="#" className="hover:text-aegean-400 transition-colors">
              Privacy Policy
            </Link>
          </nav>
        </div>

        {/* Contact details */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-2">
            Inquiries
          </h4>
          <div className="flex flex-col space-y-3 text-sm font-light">
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 text-aegean-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>concierge@privavillas.com</span>
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 text-aegean-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+30 22860 92830</span>
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 text-aegean-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Oia Cliffs, Santorini, 84702, Greece</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-aegean-900/30 bg-aegean-950/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} PrivaVillas Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cancellation Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
