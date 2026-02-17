# Trinity Painting & Renewal - Premium Website

A luxurious, faith-focused painting service website built with Next.js 16, featuring a premium black, white, and gold color scheme with liquid glass effects.

## 🎨 Design System

### Color Palette
- **Primary Black**: `#1C1917` (Rich Black - stone-900)
- **Secondary Gold**: `#CA8A04` (Pure Gold - yellow-600)
- **Accent Gold**: `#EAB308` (Bright Gold - yellow-500)
- **Background**: `#FAFAF9` (Soft White - stone-50)
- **Text**: `#0C0A09` (Deep Black - stone-950)

### Typography
- **Headings**: Bodoni Moda (Serif) - Luxury, sophisticated
- **Body**: Jost (Sans-serif) - Clean, modern, readable

### Design Style
**Liquid Glass** - Premium aesthetic featuring:
- Flowing glass morphing effects
- Smooth transitions (400-600ms curves)
- Fluid animations with spring physics
- Translucent overlays with backdrop blur
- Iridescent gold accents
- Chromatic depth

## ✨ Key Features

### Premium Components
1. **Hero Section**
   - Full-screen cinematic experience
   - Liquid glass content container
   - Animated parallax background
   - Gold accent lines
   - Morphing animations

2. **Floating Navbar**
   - Glassmorphism with 20px blur
   - Adaptive color scheme (scrolled/unscrolled)
   - Smooth spring animations
   - Mobile-optimized menu

3. **Trinity Seal**
   - Premium promise cards
   - Hover micro-interactions
   - Icon animations with rotation
   - Liquid glass card effects

4. **Services Preview**
   - Image zoom on hover
   - Gold overlay transitions
   - Staggered entrance animations
   - Fluid spring physics

### Animations
- **Entrance**: Staggered fade-in with spring easing
- **Hover**: Scale, translate, and color transitions
- **Scroll**: Parallax and reveal effects
- **Micro-interactions**: Icon rotations, button shimmers

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Design system & utilities
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── about/
│       └── page.tsx          # About page
├── components/
│   ├── Navbar.tsx            # Floating glass navbar
│   ├── Hero.tsx              # Cinematic hero section
│   ├── TrustBar.tsx          # Trust indicators
│   ├── Introduction.tsx      # About preview
│   ├── ServicesPreview.tsx   # Services grid
│   ├── TrinitySeal.tsx       # Promise cards
│   └── Footer.tsx            # Site footer
└── public/
    └── images/               # 126 gallery images
```

## 🎯 Design Principles

### UI/UX Pro Max Guidelines Applied
✅ **Accessibility**
- 4.5:1 color contrast ratio
- Keyboard navigation support
- Focus states on interactive elements
- Semantic HTML structure

✅ **Performance**
- WebP image optimization
- Lazy loading for images
- Reduced motion support
- Transform-based animations

✅ **Interaction**
- 44x44px minimum touch targets
- Cursor pointer on clickable elements
- Loading states for async operations
- Clear error feedback

✅ **Premium Aesthetics**
- No emoji icons (SVG only - Lucide React)
- Consistent icon sizing
- Smooth transitions (150-600ms)
- Liquid glass effects
- Gold accent highlights

## 🛠 Technology Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS with CSS Variables
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Bodoni Moda, Jost)

## 📱 Responsive Breakpoints

- **Mobile**: 375px
- **Tablet**: 768px
- **Desktop**: 1024px
- **Large Desktop**: 1440px

## 🎨 CSS Utilities

### Glass Effects
```css
.glass          /* Light mode glass */
.glass-dark     /* Dark mode glass */
```

### Buttons
```css
.btn-primary    /* Gold gradient button with shimmer */
.btn-secondary  /* Outlined button with fill animation */
```

### Layout
```css
.container      /* Max-width 1400px, centered */
.section-padding /* 8rem vertical padding */
```

## 🔧 Configuration

### Next.js Config
- TypeScript strict mode enabled
- Path aliases: `@/*` → `./src/*`
- Image optimization enabled

### Design System Persistence
Design system saved in `design-system/trinity-painting/MASTER.md`

## 📝 To-Do

- [ ] Replace placeholder phone number: `(XXX) XXX-XXXX`
- [ ] Replace placeholder year: `[YEAR]`
- [ ] Add Services detail pages
- [ ] Build Portfolio gallery
- [ ] Create Quote/Contact form
- [ ] Add FAQ page
- [ ] Implement Reviews page

## 🌟 Premium Features

- **Liquid Glass Morphing**: Advanced backdrop filters with saturation
- **Fluid Animations**: Custom cubic-bezier curves for organic motion
- **Gold Shimmer Effects**: Gradient overlays with pseudo-element animations
- **Parallax Scrolling**: Subtle background movement
- **Micro-interactions**: Icon rotations, button shimmers, card lifts
- **Responsive Typography**: Fluid scaling across breakpoints

## 📄 License

© 2025 Trinity Painting & Renewal. All rights reserved.

---

**Built with faith, designed with excellence.**
