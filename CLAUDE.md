# CLAUDE.md — Vladimir Gonda Financial Advisor Website

This file provides context, conventions, and instructions for AI-assisted development of this project.

---

## Project Summary

A premium personal branding website for **Vladimir Gonda**, senior financial advisor and interim CFO consultant with 25+ years of European experience. Built by **Novix Digital Agency** (novix.sk).

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS v3 + CSS custom properties |
| Animations | Framer Motion |
| Language | TypeScript |
| Fonts | Google Fonts — Cormorant Garamond, DM Sans |
| Icons | Lucide React |
| Deployment | Vercel |

---

## Project Structure

```
/
├── app/
│   ├── layout.tsx                  # Root layout with nav + footer
│   ├── page.tsx                    # Home page
│   ├── financial-strategy/
│   │   └── page.tsx
│   ├── restructuring-joint-ventures/
│   │   └── page.tsx
│   ├── compliance-audits/
│   │   └── page.tsx
│   ├── transaction-fraud/
│   │   └── page.tsx
│   ├── erp-sad-integration/
│   │   └── page.tsx
│   ├── cybercrime-risk/
│   │   └── page.tsx
│   └── projects-integration/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              # Sticky nav, transparent → dark on scroll
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroLeft.tsx            # Name + floating bubbles panel
│   │   ├── HeroRight.tsx           # Video panel
│   │   ├── ServicesGrid.tsx        # 6-card service overview
│   │   └── CtaSection.tsx
│   └── ui/
│       ├── ServiceCard.tsx
│       ├── Bubble.tsx              # Floating stat bubble component
│       └── Button.tsx
├── lib/
│   └── services.ts                 # Service page metadata and content
├── public/
│   ├── video/                      # Vladimir's intro video (provided by client)
│   └── images/
├── styles/
│   └── globals.css                 # CSS custom properties / design tokens
└── CLAUDE.md                       # This file
```

---

## Design System

### Color Tokens (defined in `globals.css`)

```css
:root {
  --color-bg: #0A0E1A;
  --color-surface: #111827;
  --color-border: #1E2A3A;
  --color-accent: #C9973A;
  --color-accent-light: #E8B96A;
  --color-text-primary: #F0EDE8;
  --color-text-secondary: #8A9AAF;
}
```

### Typography

- **Display/Headings:** `Cormorant Garamond` — use for Vladimir's name, page titles, section headings
- **Body/UI:** `DM Sans` — use for body copy, navigation, labels, bubbles
- Never use Inter, Roboto, Arial, or system-ui as primary fonts

### Key Design Rules
- Dark background (`#0A0E1A`) is the base everywhere
- Gold (`#C9973A`) is used sparingly — CTAs, active states, bubble borders, accent lines
- Sections breathe: use generous vertical padding (min `120px`)
- Cards use `--color-surface` with a subtle `1px` gold top border on hover
- All animations should feel **slow and deliberate** — this is a premium financial brand, not a SaaS startup

---

## Homepage Hero Architecture

The hero is a **full-viewport split layout**:

```
┌─────────────────────┬─────────────────────┐
│                     │                     │
│   LEFT PANEL        │   RIGHT PANEL       │
│   (50% width)       │   (50% width)       │
│                     │                     │
│   Dark bg           │   Slightly lighter  │
│                     │   or textured       │
│   Center:           │                     │
│   "Vladimir Gonda"  │   Video player      │
│   + subtitle        │   (HTML5 or embed)  │
│                     │                     │
│   6 floating        │                     │
│   bubbles orbit     │                     │
│   or scatter        │                     │
│   around the name   │                     │
│                     │                     │
└─────────────────────┴─────────────────────┘
```

### Bubble Content (6 items)
1. `Relocation Flexible`
2. `Temporary CFO / 4 Countries`
3. `5 Languages`
4. `400+ European Audits Done`
5. `MBA / BSc.`
6. `25+ Years Experience`

