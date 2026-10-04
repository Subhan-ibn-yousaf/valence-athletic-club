# VALENCE ATHLETIC CLUB

A modern, high-contrast fitness and gym website inspired by dark luxury athletic design aesthetics, featuring original brand identity, cinematic imagery, high-performance typography, and conversion-engineered flows.

---

## 🏋️‍♂️ Brand Overview

- **Brand Name**: Valence Athletic Club
- **Motto / Tagline**: Built for Uncompromising Performance
- **Aesthetic**: Deep obsidian/charcoal surfaces (`#05090D`, `#0B1218`), high-voltage fitness crimson (`#F5223A`), crisp white typography, and alternating light/dark section rhythm.

---

## 🚀 Key Features

1. **Sticky Adaptive Navigation**:
   - Fixed header with progressive blur on scroll, active section indicator, and responsive mobile slide-out drawer.
2. **Cinematic Hero**:
   - High-impact athletic imagery with red rim-lighting, conversion-engineered headline, dual CTAs, "Watch Our Story" video showcase, and 4-benefit feature strip.
3. **5 Distinct Training Disciplines**:
   - Strength & Hypertrophy, HIIT & Conditioning, Yoga & Mobility, Boxing & Combat Dynamics, and 1-on-1 Performance Coaching.
   - Interactive modal inspection with full curriculum and direct session booking.
4. **Interactive Training Architect**:
   - Goal-based split recommendation engine matching members to their ideal weekly periodization and designated head coach.
5. **Dynamic 4-Tier Pricing**:
   - Starter, Performance (Featured with glowing red border), Elite, and Flex Pass.
   - Functional Monthly vs Annual toggle with automated 20% discount calculations.
6. **Coach Faculty Showcase**:
   - Portfolios for 4 certified master coaches with credentials, specialties, social verification links, and private booking triggers.
7. **Social Proof & Testimonials**:
   - Measurable member transformations with star ratings, quotes, and responsive navigation.
8. **Interactive Booking Modal**:
   - Real-time client-side validation, preferred training slot picker, and instant VIP digital pass generation (`#VAL-9842`).
9. **Functional Newsletter Dispatch**:
   - Frontend email format validation, loading state spinner, and positive confirmation state.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4 (with custom `@theme` configuration)
- **Icons**: Lucide React
- **Hosting Target**: Hostinger Static Web Hosting / Apache / Nginx / Vercel / Cloudflare Pages

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` to view the app.

### 3. Production Build
```bash
npm run build
```
This generates the optimized static assets into the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Hostinger Deployment Guide

Deploying this website to **Hostinger** is seamless because it compiles into clean, static HTML/CSS/JS files:

1. **Build the Project**:
   ```bash
   npm run build
   ```
2. **Locate the Output**:
   - Your build files are in the `dist/` directory (includes `index.html`, `assets/`, etc.).
3. **Upload to Hostinger**:
   - Log into your **Hostinger hPanel**.
   - Navigate to **Files** -> **File Manager** (or use FTP / FileZilla).
   - Open your domain's public directory: `public_html/`.
   - Upload all the contents inside your local `dist/` folder directly into `public_html/` (so `index.html` sits at the root of `public_html`).
4. **SPA / Routing Configuration (.htaccess)**:
   - If using Hostinger Apache hosting, create an `.htaccess` file inside `public_html/` if you add client routes:
     ```apache
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```
5. **Verify**:
   - Visit your Hostinger domain. The website will load with full assets, smooth animations, and zero server-side dependencies.

---

## 🎨 Customization Guide

### Updating Imagery & Photography
All photography references are organized centrally in `src/data/gymData.ts`:
- `HERO_IMAGE`: Hero background athlete image
- `ABOUT_IMAGE`: Experience split section image
- `FACILITY_IMAGE`: Facility architecture background image
- `CTA_IMAGE`: Final call to action athlete image
- `PROGRAMS[n].image`: Specific images for each training card
- `COACHES[n].image`: Portrait photos for coaches

### Updating Brand Name, Pricing & Text
- Open `src/data/gymData.ts` to edit:
  - `BRAND_NAME` and `BRAND_SUBTITLE`
  - `PRICING_PLANS` (adjust prices, features, or add tiers)
  - `PROGRAMS` (adjust descriptions, duration, or intensity)
  - `COACHES` (update bios, certifications, or names)
  - `TESTIMONIALS` (add or edit member quotes)
  - `FAQS` (update questions and answers)

### Updating Color Scheme
In `src/index.css`, customize the CSS variables under `@theme`:
- `--color-brand-red`: `#F5223A` (primary accent)
- `--color-brand-red-dark`: `#D4142B` (hover accent)
- `--color-dark-bg`: `#05090D` (main canvas)
- `--color-dark-surface`: `#0B1218` (card surfaces)
