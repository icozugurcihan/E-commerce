# E-Commerce Copilot Instructions

## Architecture Overview

This is a React + Vite e-commerce storefront with a **three-layer structure**:

- **Layout Layer** ([src/layout/](src/layout/)): `Header`, `Footer`, `PageContent` - frame all pages
- **Pages Layer** ([src/pages/](src/pages/)): `HomePage` (main landing), `Shop` (products) - route-specific content
- **Components Layer** ([src/components/](src/components/)): Reusable UI pieces (`ProductCard`, `Slider`, `FeaturedPosts`, etc.)
- **Data Layer** ([src/data/](src/data/)): Static product/post objects - the source of truth for content

**Routing**: React Router v5 (`BrowserRouter`, `Switch`, `Route`). App.jsx wraps pages with Header/Footer. Note: PageContent.jsx has redundant routing that duplicates App.jsx - consolidation opportunity.

## Key Tech Stack

- **Build**: Vite (fast HMR), no build config complexity
- **Styling**: Tailwind CSS - utility-first, no custom CSS files needed
- **Icons**: lucide-react - use for UI elements (see [src/layout/Header.jsx](src/layout/Header.jsx#L1) for examples)
- **Assets**: Images in [src/assets/](src/assets/) by category (products/, posts/, editor/)

## Common Patterns & Conventions

### Component Structure
Components are **functional, stateless presentational components** passing data via props:
```jsx
export default function ProductCard({ product }) {
  return <div>...</div>
}
```
**Pattern**: Components map over data arrays (e.g., `product.colors.map()` in ProductCard) - always use index as fallback key.

### Data Models
- **Products** ([src/data/products.js](src/data/products.js)): `id`, `title`, `category`, `price`, `image`, `colors` (hex array)
- **Posts** ([src/data/posts.js](src/data/posts.js)): Similar structure with content fields
- Import statically at top of components, don't fetch

### Styling Rules
- Use **Tailwind classes only** - no inline styles or separate CSS files
- Responsive: `hidden md:flex` for desktop-only, `sm:`, `md:`, `lg:` prefixes standard
- Colors used: `bg-slate-800` (header dark), `text-green-600` (price highlight), `text-gray-500` (secondary text)

## Developer Workflow

```bash
npm run dev      # Start Vite dev server (localhost:5173)
npm run build    # Production build to /dist
npm run lint     # ESLint check (globals, react-hooks rules)
npm run preview  # Preview production build locally
```

## Integration Points

- **Lucide React Icons**: Direct component import (`import { Phone, Mail, ... } from "lucide-react"`)
- **React Router**: Use `<Link>` for internal navigation (preserves app state), `<NavLink>` for active styling
- **Vite Assets**: Import images directly (`import p1 from "../assets/products/p1.jpg"`), not string paths

## Redux/Redux-Thunk Note

`redux`, `redux-thunk`, `react-redux` are dependencies but **not currently integrated** - architecture is prop-driven. Future state management can follow this pattern: action creators in separate files, reducers for products/cart, selectors for computed state.

## Gotchas & Cleanup Opportunities

1. **Route Duplication**: App.jsx and PageContent.jsx both handle routing - consolidate to App.jsx
2. **Mobile Menu**: Header uses `document.body.style.overflow` for menu toggle - consider context API if spread across components
3. **No Error Boundaries**: Add error handling for image/data loading failures
4. **No Tests**: Testing framework not configured
