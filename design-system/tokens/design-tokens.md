# Design System Specification - FineDine Clone

## Design Philosophy
- **Visual Style:** Modern, clean, professional SaaS
- **Density:** Medium-high content density
- **Personality:** Trustworthy, innovative, approachable
- **Visual Hierarchy:** Strong contrast, clear CTAs, generous whitespace

## Color System

### Primary Colors
| Token | HEX | Usage |
|-------|-----|-------|
| `--color-primary` | #E6034B | Primary buttons, CTAs, accents |
| `--color-primary-dark` | #C4003F | Hover states |
| `--color-primary-light` | #FF1A5C | Light accents |

### Purple/Violet Accent (Brand Secondary)
| Token | HEX | Usage |
|-------|-----|-------|
| `--color-violet-50` | #f5f3ff | Light backgrounds |
| `--color-violet-100` | #ede9fe | Feature cards bg |
| `--color-violet-200` | #ddd6fe | Borders |
| `--color-violet-600` | #7c3aed | Links, secondary CTAs |
| `--color-violet-700` | #6d28d9 | Hover states |

### Grayscale (Semantic)
| Token | HEX | Usage |
|-------|-----|-------|
| `--color-gray-50` | #f9fafb | Light backgrounds |
| `--color-gray-100` | #f3f4f6 | Section backgrounds |
| `--color-gray-300` | #d1d5db | Disabled, borders |
| `--color-gray-600` | #4b5563 | Body text secondary |
| `--color-gray-700` | #374151 | Body text primary |
| `--color-gray-800` | #1f2937 | Headings |
| `--color-gray-900` | #111827 | Primary text, headings |

### Background Colors
| Token | HEX | Usage |
|-------|-----|-------|
| `--bg-white` | #FFFFFF | Cards, main content |
| `--bg-gray-50` | #f9fafb | Alternate sections |
| `--bg-gray-900` | #111827 | Dark sections, footer |
| `--bg-violet-900` | #4c1d95 | Gradient backgrounds |

## Typography

### Font Family
```css
--font-primary: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
--font-display: 'Playfair Display', Georgia, serif;
```

### Type Scale
| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `text-6xl` | 60px | 800 | 1.1 | Hero headlines |
| `text-5xl` | 48px | 800 | 1.1 | Section titles |
| `text-4xl` | 36px | 700 | 1.2 | Major headings |
| `text-3xl` | 30px | 700 | 1.3 | Sub-sections |
| `text-2xl` | 24px | 600 | 1.4 | Card titles |
| `text-xl` | 20px | 600 | 1.5 | Feature titles |
| `text-lg` | 18px | 400 | 1.6 | Lead paragraphs |
| `text-base` | 16px | 400 | 1.6 | Body text |
| `text-sm` | 14px | 400 | 1.5 | Secondary text |

### Font Weights
- `font-normal`: 400 - Body text
- `font-medium`: 500 - Emphasis
- `font-semibold`: 600 - Subheadings, labels
- `font-bold`: 700 - Headings
- `font-extrabold`: 800 - Hero text, CTAs

## Spacing System

### Base Unit: 4px
| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight spacing |
| `space-2` | 8px | Component internal |
| `space-3` | 12px | Small gaps |
| `space-4` | 16px | Standard padding |
| `space-5` | 20px | Component gaps |
| `space-6` | 24px | Section internal |
| `space-8` | 32px | Large gaps |
| `space-12` | 48px | Section padding |
| `space-16` | 64px | Major sections |
| `space-20` | 80px | Hero spacing |

## Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `rounded-md` | 6px | Small elements |
| `rounded-lg` | 8px | Inputs, small cards |
| `rounded-xl` | 12px | Buttons, cards |
| `rounded-2xl` | 16px | Large cards |
| `rounded-full` | 9999px | Pills, avatars |

## Shadows
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--shadow-custom: 0 0 20px rgba(124, 58, 237, 0.15);
```

## Component Specifications

### Buttons

**Primary Button**
- Background: #E6034B
- Text: White
- Padding: 16px 32px
- Border radius: 9999px (pill)
- Font: 16px, font-semibold
- Hover: Darken 10%, scale 1.02

**Secondary Button**
- Background: Transparent
- Border: 2px solid #7c3aed
- Text: #7c3aed
- Padding: 16px 32px
- Border radius: 9999px

**CTA Callout Button**
- Background: White
- Border: 1px solid gray-200
- Text: Gray-700
- Padding: 8px 16px
- Border radius: 9999px
- Icon + Text layout

### Cards

**Feature Card**
- Background: White
- Border: 4px solid gray-800 (dark mode) or white
- Border radius: 20px (rounded-[1.25rem])
- Padding: 32px
- Shadow: Custom shadow
- Hover: Scale 1.05, shadow increase

**Pricing Card**
- Background: White or Gray-900 (dark)
- Border radius: 20px
- Padding: 48px
- Shadow: lg

### Navigation

**Header**
- Background: Transparent (scrolled: white/blur)
- Height: 80px
- Logo: Left
- Nav links: Center
- CTAs: Right
- Font: 16px, font-medium

**Nav Link**
- Color: Gray-700
- Hover: Gray-900
- Active: #7c3aed

## Layout Patterns

### Container
- Max width: 1280px (80rem)
- Padding: 16px (mobile), 24px (tablet), 32px (desktop)

### Grid System
- 12-column grid
- Gap: 32px (standard)
- Responsive: 1 col (mobile), 2 col (tablet), 3 col (desktop)

### Section Spacing
- Vertical padding: 80px (py-20)
- Large sections: 96px (py-24)

## Animations

### Transitions
```css
--transition-fast: 150ms ease-in-out;
--transition-base: 200ms ease-in-out;
--transition-slow: 300ms ease-in-out;
```

### Hover Effects
- Cards: scale(1.05), shadow increase
- Buttons: background darken, subtle lift
- Links: color transition

### Scroll Behavior
- Smooth scroll enabled
- Fade-in on scroll for sections

## Page-Specific Patterns

### Homepage Structure
1. **Hero Section** - Gradient background, large headline, two CTAs
2. **Logo Cloud** - Infinite scroll, grayscale logos
3. **Features Grid** - 3-column, dark bg, feature cards
4. **Solutions Carousel** - Horizontal scroll, category cards
5. **Next-Gen Features** - Mixed grid layout
6. **Testimonials** - Video + slider
7. **Use Cases** - Category cards
8. **Latest Articles** - Blog cards grid
9. **FAQ** - Accordion
10. **CTA Section** - Split layout
11. **Footer** - Multi-column links

### Pricing Page
- 3-tier layout
- Monthly toggle
- Feature comparison
- CTA per tier
- Enterprise contact

## Responsive Breakpoints
| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | < 640px | Single column, stacked |
| Tablet | 640-1024px | 2 columns |
| Desktop | > 1024px | Full layout |

## RTL Considerations
- Flip all directional properties
- Mirror layouts exactly
- Maintain visual weight and rhythm
- Font: IBM Plex Sans Arabic
- Maintain same spacing scale
