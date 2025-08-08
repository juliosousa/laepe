# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the institutional website for LAEPE (Liga Acadêmica de Enfermagem Pré‑Hospitalar e Emergência) at UFSC (Universidade Federal de Santa Catarina). It's a Next.js 14 application using TypeScript, Tailwind CSS, and Framer Motion.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server  
npm run start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## Architecture

### Technology Stack
- **Next.js 14** with App Router (not Pages Router)
- **TypeScript** with strict mode enabled
- **Tailwind CSS** for styling with custom design system
- **Framer Motion** for animations

### Project Structure
- `/app` - Next.js App Router directory
  - `/api/contact` - Contact form API endpoint
  - `layout.tsx` - Root layout with metadata and SEO
  - `page.tsx` - Homepage with all main sections
  - `/alunos` - Students page
- `/components` - Reusable React components
- `/public/assets` - Static assets (images, logos)

### Design System

Colors defined in `tailwind.config.js`:
- Primary: `#3C3483` (Purple)
- Secondary: `#3C3483` (same as primary)
- Secondary Dark: `#3B366A`
- Muted: `#7A779A`
- Foreground: `#000000`

Font: Inter (Google Fonts) with weights 300-700

### Path Aliases
- `@/*` maps to root directory (configured in tsconfig.json)

## API Routes

### Contact Form (`/api/contact`)
- POST endpoint for contact form submissions
- Validates: name (min 2 chars), email (valid format), subject (required), message (min 10 chars)
- Currently uses console.log for messages (ready for email service integration)

## Important Notes

- No test files exist in the project currently
- Security headers configured in `next.config.js`
- SEO optimized with metadata, Open Graph, Twitter cards, and JSON-LD schema
- Fully responsive design with mobile-first approach
- Accessibility features: keyboard navigation, ARIA labels, WCAG 2.1 AA contrast

## Contact Email
laepeufsc@gmail.com (configured in contact form and metadata)