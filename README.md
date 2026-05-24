# TITAN ELITE &mdash; PREMIUM MEMBERSHIP PORTAL

A high-performance, visually stunning landing page and onboarding portal for the premium luxury fitness brand **Titan Elite**. Engineered with modern frontend architectures to deliver an ultra-fast, responsive, and conversion-focused user experience.

---

## 🌟 Tech Stack & Infrastructure

- **Framework**: Angular 17+ (Standalone, Component-driven Architecture)
- **Styling**: Tailwind CSS v4 (CSS-first engine utilizing `@theme` and `@utility` layers)
- **State Management**: Reactive **Angular Signals** for local and dynamic UI state toggles
- **SEO & Socials**: Dynamic head injection via Angular's `Title` and `Meta` services, and static JSON-LD schemas
- **Optimization**: Performance-tuned `NgOptimizedImage` using preload LCP anchors
- **Rendering**: Server-Side Rendering (SSR) and Static Site Generation (SSG) pre-rendered out of the box

---

## 📂 Architectural Structure

- **Navbar**: Glassmorphic, sticky navigation bar featuring a responsive hamburger drawer driven by an Angular Signal (`isMenuOpen`).
- **Hero Sanctuary**: High-impact display typography, breadcrumbs, scarcity tickers ("Only 5 slots left"), and high-performance preloaded backdrop visuals.
- **Dynamic Stats Ticker**: SSR-safe Signal counters (`membersCount`, `coachesCount`, `hoursCount`) that count up smoothly from zero on page load.
- **The Titan Advantage**: High-contrast offering cards detailing coaching, metabolic suites, and private amenities.
- **The Enrollment Experience**: Horizontal stepper timeline connector (Screening $\rightarrow$ Diagnostics $\rightarrow$ Onboarding) linking process cards.
- **Membership Protocols**: Tier cards (Titan Club, VIP Elite, Olympic Protocol) featuring monthly/yearly price toggling driven by an Angular Signal (`billingCycle`).
- **Dynamic Accordion FAQ**: Signals-driven FAQs structured semantically to target Google Featured Snippets.
- **Success Stories**: Testimonials grid with custom reviews, ratings, and member profiles.
- **Footer Sanctuary**: Strategic Trust badges (Technogym, ACSM), Ritz-Carlton local SEO coordinates, and a Lead Magnet newsletter PDF capture.
- **Exclusive Onboarding Modal**: A 3-step wizard overlay driven by Signals (`formStep`) that dynamically tracks goal inputs, athlete details, and queues requests.

---

## 🛠️ Local Installation & Script Commands

To launch the sanctuary on your local server:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Local Development Server**:
   ```bash
   npm run start
   ```
   Open [http://localhost:4200](http://localhost:4200) inside your web browser.

3. **Verify Production Compile & SSR**:
   ```bash
   npm run build
   ```
   Generates browser and pre-rendered server-side bundles under `dist/titan-elite`.
