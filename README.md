# MuseoVerse Website

![Live App](https://img.shields.io/badge/Live%20App-museoverse.vercel.app-8b5e34?style=for-the-badge&logo=vercel&logoColor=white)
![React 18](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=0b0f19)
![Vite 6](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-Animated-111827?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Responsive-Desktop%20%26%20Mobile-c9a84c?style=for-the-badge)

A responsive multi-page marketing website for MuseoVerse, built with React, Vite, Tailwind CSS v4, Motion, and React Router.

This repository contains the public-facing website for the MuseoVerse platform. It presents the product story, visitor value proposition, museum partner value proposition, brand story, and contact flow through a polished desktop-and-mobile experience with motion, section reveals, and strong visual branding.

## ✨ What This Project Is

This project is a front-end marketing website for MuseoVerse.

It is designed to:

- introduce MuseoVerse as an AI-powered museum discovery platform
- explain the product from both the visitor and museum perspectives
- support demo requests and general inquiries
- present a visually refined, responsive, animated brand experience

It is not the museum partner dashboard itself.

That distinction matters because this website focuses on positioning, storytelling, conversion, and brand communication rather than authenticated product workflows or live operational data.

## 🌍 Live App

The website is live at:

- https://museoverse.vercel.app/

## 📌 Current Status

The live routed website currently includes 6 primary pages:

1. `Home`
2. `Product`
3. `For Museums`
4. `For Visitors`
5. `About`
6. `Contact`

The site currently includes:

- a shared animated header and footer
- route-based page navigation
- enter transitions and scroll-triggered reveal animations
- desktop and mobile layouts for every routed page
- localized CTA flows for demo booking and app download
- a client-side validated contact form with four inquiry modes

The site is currently a front-end experience. It does not yet connect its contact form, store buttons, or legal links to production services.

## 🧠 What The Website Communicates

MuseoVerse is presented as a two-sided cultural technology platform:

- For visitors:
  - AI artifact recognition
  - personalized storytelling
  - AR-enhanced discovery
  - virtual museum exploration
  - social and recommendation features

- For museums:
  - visitor engagement intelligence
  - exhibit performance insight
  - campaign and visibility tools
  - digital storytelling measurement
  - partner onboarding and growth positioning

Across the website, the product narrative is consistently framed around intelligent discovery, cultural accessibility, and measurable institutional impact.

## 🧭 Site Navigation

The main route definitions live in `src/app/routes.tsx`.

| Label | Route | Purpose |
|---|---|---|
| Home | `/` | Main landing page and brand overview |
| Product | `/product` | Full feature breakdown of the MuseoVerse platform |
| For Museums | `/for-museums` | Museum-facing value proposition and partnership flow |
| For Visitors | `/for-visitors` | Visitor-facing app experience and discovery journey |
| About | `/about` | Brand story, mission, values, and team positioning |
| Contact | `/contact` | Inquiry form, contact details, and quick answers |

Important route behavior:

- all route changes reset the destination page to the top
- the shared layout handles route transitions
- a wildcard route falls back to the home page

## 📄 Page Breakdown

Below is the current page-by-page breakdown of the live routed experience.

### 1. 🏠 Home

File: `src/app/components/HomePage.tsx`

Purpose:

- serves as the main landing page for the website
- introduces MuseoVerse quickly and visually
- shows how the platform serves both visitors and institutions

Main sections:

- hero section with brand positioning and CTA buttons
- feature grid introducing the MuseoVerse ecosystem
- `Four Steps to a Richer Experience`
- `Two Audiences, One Platform`
- `The Connected Ecosystem`
- `Trusted by Institutions`
- FAQ section
- final CTA band

Notable implementation details:

- animated phone mockups in the hero
- institution marquee rows for museum names
- shared CTA styling used across the site
- subtle image-backed section overlays on selected brown sections

### 2. 🧩 Product

File: `src/app/components/ProductPage.tsx`

Purpose:

- acts as the full product overview page
- explains individual feature areas with clear visitor or museum targeting

Main feature sections:

- AI Artifact Recognition
- Personalized Storytelling
- Interactive AR Annotations
- Geofenced Social Feed
- Virtual Museum Experiences
- Smart Recommendations
- Museum Analytics Dashboard
- Campaigns and Visibility Tools

CTA:

- `Explore What MuseoVerse Can Do`

Notable implementation details:

- feature sections alternate visual layout left/right
- each feature includes a clear impact statement
- local asset imagery is used throughout the page

### 3. 🏛️ For Museums

File: `src/app/components/ForMuseumsPage.tsx`

Purpose:

- presents the MuseoVerse partnership case for institutions
- focuses on cultural depth, engagement measurement, and operational insight

Main sections:

- museum-facing hero
- `Why Museums Choose MuseoVerse`
- `Your Museum's Intelligence Center`
- `How Partnership Works`
- final partner CTA section

Notable implementation details:

- header starts in its solid state on this route for visual consistency
- the page uses tighter section spacing than its earlier version
- partnership steps and benefit cards have been normalized for equal heights

### 4. 📱 For Visitors

File: `src/app/components/ForVisitorsPage.tsx`

Purpose:

- positions MuseoVerse as the intelligent companion app for museum-goers
- focuses on mobile discovery, accessibility, and remote exploration

Main sections:

- visitor-focused hero with app-store style badges
- `Your Museum Companion`
- `Explore Museums From Anywhere`
- `Start Your Discovery`

Notable implementation details:

- hero and CTA store buttons are tuned for both mobile and desktop layouts
- the `Start Your Discovery` buttons use a brighter CTA style with locally customized icon treatment
- visitor feature cards are normalized for equal height

### 5. ℹ️ About

File: `src/app/components/AboutPage.tsx`

Purpose:

- explains why MuseoVerse exists
- presents brand mission, values, and team story

Main sections:

- brand/about hero
- `The Challenge We Saw`
- `Our Mission` and `Our Vision`
- `What Drives Us`
- `Built by People Who Love Museums`
- `Join the Journey`

Notable implementation details:

- mission/vision and CTA sections use subtle background-image overlays
- cards in values and mission/vision sections are normalized for consistent sizing

### 6. ✉️ Contact

File: `src/app/components/ContactPage.tsx`

Purpose:

- provides the site inquiry and conversion flow
- lets users contact MuseoVerse through different inquiry modes

Inquiry modes:

- `Book a Demo`
- `Museum Partnership`
- `Visitor Inquiry`
- `General Question`

Main content:

- contact page hero
- validated inquiry form
- success state after submission
- `Get in Touch` contact card
- `Quick Answers` card

Notable implementation details:

- all required fields are validated client-side
- `Last Name` is optional across all inquiry modes
- the form includes animated success-state transitions
- the card maintains stable height when switching into the success state
- the email opens a Gmail compose flow in a new tab

Important reality:

- the form is still front-end only
- submission is simulated in local state
- no real backend, API, email service, or CRM integration is connected yet

## 📱 Responsive Design and Interaction System

This site has been actively tuned for both desktop and mobile layouts.

### 📐 Shared Responsive Patterns

- mobile menu and desktop navigation are handled by the shared layout
- CTA buttons switch between stacked and inline layouts where appropriate
- hero compositions reduce or hide secondary decorative elements on smaller screens
- cards and grids collapse cleanly from multi-column desktop layouts to single-column mobile flows
- route changes always start from the top of the destination page

### 🎞️ Shared Motion System

Motion is implemented through `motion/react` and centralized in `src/app/components/animations.tsx`.

The current motion toolkit includes:

- `PageTransition`
- `SectionReveal`
- `BlockReveal`
- `StaggerGroup`
- `StaggerItem`
- `FloatingElement`
- `MarqueeRow`

Behavioral highlights:

- route-level page enter transitions
- scroll-triggered reveal animations
- floating hero and accent elements
- moving institution marquees
- reduced-motion support through `MotionConfig reducedMotion="user"`

## 🧩 Shared Components

### `Layout.tsx`

File: `src/app/components/Layout.tsx`

Responsibilities:

- renders the shared header
- renders the shared footer
- hosts the routed `<Outlet />`
- manages mobile menu open/close state
- manages header scroll styling
- forces top-of-page scroll on route changes

Notable details:

- uses local logo assets for header and footer branding
- includes shared `Book a Demo` and `Download App` buttons
- footer navigation is mobile-aware and has been manually tuned for layout balance

### `animations.tsx`

File: `src/app/components/animations.tsx`

Purpose:

- centralizes reusable motion primitives
- keeps reveal and page-transition behavior consistent across pages

Important details:

- section and block reveals use different viewport thresholds
- reduced-motion mode disables or simplifies motion where appropriate

### `storeIcons.tsx`

File: `src/app/components/storeIcons.tsx`

Purpose:

- centralizes App Store and Google Play icon rendering
- avoids inconsistent icon usage across different pages and footer badges

Included exports:

- `AppleIcon`
- `GooglePlayIcon`
- `AppStoreBadgeContent`
- `GooglePlayBadgeContent`

### `ImageWithFallback.tsx`

File: `src/app/components/figma/ImageWithFallback.tsx`

Purpose:

- shared image rendering helper used throughout the site

## 🎨 Styling System

Global styling is composed through the files in `src/styles/`.

### `src/styles/index.css`

Loads the style pipeline:

- `fonts.css`
- `tailwind.css`
- `theme.css`

### `src/styles/fonts.css`

Loads the Google fonts used across the site:

- `Manrope`
- `Playfair Display`

### `src/styles/tailwind.css`

Contains:

- Tailwind CSS v4 import
- `@source` definition for project files
- `tw-animate-css` import

### `src/styles/theme.css`

Contains:

- CSS variable definitions
- base typography defaults
- transitions for links and buttons
- marquee animation styles
- reduced-motion fallbacks
- global `scroll-behavior`

### 🖼️ Visual Direction

The website's visual system is defined by:

- dark brown and espresso backgrounds
- parchment and ivory neutrals
- muted gold highlights
- Playfair Display for editorial headings
- Manrope for interface and body copy
- rounded cards and soft shadow treatments

## 🛠️ Tech Stack

### Core Runtime

- React 18
- React DOM 18
- React Router 7
- Vite 6
- Tailwind CSS 4

### Motion and UI

- Motion (`motion/react`)
- Lucide React
- Tailwind utility-based styling

### Included UI / Dependency Ecosystem

The repository also includes a larger generated dependency set and a library of reusable UI primitives under `src/app/components/ui/`.

This includes:

- Radix UI packages
- shadcn-style component files
- MUI packages
- Recharts
- React Hook Form
- Sonner
- Embla
- Vaul
- several additional helper packages

Important note:

- the current live routed website does not rely on all installed dependencies
- many dependencies and the `ui/` primitives are part of the generated project scaffold rather than the active marketing-site surface

## 🧭 Routing Architecture

Main app flow:

1. `src/main.tsx` mounts the application
2. `src/app/App.tsx` wraps the router in `MotionConfig`
3. `src/app/routes.tsx` defines the browser router
4. `src/app/components/Layout.tsx` renders the shell and outlet
5. routed pages render into the layout

Router type:

- `createBrowserRouter`

## 📁 Project Structure

```text
Museoverse_Web_Site/
|- src/
|  |- app/
|  |  |- App.tsx
|  |  |- routes.tsx
|  |  `- components/
|  |     |- AboutPage.tsx
|  |     |- animations.tsx
|  |     |- ContactPage.tsx
|  |     |- ForMuseumsPage.tsx
|  |     |- ForVisitorsPage.tsx
|  |     |- HomePage.tsx
|  |     |- Layout.tsx
|  |     |- ProductPage.tsx
|  |     |- storeIcons.tsx
|  |     |- figma/
|  |     |  `- ImageWithFallback.tsx
|  |     `- ui/
|  |        `- 48 generated reusable primitives
|  |- assets/
|  |  `- logos, favicon, local PNG/WebP/JPG marketing images
|  |- imports/
|  |  `- standalone generated Figma screens and SVG helper modules
|  |- styles/
|  |  |- fonts.css
|  |  |- index.css
|  |  |- tailwind.css
|  |  `- theme.css
|  |- main.tsx
|  `- vite-env.d.ts
|- .vscode/
|  `- settings.json
|- index.html
|- package.json
|- tsconfig.json
|- vite.config.ts
`- README.md
```

## 🧪 Standalone Imported Screens

The `src/imports/` folder contains generated Figma screens and helper modules that are not part of the active routed website.

Current standalone screens include:

- `Explore.tsx`
- `FeedGeneral.tsx`
- `FeedGrandEgyptianMuseumCairo.tsx`
- `LouvreMuseumDetail.tsx`
- `NewExperienceTheNightAtTheLouvre.tsx`
- `ProfilePage.tsx`
- `ResultOfTheImageModeScanning.tsx`
- `ScanningInTheImageMode.tsx`
- `Virtual.tsx`

There are also generated SVG helper modules such as:

- `svg-05pab0awyv.ts`
- `svg-12ssf8cqk7.ts`
- `svg-6kfqv9kly3.ts`
- `svg-hmmwy6ijx8.ts`
- `svg-hu7n243aom.ts`
- `svg-j4jn0z8a0b.ts`
- `svg-mfkj3028yu.ts`
- `svg-mxxi72msg6.ts`
- `svg-rmcnvmdv77.ts`
- `svg-zv95zpa4pf.ts`

Important note:

- these files are not connected to the live router
- they are best understood as generated design artifacts or future exploration screens

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

## 📜 Available Scripts

From `package.json`:

- `npm run dev` - starts the Vite development server
- `npm run build` - creates the production build

## ⚙️ TypeScript and Vite Notes

### `tsconfig.json`

Current highlights:

- `target: "ES2020"`
- `module: "ESNext"`
- `moduleResolution: "Bundler"`
- `jsx: "react-jsx"`
- `types: ["vite/client"]`

### `vite.config.ts`

Current highlights:

- uses `@vitejs/plugin-react`
- uses `@tailwindcss/vite`
- defines alias `@ -> src`
- supports raw asset imports for:
  - `*.svg`
  - `*.csv`

### `src/vite-env.d.ts`

This file includes:

- Vite client types
- support for generated `figma:asset/*` imports

## 🧼 Editor and Workspace Notes

This repo includes `.vscode/settings.json` to suppress false CSS warnings caused by Tailwind v4 syntax in editors that rely on the default CSS validator.

Current workspace settings disable:

- CSS validation
- SCSS validation
- LESS validation

This is an editor convenience only and does not affect the application output.

## 🖼️ Assets and Branding

The current website uses:

- `src/assets/favicon.ico` as the site favicon
- `src/assets/ca37ab0589456b573561e21d7ada50143220bbeb.png` for the header logo
- `src/assets/light_logo.png` for the footer logo
- multiple local hero and section background images
- several generated MuseoVerse promotional images under `src/assets/`

General note:

- the repository contains many PNG-based assets
- several of them are large and could benefit from optimization

## 🧠 Current Product Reality

The most important thing to understand about this repository is that it is a polished front-end marketing website, not yet a fully wired production web platform.

### ✅ What Is Already Real

- routed multi-page navigation
- responsive layouts across desktop and mobile
- shared header/footer shell
- page transition and scroll-reveal animations
- contact form state handling and validation
- branding, imagery, and CTA structure

### 🧪 What Is Still Local-Only or Placeholder

- contact form submission is simulated
- no backend or API integration is connected
- no CMS is connected
- App Store and Google Play links are placeholder links
- footer legal links are placeholder links
- standalone imported screens are not routed
- many installed dependencies are not essential to the live website flow

## ⚠️ Known Limitations

- there is no real form submission endpoint
- there is no analytics, CRM, or email automation integration
- the package name still reflects the original generated scaffold: `@figma/my-make-file`
- some copied/generated text content may still contain encoding artifacts in source files
- the asset set is heavier than necessary for an optimized production marketing site

## 🧭 Good Next Steps

If this website is going to move from polished prototype/marketing surface to a fully production-ready product site, the most valuable next steps would be:

1. connect the contact form to a real submission backend or email service
2. replace placeholder store and legal links with final destinations
3. optimize and compress the largest image assets
4. add analytics, SEO metadata, and social sharing metadata
5. clean up or intentionally route/remove the generated `src/imports/` screens
6. audit installed dependencies and remove packages not needed by the live site
7. add linting, formatting, and test workflows
8. fix any remaining source-text encoding artifacts

## 🏁 Summary

MuseoVerse Website is currently a refined, responsive, animated marketing site for the MuseoVerse platform with:

- 6 routed public-facing pages
- a strong museum-inspired visual system
- consistent CTA patterns
- desktop and mobile support
- reusable motion primitives
- localized contact-form validation and feedback
- extra generated design artifacts available for future use

If you are picking up this repository, the key thing to know is this:

the user-facing experience is already quite polished, but the service wiring, production integrations, and project cleanup are still the next layer of work.
