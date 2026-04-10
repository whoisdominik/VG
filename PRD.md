# PRD.md — Vladimir Gonda Financial Advisor Website

**Version**: 1.0  
**Date**: April 2026  
**Owner**: Novix (novix.sk)  
**Client**: Vladimir Gonda

---

## 1. Executive Summary

Vladimir Gonda is an independent financial advisor and interim CFO operating across Europe. This website serves as his primary digital presence — a professional platform that communicates expertise, builds trust with corporate clients, and generates inbound inquiries. The design must reflect the gravitas of high-stakes financial consulting while remaining approachable and modern.

---

## 2. Goals & Success Metrics

### Primary Goals
- Establish credibility and authority in financial advisory
- Convert visitors into qualified leads (contact form / email inquiries)
- Present the full scope of Vladimir's services clearly

### Success Metrics
- Avg. time on site > 2 minutes
- Contact form conversion rate > 3%
- Bounce rate < 50% on service pages
- Mobile usability score > 90 (Google Lighthouse)

---

## 3. Target Audience

| Segment | Description |
|---|---|
| Corporate executives | CEOs/CFOs seeking interim financial leadership |
| SME owners | Businesses needing restructuring or ERP guidance |
| Legal/compliance teams | Companies requiring audit or fraud investigation support |
| International businesses | Firms expanding into new European markets |

**Geographic focus**: EU/EEA markets, primarily CEE (Central & Eastern Europe)

---

## 4. Pages & Information Architecture

### 4.1 Home (`/`)
The landing experience. Split hero layout with credentials and video.

**Hero — Left Side**
- Vladimir's full name in large, elegant typography
- Subtitle: "Financial Advisor & Interim CFO"
- 6 floating credential bubbles in an orbital layout:
  - 🌍 Relocation Flexible
  - 🏦 Temporary CFO · 4 Countries
  - 🗣 5 Languages
  - ✅ 400+ European Audits Done
  - 🎓 MBA / BSc.
  - ⏱ 25+ Years Experience
- Bubbles animate in with staggered entrance; gentle float animation on loop

**Hero — Right Side**
- Vladimir's self-introduction video (mp4, self-hosted)
- Label: "Meet Vladimir" with gold accent
- Custom-styled video player controls

**Below Hero**
- Brief "About" paragraph (2–3 sentences)
- Services overview grid (6 cards, one per service page)
- CTA: "Ready to talk? Get in touch"

---

### 4.2 Financial Strategy (`/financial-strategy`)

**Purpose**: Showcase competency in developing financial strategies for businesses.

**Content**:
- Service overview: long-term financial planning, budgeting frameworks, performance benchmarking
- Key deliverables: financial roadmaps, KPI frameworks, capital allocation strategies
- Who this is for: growth-stage companies, companies preparing for investment/exit
- Process: Discovery → Analysis → Strategy → Implementation Support
- CTA: "Book a strategy consultation"

---

### 4.3 Restructuring & Joint Ventures (`/restructuring`)

**Purpose**: Address companies facing financial distress or M&A activity.

**Content**:
- Debt restructuring, operational cost reduction, turnaround management
- Joint venture setup, partnership structuring, shareholder agreements
- Experience across multiple European jurisdictions
- Process: Financial health assessment → Restructuring plan → Execution oversight
- CTA: "Discuss your restructuring needs"

---

### 4.4 Compliance & Audits (`/compliance-audits`)

**Purpose**: Position Vladimir as a trusted audit and compliance expert with a strong track record.

**Content**:
- 400+ European audits completed
- Regulatory compliance across EU frameworks (IFRS, local GAAP)
- Internal audit preparation, external audit support
- Compliance gap analysis, remediation planning
- CTA: "Request a compliance review"

---

### 4.5 Transaction Fraud (`/transaction-fraud`)

**Purpose**: Offer specialized fraud investigation and prevention services.

**Content**:
- Detection of fraudulent transactions, financial statement manipulation
- Forensic financial analysis
- Risk exposure assessment
- Cooperation with legal teams and regulators
- Who this is for: Companies that suspect fraud; legal counsel needing financial expert support
- CTA: "Contact for confidential consultation"

---

### 4.6 ERP / SAD Integration (`/erp-sad-integration`)

**Purpose**: Highlight technical-financial expertise in enterprise system integration.

**Content**:
- ERP system implementation oversight (SAP, Oracle, Microsoft Dynamics)
- SAD (Single Administrative Document) process integration for customs/trade
- Finance function alignment during ERP transitions
- Change management support
- CTA: "Talk to us about your ERP project"

