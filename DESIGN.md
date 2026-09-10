---
name: Terminal Slate
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#56e5a9'
  on-tertiary: '#003824'
  tertiary-container: '#30c88f'
  on-tertiary-container: '#004e34'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 21px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0em
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  label-caption:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.25rem
  space-xl: 1.5rem
  space-2xl: 2rem
  space-3xl: 2.5rem
  gutter-mobile: 1rem
  margin-mobile: 1rem
  card-pad-mobile: 0.875rem
---

## Brand & Style

This design system embodies the ethos of an engineering workshop: deliberate, pragmatic, and unpretentious. Built specifically for an aspiring Computer Science Engineering student seeking technical internships, the visual language prioritizes verifiable competence over marketing sheen. The aesthetic references architectural blueprints, technical documentation, and terminal interfaces.

### Core Tenets
- **Clarity over Flourish:** Zero decorative blob vectors, zero frosted glass blurs, and no generic marketing gradients. Form serves scannability.
- **Architectural Rigor:** Dense, compact information layouts built on explicit 1px hairline boundaries, modular surface strata, and strict alignment.
- **Developer Utilitarianism:** Monospaced metadata for technical specifications, git commit-style date stamping, and precise mechanical labels.

The target audience consists of engineering managers, technical recruiters, and senior software engineers who evaluate portfolios on mobile devices during commutes or brief breaks. Every layout decision optimizes for rapid technical assessment within 10 to 30 seconds.

## Colors

The palette uses a high-contrast dark foundation reminiscent of low-distraction IDE environments and hardware terminals. Contrast ratios rigorously surpass WCAG 2.1 AAA standards for text legibility.

### Surface Hierarchy
- **Canvas Base:** `#0F172A` (Slate 900) — Deep, solid backdrop preventing eye fatigue.
- **Surface Elevation 1 (Cards, Modules):** `#1E293B` (Slate 800) — Deliberate structural elevation with zero transparency.
- **Surface Elevation 2 (Interactive, Nested Chips):** `#0F172A` / `#334155` (Slate 700) — Used for nested meta blocks and hover states.
- **Hairline Borders:** `#334155` (Slate 700) — 1px crisp separation framing every structural module.

### Foreground Hierarchy
- **Primary Ink:** `#F8FAFC` (Slate 50) — High-impact, crisp legibility for titles, metrics, and primary values.
- **Secondary Ink:** `#94A3B8` (Slate 400) — Neutral, utilitarian tone for body descriptions, contextual notes, and labels.
- **Tertiary/Muted Ink:** `#64748B` (Slate 500) — Monospace dates, commit hashes, and file extensions.

### Accents & Signifiers
- **Terminal Cyan (Primary Accent):** `#38BDF8` — Direct interactive targets, link arrows, active focus rings, and code execution indicators.
- **Electric Blueprint (Secondary Accent):** `#06B6D4` — Secondary tags, system status tags, and architectural category markers.
- **Compiler Green (Tertiary/Success):** `#10B981` — Availability status ("Open for Summer Internships") and passing build indicators.

## Typography

Typography establishes an unambiguous dichotomy: structural narrative is rendered in proportional, robust grotesque fonts, while technical metadata is strictly monospaced.

### Type Hierarchy Breakdown
- **Space Grotesk (Headlines):** Imparts an engineered, early-computing structural aesthetic without lapsing into retro parody. Features a sturdy x-height and tight tracking (`-0.02em` to `-0.03em`) to keep mobile headings compact and impactful.
- **Inter (Body Text):** Selected for industry-standard legibility on high-DPI smartphone screens. Set at comfortable line-height ratios (1.5x to 1.6x) with zero decorative ligatures.
- **JetBrains Mono (Metadata & Code):** Formally applied to tech stacks, dates, metrics, repository paths, and directory breadcrumbs. Characters like `0`, `O`, `1`, `l`, and `I` are instantly distinguishable.

## Layout & Spacing

The layout operates on a strict 8px baseline rhythm with 4px sub-increments for compact badges and metadata rows.

### Mobile Grid Principles (360px - 428px Target)
- **Single-Column Stacking:** All primary modules (Project, Education, Skills) stack vertically in a linear flow. Horizontal multi-column layouts are prohibited on phone viewports to prevent cramped truncation.
- **Dense Data Grouping:** Related items (e.g., project name, commit count, live status badge) sit inside shared headers separated by minimal spacing (`0.5rem`).
- **Edge Containment:** Global horizontal margins are anchored to `1rem` (16px). Cards utilize full available horizontal width with internal inset padding of `0.875rem` (14px) to maximize content area.
- **Breakpoints:**
  - `sm` (Default/Mobile): `360px` – `640px` (Single column, sticky navigation footers, stacked actions).
  - `md` (Tablet): `641px` – `1024px` (Two-column layout for project listings, persistent sidebar navigation).
  - `lg` (Desktop): `1025px+` (Max-width `896px` centered container preserving the architectural terminal feel).

