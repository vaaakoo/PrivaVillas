# PrivaVillas - Premium Santorini Villa Rentals (MVP)

## Project Overview
PrivaVillas is a static, high-end lead generation platform for luxury villa rentals in Santorini. The primary goal is to act as a digital storefront that builds trust and captures booking requests securely.

* **Domain:** PrivaVillas.com
* **Tech Stack:** Next.js (App Router), React, Tailwind CSS
* **Deployment:** GitHub -> Vercel

## UI/UX Aesthetic
* **Theme:** Santorini-inspired (crisp whites, Aegean blues, subtle grays).
* **Mode:** Built-in Dark/Light mode toggle (`darkMode: 'class'` in Tailwind).
* **Vibe:** Minimalistic, exclusive, and highly professional.

## Core Features & Pages
1. **Homepage:** Hero section with a background image, premium typography, and a static Search/Filter widget.
2. **Featured Grid:** Responsive cards displaying villa images, basic stats, and a "Request to Book" CTA.
3. **Single Property Page:** Detailed view with a photo gallery grid, amenities list, and the Lead Generation Form.
4. **Terms & FAQ:** Clear explanation of the 20% upfront deposit and on-site payment policy to establish transparency and trust.

---

## AI Generator Prompt
*Use this prompt in v0 or other AI coding assistants to generate the base components:*

**Role:** You are an expert Frontend Developer specializing in Next.js (App Router), Tailwind CSS, and premium UI/UX design.

**Task:** Build a fully responsive, static MVP super-version for a luxury villa rental platform called "PrivaVillas".

**Design System:** Use a "Santorini" color palette (crisp whites, Aegean blues, subtle grays). Implement a robust Dark/Light mode toggle using Tailwind's class strategy (`darkMode: 'class'`). The design must be extremely clean, luxurious, and minimalistic to build trust.

**Core Requirements:**
1. **Navigation:** A sticky, transparent-to-solid navbar with the text logo "PrivaVillas", navigation links (Home, Villas, FAQ), and a Theme Toggle button (Sun/Moon icon).
2. **Hero Section:** A large, stunning background image placeholder of a Santorini villa, a premium headline, and a clean search/filter widget (Location, Dates, Guests). The widget is static for now but must look fully interactive.
3. **Featured Villas Grid:** A responsive grid (1 col mobile, 3 col desktop) of property cards. Each card needs a high-quality image placeholder, villa name, short description, capacity, and a "Request to Book" button.
4. **Single Property Page:** A detailed view featuring a high-resolution image gallery (grid layout), a comprehensive amenities list, static pricing brackets, and a well-designed Lead Generation form (Name, Email, Phone, Dates, and a "Check Availability" submit button).
5. **Footer:** A simple, elegant footer with copyright info, contact details, and a link to Terms & Conditions (specifically mentioning a 20% upfront deposit policy).

**Technical Constraints:** Provide modular React components. Ensure all Tailwind classes flawlessly support dark mode (e.g., `bg-white dark:bg-gray-900`, `text-gray-800 dark:text-gray-100`).