---

### 4.7 Cybercrime Risk (`/cybercrime-risk`)

**Purpose**: Address growing corporate concern around financial cybercrime.

**Content**:
- Financial risk assessment related to cyberattacks
- Business continuity planning from a CFO perspective
- Incident response: financial impact containment
- Liaison with IT security teams on financial exposure
- CTA: "Assess your cybercrime financial risk"

---

### 4.8 Projects Integration (`/projects-integration`)

**Purpose**: Showcase cross-functional project management and financial oversight.

**Content**:
- Financial oversight across multi-stakeholder projects
- Budget control, milestone-based financial reporting
- International project experience across 4+ countries
- PMO support from a financial perspective
- CTA: "Explore project collaboration"

---

## 5. Design Requirements

### 5.1 Visual Identity

| Element | Specification |
|---|---|
| Logo | Text-based initials "VG" in serif display font, gold color |
| Primary palette | Near-black background, warm white text, gold accent |
| Typography | Cormorant Garamond (display) + DM Sans (body) |
| Tone | Authoritative, refined, trustworthy — not cold or corporate |
| Aesthetic | Dark luxury editorial — think private banking, not fintech startup |

### 5.2 Layout
- Full-width sections, generous whitespace
- Split hero: 50/50 on desktop, stacked on mobile
- Service cards with subtle hover effects and gold accent borders
- No carousels or sliders — static, confident layouts

### 5.3 Interactions & Animation
- Hero bubbles: staggered fade-in on load + gentle float loop
- Page transitions: subtle fade
- Scroll-triggered reveals on service sections
- All animations must respect `prefers-reduced-motion`

---

## 6. Navigation

**Primary Nav** (desktop: horizontal, mobile: hamburger):
- Logo (VG) → Home
- Financial Strategy
- Restructuring
- Compliance & Audits
- Transaction Fraud
- ERP / SAD Integration
- Cybercrime Risk
- Projects Integration
- **CTA Button**: "Get in Touch" (gold, outlined)

**Footer**:
- Logo + tagline
- Quick links (all pages)
- Contact email
- LinkedIn link (placeholder)
- Copyright line

---

## 7. Contact & Lead Capture

- Contact page or modal (accessible via "Get in Touch" CTA)
- Fields: Name, Company, Email, Service of interest (dropdown), Message
- No phone number field (optional, discussed with client)
- GDPR-compliant consent checkbox
- On submit: email notification to Vladimir's email address

---

## 8. Technical Requirements

| Requirement | Detail |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Video | Self-hosted mp4 in `/public/video/` |
| Hosting | Vercel |
| Performance | Lighthouse score > 90 on all categories |
| SEO | Meta tags, OG tags, structured data (Person schema) |
| Analytics | Google Analytics 4 or Plausible (privacy-first) |
| Language | English (primary); multilingual support considered for v2 |
| Accessibility | WCAG 2.1 AA |
| Domain | TBD (likely vladimgonda.com or similar) |

---

## 9. Content To Be Provided by Client

- [ ] Professional headshot (hi-res)
- [ ] Self-introduction video (mp4, ideally 1–2 min)
- [ ] Bio / About text
- [ ] Per-service descriptions / key talking points
- [ ] LinkedIn profile URL
- [ ] Contact email address
- [ ] Preferred domain name
- [ ] Any existing branding materials

---

## 10. Out of Scope (v1)

- Blog / articles section
- Client portal or login
- Multilingual content (v2 consideration)
- CRM integration (v2)
- Calendar booking integration (v2)

---

## 11. Timeline (Estimate)

| Phase | Description | Duration |
|---|---|---|
| 1 — Setup | Project scaffold, design tokens, layout shell | 1 day |
| 2 — Home | Hero (bubbles + video), service grid, CTA | 2 days |
| 3 — Service Pages | 7 pages using shared template | 2 days |
| 4 — Contact | Form, validation, email integration | 1 day |
| 5 — Polish | Animations, mobile QA, SEO, Lighthouse | 1–2 days |
| 6 — Deploy | Vercel setup, domain, final review | 1 day |

**Total estimate**: ~8–9 working days

---

## 12. Open Questions

1. Does Vladimir have an existing video, or does it need to be recorded?
2. Preferred contact method: email only or include phone?
3. Should the site be in English only, or also Slovak/Czech?
4. Does "VG" logo need to incorporate any graphic element, or strictly typographic?
5. Any existing clients/logos to display as social proof (with permission)?
