"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set initial theme state on mount
  useEffect(() => {
    const isDarkTheme = document.documentElement.classList.contains("dark");
    requestAnimationFrame(() => {
      setIsDark(isDarkTheme);
    });
  }, []);

  // Toggle Theme function
  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-aegean-950/80 backdrop-blur-md shadow-lg border-b border-aegean-100/10 dark:border-aegean-900/20 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-aegean-700 dark:text-aegean-100 hover:opacity-90 transition-opacity"
        >
          PrivaVillas
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-widest uppercase">
          <Link
            href="/"
            className="text-aegean-900/80 hover:text-aegean-500 dark:text-aegean-100/80 dark:hover:text-aegean-300 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#villas"
            className="text-aegean-900/80 hover:text-aegean-500 dark:text-aegean-100/80 dark:hover:text-aegean-300 transition-colors"
          >
            Villas
          </Link>
          <Link
            href="/#faq"
            className="text-aegean-900/80 hover:text-aegean-500 dark:text-aegean-100/80 dark:hover:text-aegean-300 transition-colors"
          >
            FAQ
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="p-2.5 rounded-full border border-aegean-200 dark:border-aegean-800 text-aegean-600 dark:text-aegean-300 hover:bg-aegean-50 dark:hover:bg-aegean-900 transition-all duration-300 hover:scale-105"
          >
            {isDark ? (
              // Sun Icon (Light Mode)
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m0 13.5V21M4.95 4.95l1.59 1.59m10.91 10.91l1.59 1.59M3 12h2.25m13.5 0H21M4.95 19.05l1.59-1.59m10.91-10.91l1.59-1.59M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
                />
              </svg>
            ) : (
              // Moon Icon (Dark Mode)
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>

          <Link
            href="/#villas"
            className="px-6 py-2.5 bg-aegean-600 hover:bg-aegean-700 dark:bg-aegean-500 dark:hover:bg-aegean-600 text-white dark:text-aegean-950 font-medium text-xs tracking-widest uppercase transition-all duration-300 rounded shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu & Toggle Buttons */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-full border border-aegean-200 dark:border-aegean-800 text-aegean-600 dark:text-aegean-300"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.95 4.95l1.59 1.59m10.91 10.91l1.59 1.59M3 12h2.25m13.5 0H21M4.95 19.05l1.59-1.59m10.91-10.91l1.59-1.59M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

          {/* Burger button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 text-aegean-900 dark:text-aegean-100 hover:opacity-80"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[73px] bg-white dark:bg-aegean-950 z-40 transition-transform duration-300 md:hidden flex flex-col justify-between p-8 border-t border-aegean-100/10 dark:border-aegean-900/20 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-6 text-xl font-medium tracking-widest uppercase mt-4">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-aegean-900 dark:text-aegean-100 hover:text-aegean-500 border-b border-aegean-50 dark:border-aegean-900/50 pb-3"
          >
            Home
          </Link>
          <Link
            href="/#villas"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-aegean-900 dark:text-aegean-100 hover:text-aegean-500 border-b border-aegean-50 dark:border-aegean-900/50 pb-3"
          >
            Villas
          </Link>
          <Link
            href="/#faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-aegean-900 dark:text-aegean-100 hover:text-aegean-500 border-b border-aegean-50 dark:border-aegean-900/50 pb-3"
          >
            FAQ
          </Link>
        </nav>

        <div className="flex flex-col gap-4 mt-auto">
          <Link
            href="/#villas"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center px-6 py-4 bg-aegean-600 hover:bg-aegean-700 dark:bg-aegean-500 dark:hover:bg-aegean-600 text-white dark:text-aegean-950 font-medium tracking-widest uppercase transition-colors rounded"
          >
            Book Now
          </Link>
          <p className="text-center text-xs text-aegean-400 dark:text-aegean-500">
            20% Upfront Deposit Policy Applies.
          </p>
        </div>
      </div>
    </header>
  );
}