### Bubble Component Spec
- Pill shape, `border: 1px solid var(--color-accent)`
- Background: `rgba(201, 151, 58, 0.08)` (subtle gold tint)
- Text: `DM Sans`, `500` weight, small caps or uppercase with letter-spacing
- Animation: gentle float using CSS `@keyframes` or Framer Motion `animate`
- On hover: `scale(1.05)` + glow via `box-shadow`
- Staggered entrance animation on page load

---

## Navigation

```tsx
// Navbar behavior
- Logo: "VG" initials, Cormorant Garamond, gold color
- Links: Financial Strategy | Restructuring & JV | Compliance & Audits | 
         Transaction Fraud | ERP/SAD Integration | Cybercrime Risk | Projects Integration
- CTA: "Get in Touch" button (gold, right-aligned)
- Scroll behavior: transparent at top → dark surface + border-bottom on scroll
- Mobile: hamburger menu → full-screen overlay
```

---

## Service Pages

Each service page follows this template structure:

```tsx
<ServicePageLayout>
  <ServiceHero title="..." subtitle="..." />
  <ServiceBody>
    {/* 3–5 content sections with headings */}
  </ServiceBody>
  <ServiceCTA />
</ServicePageLayout>
```

Page routes and their corresponding service names:

| Route | Title |
|---|---|
| `/financial-strategy` | Financial Strategy |
| `/restructuring-joint-ventures` | Restructuring & Joint Ventures |
| `/compliance-audits` | Compliance & Audits |
| `/transaction-fraud` | Transaction Fraud |
| `/erp-sad-integration` | ERP / SAD Integration |
| `/cybercrime-risk` | Cybercrime Risk |
| `/projects-integration` | Projects Integration |

Service metadata lives in `lib/services.ts` — edit content there, not in page files directly.

---

## Content Placeholders

Until client provides final content, use these placeholders:

- **Video:** Use a `<div>` placeholder with aspect ratio `16/9`, dark surface background, gold play icon centered, and text: `"Vladimir Gonda — Introduction Video (Coming Soon)"`
- **Images:** Use dark placeholder with VG monogram centered
- **Service copy:** Use realistic placeholder text in the financial advisory domain (not Lorem Ipsum)

---

## Coding Conventions

### TypeScript
- All components typed with explicit interfaces — no `any`
- Props interfaces defined above the component
- Use `type` for unions/primitives, `interface` for component props

### Components
- One component per file
- Filename = component name (PascalCase)
- Keep components small — split at ~80 lines
- No inline styles; use Tailwind classes + CSS custom properties

### Animations (Framer Motion)
```tsx
// Preferred pattern for entrance animations
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

<motion.div
  initial="hidden"
  animate="visible"
  variants={variants}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>
```

### CSS Custom Properties
- Always use `var(--color-*)` tokens instead of hardcoded hex values in Tailwind's arbitrary values
- Tailwind config should extend with these tokens so classes like `text-accent` work

---

## SEO

Each page must include:
```tsx
export const metadata: Metadata = {
  title: "Vladimir Gonda | [Page Title]",
  description: "...",
  openGraph: {
    title: "Vladimir Gonda | [Page Title]",
    description: "...",
    type: "website",
  }
}
```

Root layout includes:
- `Person` schema (JSON-LD) for Vladimir
- Canonical URL
- Favicon (VG monogram)

---

## Do's and Don'ts for Claude

### Do
- Keep the design **premium and restrained** — less is more
- Use `Cormorant Garamond` for all display text
- Animate with **ease and elegance**, not speed
- Reference `lib/services.ts` for all service content
- Keep components focused and small

### Don't
- Don't use purple gradients, neon colors, or startup-style aesthetics
- Don't use Inter, Roboto, or system fonts as primary typefaces
- Don't add unnecessary dependencies — keep the bundle lean
- Don't hardcode copy inside page/layout files — use the content layer
- Don't add a blog, CMS, or auth — those are v2 scope

---

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Type check
npm run type-check

# Lint
npm run lint
```

---

## Contact / Ownership

- **Client:** Vladimir Gonda
- **Agency:** Novix Digital (novix.sk / novix.digital)
- **Project type:** Static / SSG with minimal dynamic features
