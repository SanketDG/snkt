# snkt

Sanket Dasgupta's personal site: home, projects, resume and blog.

Built with [Astro](https://astro.build) as plain static HTML. There is no client-side JavaScript, no web fonts and no CSS framework; the whole site is roughly 70 KB.

## Develop

Requires Node 22.23.4 or newer (Astro 7).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve dist/ locally
```

## Structure

| Path | What it is |
| --- | --- |
| `src/pages/` | `index`, `projects`, `resume`, `blog` and the 404 page |
| `src/pages/[...path].astro` | Renders each blog post at its `path` frontmatter URL |
| `src/content/blog/*.md` | Blog posts (`path`, `title`, `date`, optional `description`) |
| `src/components/`, `src/layouts/` | Header, footer, project card, icons and the base layout |
| `src/styles/global.css` | All site styles, with light and dark themes |
| `src/site.ts` | Site title, description and social links |

The resume has print styles and fits on one Letter or A4 page.

## Deploy

Hosted on Vercel, which detects Astro and builds `dist/` with no extra settings. `vercel.json` only turns off trailing slashes so URLs match the canonical links. Set the project's Node.js version to 22.x or 24.x.
