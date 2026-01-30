# CSS to Tailwind Utility Mapping

## Colors

| CSS Variable | Tailwind Utility | Hex |
|---|---|---|
| --color-primary | text-primary / bg-primary | #0891B2 |
| --color-primary-dark | text-primary-dark / bg-primary-dark | #0E7490 |
| --color-primary-light | text-primary-light / bg-primary-light | #22D3EE |
| --color-cta | bg-cta | #059669 |
| --color-cta-hover | hover:bg-cta-hover | #047857 |
| --color-bg | bg-white | #FFFFFF |
| --color-bg-alt | bg-bg-alt | #F8FAFC |
| --color-bg-dark | bg-bg-dark | #0F172A |
| --color-text | text-slate-900 | #0F172A |
| --color-text-muted | text-text-muted | #475569 |
| --color-text-light | text-text-light | #64748B |
| --color-border | border-border | #E2E8F0 |
| --color-card | bg-white | #FFFFFF |

## Shadows

| CSS Variable | Tailwind Utility |
|---|---|
| --shadow-sm | shadow-sm |
| --shadow-md | shadow-md |
| --shadow-lg | shadow-lg |
| --shadow-xl | shadow-xl |

## Border Radius

| CSS Variable | Tailwind Utility | Value |
|---|---|---|
| --radius-sm | rounded-sm | 6px |
| --radius-md | rounded-md | 12px |
| --radius-lg | rounded-lg | 16px |
| --radius-xl | rounded-xl | 24px |

## Typography

| CSS Property | Tailwind Utility |
|---|---|
| font-weight: 300 | font-light |
| font-weight: 400 | font-normal |
| font-weight: 500 | font-medium |
| font-weight: 600 | font-semibold |
| font-weight: 700 | font-bold |

## Common Patterns

| CSS Pattern | Tailwind Classes |
|---|---|
| padding: 48px | p-12 |
| padding: 100px 48px | py-25 px-12 |
| gap: 80px | gap-20 |
| gap: 64px | gap-16 |
| gap: 48px | gap-12 |
| gap: 32px | gap-8 |
| gap: 24px | gap-6 |
| transition: all 0.2s | transition-all duration-200 |
| transition: all 0.3s | transition-all duration-300 |

## Responsive Breakpoints

| Original | Tailwind | Value |
|---|---|---|
| @media (max-width: 768px) | max-md: prefix | 768px |
| @media (max-width: 1200px) | max-xl: prefix | 1280px |
