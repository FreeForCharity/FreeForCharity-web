# Free For Charity Web Application

Free For Charity is a Next.js 15.5.2 static website that connects students, professionals, and businesses with nonprofits to reduce operating costs and increase impact. Built with TypeScript, Tailwind CSS, and configured for static export to GitHub Pages.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Environment Setup
- **Node.js Version**: Requires Node.js 20.x (validated with v20.19.4)
- **Package Manager**: Uses npm with package-lock.json

### Bootstrap and Build Process
**CRITICAL: Google Fonts Network Limitation**
- `npm run build` -- **FAILS** due to network restrictions accessing fonts.googleapis.com
- **Workaround**: Comment out Google Font imports in `src/app/layout.tsx` before building:
  ```typescript
  // import { Faustina, Fauna_One, Lato, Inter } from "next/font/google";
  // Comment out font variable declarations and body className usage
  ```
- Build takes ~20 seconds when fonts are disabled. NEVER CANCEL. Set timeout to 180+ seconds (includes retry time for font failures).

### Core Commands and Timings
1. `npm install` -- takes ~17 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
2. `npm run lint` -- takes ~2 seconds. Produces warnings about img tags (expected). Set timeout to 30+ seconds.
3. `npm run build` -- **FAILS with Google Fonts**. Takes ~20 seconds when fonts disabled. NEVER CANCEL. Set timeout to 180+ seconds.
4. `npm run dev` -- starts in ~1 second with turbopack. NEVER CANCEL. Set timeout to 30+ seconds.
5. `npm run preview` -- serves built static files. NEVER CANCEL. Set timeout to 30+ seconds.

### Development Workflow
```bash
# Install dependencies (17 seconds)
npm install

# Start development server (1 second startup)
npm run dev
# Visit http://localhost:3000

# Lint code (2 seconds, warnings expected)
npm run lint

# Build for production (REQUIRES font workaround)
npm run build

# Preview built site
npm run preview
# Visit http://localhost:3000
```

## Validation Requirements

### Manual Testing Scenarios
**ALWAYS test application functionality after making changes:**

1. **Homepage Load Test**: Navigate to http://localhost:3000 and verify page loads completely
2. **Navigation Test**: Test mobile hamburger menu and desktop navigation
3. **Popup System Test**: Click "Donate" and "Volunteer" buttons to test global popup functionality
4. **Responsive Design Test**: Verify mobile and desktop layouts work correctly
5. **Static Content Test**: Verify all sections load (Programs, Impact, Team, FAQ)

### Pre-Commit Validation
**ALWAYS run before committing changes:**
```bash
npm run lint  # Fix any errors, warnings about img tags are expected
```

**Note**: No test suite exists - validation is entirely manual through browser testing.

## Application Architecture

### Key Features
- **Global Popup System**: Centralized Donate/Volunteer modals accessible from any component
  - Provider: `src/app/components/PopupProvider.tsx`
  - Mount: `src/app/components/PopupsRootClient.tsx`
  - Buttons: `DonateButton.tsx`, `VolunteerButton.tsx`
- **Mobile Navigation**: Slide-out panel with overlay in `NavBar.tsx`
- **Static Export**: Configured for GitHub Pages deployment via `next.config.ts`
- **SEO Optimized**: Comprehensive metadata in `layout.tsx`, sitemap, and robots.txt

### Project Structure
```
src/app/
├── page.tsx              # Homepage content
├── layout.tsx            # Root layout with fonts (problematic), metadata, providers
├── globals.css           # Global styles
├── components/           # All UI components
│   ├── PopupProvider.tsx # Global popup state management
│   ├── NavBar.tsx       # Navigation with mobile menu
│   ├── DonateButton.tsx # Donation popup trigger
│   ├── VolunteerButton.tsx # Volunteer popup trigger
│   └── [other components]
├── data/                 # Static content
│   ├── faqs.ts          # FAQ data
│   ├── team.ts          # Team member data
│   └── testimonials.ts  # Testimonial data
└── sitemap.ts           # SEO sitemap generation
```

### Configuration Files
- `next.config.ts` - Static export configuration
- `tsconfig.json` - TypeScript configuration with path aliases
- `eslint.config.mjs` - ESLint with Next.js rules
- `postcss.config.mjs` - Tailwind CSS PostCSS configuration
- `.github/workflows/nextjs.yml` - GitHub Pages deployment

## Common Tasks

### Content Updates
- **Homepage content**: Edit `src/app/page.tsx`
- **Navigation links**: Update `src/app/components/NavBar.tsx`
- **Team information**: Modify `src/app/data/team.ts`
- **FAQ content**: Update `src/app/data/faqs.ts`
- **Testimonials**: Edit `src/app/data/testimonials.ts`

### SEO and Metadata
- **Site metadata**: Edit `metadata` object in `src/app/layout.tsx`
- **Sitemap**: Update `src/app/sitemap.ts` for new routes
- **Robots.txt**: Modify `src/app/robots.ts`

### Styling and UI
- **Global styles**: Edit `src/app/globals.css`
- **Component styles**: Use Tailwind classes directly in components
- **Font issues**: Remember to handle Google Fonts limitation when building

### Deployment Process
The site auto-deploys to GitHub Pages via `.github/workflows/nextjs.yml` when pushed to main branch:
1. Node.js 20 setup
2. `npm ci` for clean install
3. `next build` (may fail on Google Fonts in restricted environments)
4. Static files deployed from `./out` directory

## Known Issues and Limitations

### Google Fonts Build Failure
- **Issue**: `npm run build` fails with "ENOTFOUND fonts.googleapis.com"
- **Cause**: Network restrictions prevent Google Fonts access
- **Workaround**: Temporarily comment out font imports in `src/app/layout.tsx`
- **Files affected**: Lines 2, 9-12, 73 in `src/app/layout.tsx`

### ESLint Warnings
- **Expected warnings**: `@next/next/no-img-element` in `NavBar.tsx` and `page.tsx`
- **Cause**: Using `<img>` instead of Next.js `<Image>` component
- **Status**: Acceptable for static export configuration

### No Test Suite
- **No automated tests available**
- **Validation is entirely manual through browser testing**
- **Always test core functionality manually after changes**

## Quick Reference Commands

```bash
# Repository setup
node --version        # Verify Node.js 20.x
npm install          # 17 seconds

# Development
npm run dev          # http://localhost:3000 (1 second startup)
npm run lint         # 2 seconds, warnings expected

# Production (requires font workaround)
npm run build        # 20 seconds when fonts disabled
npm run preview      # http://localhost:3000

# File structure overview
ls -la src/app/      # Main application code
ls -la public/       # Static assets (icons, images)
ls -la .github/      # GitHub workflows and configs
```

## Troubleshooting

### Build Failures
1. **Google Fonts error**: Apply font workaround in `layout.tsx`
2. **TypeScript errors**: Run `npm run lint` to identify issues
3. **Network timeouts**: Increase timeout values as specified above

### Development Server Issues
1. **Port conflicts**: Stop existing servers or use different port
2. **Cache issues**: Delete `.next` directory and rebuild
3. **Font rendering**: Expected to fail without workaround applied

Remember: **NEVER CANCEL** long-running commands. **ALWAYS** test manually after changes. **ALWAYS** apply Google Fonts workaround before building.