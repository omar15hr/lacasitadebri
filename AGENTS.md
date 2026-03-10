# AGENTS.md - La Casita de Bri

## Project Overview
- **Project Name**: La Casita de Bri
- **Type**: E-commerce website for cookie sales
- **Framework**: Astro 6 with Vercel adapter
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel

---

## Commands

### Development
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run astro      # Run Astro CLI
```

### Building
```bash
npm run build      # Creates static output in /dist
```

---

## Code Style Guidelines

### General Principles
- Use Astro components (.astro) for static pages
- Keep components small and focused
- Use TypeScript for type safety
- Follow existing code patterns in the project

### File Organization
```
src/
├── components/       # Reusable UI components
│   ├── ui/           # Global UI (Navbar, Footer)
│   └── shared/       # Shared components
├── content/          # Content collections (markdown files)
├── layouts/          # Page layouts
├── pages/            # Route pages
│   └── galletas/     # Dynamic cookie detail pages
├── styles/           # Global CSS
└── types/            # TypeScript types
```

### Import Conventions
```astro
---
// Astro components
import Layout from "../layouts/Layout.astro";
import { Image } from "astro:assets";
import { getCollection } from "astro:content";
import CookieCard from "./CookieCard.astro";

// Import order: external -> internal -> components
// Group by: imports -> interfaces/types -> constants -> logic
---
```

### Naming Conventions
- **Components**: PascalCase (e.g., `CookieCard.astro`, `Navbar.astro`)
- **Files**: kebab-case (e.g., `chocolate-chip.md`)
- **Variables**: camelCase
- **CSS Classes**: Tailwind utility classes (kebab-case)
- **Routes**: Follow Astro file-based routing (e.g., `[slug].astro`)

### Tailwind CSS
- Use Tailwind 4 syntax with `@theme` directive
- Custom colors defined in `src/styles/global.css`:
  - `primary`: #feee5b (yellow)
  - `gray-primary`: #6e6e6e
  - `gray-secondary`: #f5f3eb
  - `muted`: #131313
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Prefer utility classes over custom CSS

### TypeScript
- Use interfaces for component props
- Define types in `src/types/` directory
- Use Astro's built-in types where applicable

### Content Collections (Astro 6)
- Configuration in `src/content.config.ts` (not `src/content/config.ts`)
- Use `loader: glob()` for markdown files
- Schema validation with Zod
- Example structure:
```typescript
const cookies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/galletas" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      price: z.number(),
      description: z.string(),
      image: image(),
      bgColor: z.string().optional(),
    }),
});
```

### Dynamic Routes
- Use `[slug].astro` for dynamic pages
- Access slug via `Astro.params.slug`
- Get collection data with `getCollection()`
```astro
---
export async function getStaticPaths() {
  const cookies = await getCollection("cookies");
  return cookies.map((cookie) => ({
    params: { slug: cookie.id },
    props: { cookie },
  }));
}
const { cookie } = Astro.props;
---
```

### Images
- Store images in `/public/` for static assets
- Use Astro's `<Image />` component for optimization
- Always include `alt` text for accessibility

### Error Handling
- Check for null/undefined values before rendering
- Handle empty collections gracefully
- Validate content collection data

### Best Practices
1. Always run `npm run build` before committing
2. Use semantic HTML elements
3. Include accessibility attributes (aria-labels)
4. Keep components self-contained
5. Use consistent spacing with Tailwind utilities
6. Test responsive designs at multiple breakpoints

---

## Notes

### Vercel Adapter
- The project uses `@astrojs/vercel` adapter
- CSP is enabled in config
- Build output goes to Vercel

### Fonts
- Climate Crisis: Display/headings (via @fontsource)
- Gluten Variable: Body text (via @fontsource-variable)

### Content Management
- Cookies are stored as markdown files in `src/content/galletas/`
- Edit markdown files to update cookie information
- Featured cookies determined by `featured: boolean` in frontmatter
