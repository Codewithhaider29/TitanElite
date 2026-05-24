<p align="center">
  <strong>TITAN</strong><span style="color:#FFD700">ELITE</span>
</p>

<h1 align="center">🏛️ Titan Elite — Premium Fitness Sanctuary</h1>

<p align="center">
  <em>A high-performance landing page engineered with Angular 21, Tailwind CSS 4, and Framer Motion — designed for luxury fitness brands that demand an elite digital presence.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-21.2-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular 21" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Motion-12.40-FF6F61?style=for-the-badge&logo=framer&logoColor=white" alt="Motion" />
  <img src="https://img.shields.io/badge/SSR-Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="SSR" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

---

## ✨ Overview

**Titan Elite** is a cinematic, ultra-premium single-page landing experience built for a luxury fitness and sports-science brand. Every pixel is crafted to convey exclusivity — from the branded loading screen to the diagonal X-shaped marquee banners and physics-based scroll-reveal animations.

### 🎯 Key Highlights

- **Cinematic Global Loader** — Branded splash screen renders instantly from `index.html` before Angular bootstraps
- **Framer Motion Scroll Reveals** — `motion` (vanilla JS) powers `inView` + `animate` for silky entrance animations
- **X-Shape Diagonal Marquee** — Two counter-scrolling trust tickers cross at opposing angles for a streetwear-luxury aesthetic
- **Glassmorphism UI System** — Frosted glass cards with backdrop-blur, gold accent borders, and hover state transitions
- **Server-Side Rendering** — Angular SSR with Express for SEO-optimized first paint
- **Fully Responsive** — Mobile-first design with a premium full-screen overlay menu

---

## 🏗️ Architecture

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/           # Sticky nav + full-screen mobile overlay
│   │   ├── hero/             # Cinematic hero with parallax background
│   │   ├── stats-bar/        # X-shape dual marquee trust banner
│   │   ├── features/         # 4-card glassmorphism feature grid
│   │   ├── facility/         # Facility showcase section
│   │   ├── enrollment/       # 3-step methodology stepper
│   │   ├── pricing/          # Tiered membership protocol cards
│   │   ├── testimonials/     # Client testimonial carousel
│   │   ├── faq/              # Expandable FAQ accordion
│   │   ├── cta-banner/       # Cinematic conversion call-to-action
│   │   ├── modal/            # Enrollment modal overlay
│   │   └── footer/           # Premium footer with brand links
│   ├── app.component.ts      # Root orchestrator (loader, scroll reveals)
│   └── app.component.html    # Full page layout composition
├── styles.css                # Design system tokens, keyframes, utilities
└── index.html                # Global loader + SEO structured data
```

---

## 🎨 Design System

| Token           | Value                          | Usage                            |
| --------------- | ------------------------------ | -------------------------------- |
| `--color-dark`  | `#121212`                      | Primary background               |
| `--color-gold`  | `#FFD700`                      | Accent, CTAs, highlights         |
| `font-outfit`   | Outfit (Google Fonts)          | Headings — Black weight          |
| `font-inter`    | Inter (Google Fonts)           | Body text — Light/Bold           |
| `glass-card`    | `backdrop-blur + border-white/10` | Frosted glass card surfaces   |
| `text-glow-gold`| `text-shadow: gold 12px blur`  | Active state label glow          |

### Animation Library

| Animation            | Description                                    |
| -------------------- | ---------------------------------------------- |
| `animate-marquee`    | Infinite left-scroll for trust ticker           |
| `animate-marquee-reverse` | Infinite right-scroll for cross-banner    |
| `shimmer-text`       | Gradient sweep across text                     |
| `float-slow`         | Gentle vertical float for decorative elements  |
| `load-sweep`         | Gold progress bar sweep in global loader       |
| `pulse-text`         | Breathing opacity for loader status text        |

---

## 🛠️ Tech Stack

| Layer          | Technology                              |
| -------------- | --------------------------------------- |
| Framework      | Angular 21.2 (Standalone Components)    |
| Styling        | Tailwind CSS 4.1 + Vanilla CSS          |
| Animations     | `motion` v12.40 (Framer Motion vanilla) |
| SSR            | Angular SSR + Express 5                 |
| Language       | TypeScript 5.9                          |
| Build          | Angular CLI 21.2.12                     |
| Formatting     | Prettier 3.8                            |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20.x
- **npm** ≥ 11.x
- **Angular CLI** ≥ 21.2

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/titan-elite.git
cd titan-elite

# Install dependencies
npm install
```

### Development Server

```bash
npm run start
```

Navigate to `http://localhost:4200/`. Hot module replacement is enabled — changes reflect instantly.

### Production Build

```bash
npm run build
```

Build artifacts are output to `dist/titan-elite/`. The production build includes tree-shaking, AOT compilation, and asset optimization.

### SSR Preview

```bash
npm run serve:ssr:titan-elite
```

Serves the fully server-rendered application with Express.

---

## 🧪 Testing

```bash
# Unit tests (Vitest)
npm run test

# End-to-end tests
npm run e2e
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width    | Optimized For            |
| ---------- | -------- | ------------------------ |
| `sm`       | ≥ 640px  | Large phones             |
| `md`       | ≥ 768px  | Tablets                  |
| `lg`       | ≥ 1024px | Laptops                  |
| `xl`       | ≥ 1280px | Desktops                 |
| `2xl`      | ≥ 1536px | Ultra-wide displays      |

---

## 🔍 SEO & Performance

- **JSON-LD Structured Data** — `SportsActivityLocation` + `FAQPage` schemas in `index.html`
- **Meta Tags** — Dynamic title and description via Angular `Meta` and `Title` services
- **Semantic HTML** — Proper heading hierarchy, `<article>`, `<section>`, `<nav>` elements
- **Prerendered Routes** — Static HTML generated at build time for instant first paint
- **Optimized Bundles** — Main bundle ~85 KB (gzipped), styles ~8 KB (gzipped)

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

<p align="center">
  <strong>Built with precision. Designed for dominance.</strong><br/>
  <sub>TITAN ELITE © 2026</sub>
</p>