## Elevation & Depth

This design system strictly rejects skeuomorphic shadows, ambient blurs, and glassmorphism. Depth is engineered exclusively through **tonal layering** and **hairline boundaries**.

### The Layering Architecture
- **Layer 0 (Canvas):** `#0F172A`. Base layer containing section labels and structural boundaries.
- **Layer 1 (Modular Panels & Cards):** `#1E293B` surrounded by a continuous `1px solid #334155` border. This distinguishes components cleanly from the canvas without diffuse shadow halos.
- **Layer 2 (Interactive Surfaces & Controls):** Tonal shifts to `#334155` on `:hover` or active states, accompanied by a 1px border accent shift to `#38BDF8`.
- **Focus Rings:** Focused elements receive an unambiguous `2px solid #38BDF8` ring with a `2px` offset (`#0F172A`), providing undeniable feedback for keyboard and screen-reader accessibility.

## Shapes

The design system employs a disciplined, slightly softened industrial shape profile (`roundedness: 1`). 

- **Base Radius (0.25rem / 4px):** Applied to badges, tech stack pills, input fields, and inner code blocks.
- **Container Radius (0.5rem / 8px):** Applied to project cards, educational blocks, and bottom action panels (`rounded-lg`).
- **Zero Radius Elements:** Code snippets, terminal output views, and vertical timeline indicator lines maintain sharp 90-degree corners to reinforce mechanical precision.
- **Never Pill-Shaped:** Fully rounded (`rounded-full`) pill components are explicitly prohibited to prevent consumer-app softness. All badges remain geometric rectangles with subtle 4px radiused corners.

## Components

### Project Card
- **Frame:** `#1E293B` background, `1px solid #334155` border, `8px` corner radius.
- **Header:** Row layout containing project name (`headline-sm`, `#F8FAFC`) left-aligned, and deployment indicator (e.g., green dot `#10B981` + `PROD` in `label-caption`) right-aligned.
- **Problem & Solution Narrative:** Max 2 lines of `body-md` (`#94A3B8`), highlighting measurable system impact (e.g., "Decreased query latency by 34% via Redis caching").
- **Tech Stack Array:** Flex-wrap row of compact badges spaced by `4px`.
- **Action Footers:** Full-width bottom split container divided by `1px solid #334155` into two equal tap targets: `[ Source Code ↗ ]` and `[ Live Demo ↗ ]`. Both sized at a minimum height of `44px` for touch accuracy.

### Chips & Technical Badges
- **Tokens:** `font-family: JetBrains Mono`, size `11px`, weight `600`, line height `14px`.
- **Styling:** Inset padding `2px 6px`. Background `#0F172A`, border `1px solid #334155`, text `#38BDF8`. Bracketed visual styling (e.g., `[Python 3.11]`, `[PostgreSQL]`, `[Docker]`).
- **Categories:** Grouped into explicit semantic sets:
  - *Languages:* `#38BDF8` text outline.
  - *Frameworks/Runtimes:* `#94A3B8` text outline.
  - *Tools & Infrastructure:* `#06B6D4` text outline.

### Buttons & Interactive Controls
- **Primary Action (e.g., Download Resume PDF):** Solid `#38BDF8` background, `#0F172A` bold monospaced typography, `8px` radius. Height `44px`. Focus ring `2px solid #F8FAFC`.
- **Secondary Action (e.g., Email / Contact):** `#1E293B` background, `1px solid #334155` border, `#F8FAFC` text. Height `44px`.
- **Tap Targets:** Minimum tap boundary is strictly `44px x 44px` across all mobile viewport widths.

### Persistent Mobile Action Dock
- **Positioning:** Fixed at viewport bottom with safe-area padding for mobile home bars.
- **Surface:** `#0F172A` background with top border `1px solid #334155`.
- **Contents:** Equal 2-column action bar: `[ Resume (PDF) ↓ ]` and `[ Get in Touch → ]`. Remains anchored during page scrolling to facilitate immediate recruiter contact.

### Education & Experience Timeline
- **Layout:** Vertical hairline rule (`1px solid #334155`) spanning left margin.
- **Nodes:** `8px x 8px` square nodes (`#38BDF8`) anchored to the vertical track.
- **Content Blocks:** Organization/University name (`headline-sm`), degree program, and graduation year (`label-code`, `#94A3B8`). Coursework chips render inline below descriptions.

### Absolute Negative Constraints
- **No Skill Gauges:** Skill percentage bars, pie charts, and star ratings are strictly forbidden. Skills are represented solely as binary categorical badges indicating applied usage.
- **No Floating Decor:** Zero ambient blur shapes or decorative gradients.