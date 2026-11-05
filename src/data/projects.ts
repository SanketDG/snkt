export interface Project {
  name: string
  description: string
  tech?: string[]
  // Left out for private repositories, so the card shows no link.
  link?: string
}

// Shown on the home page and at the top of /projects.
export const recent: Project[] = [
  {
    name: "SpecWatch",
    description:
      "Checks a service against its OpenAPI contract: finds its routes, replays the contract's examples against the running service, validates every response and reports coverage for CI.",
    tech: ["Go", "OpenAPI", "CI"],
  },
  {
    name: "mac-remote",
    description:
      "Turns your phone into a trackpad, keyboard and media remote for your Mac over Wi-Fi. Pure Python standard library, nothing to install.",
    tech: ["Python", "macOS", "launchd"],
  },
  {
    name: "ai-skills",
    description:
      "Portable skills for AI coding agents: safe repo syncing, and local dev servers that start at login with friendly .local names.",
    tech: ["Claude Code", "Codex", "Bash"],
  },
  {
    name: "this site",
    description:
      "Rebuilt from Gatsby to Astro: static HTML, about 55 KB for all the pages and almost no JavaScript.",
    tech: ["Astro", "Vercel"],
    link: "https://github.com/SanketDG/snkt",
  },
]

export const earlier: Project[] = [
  {
    name: "djurl",
    description:
      "A minimal self-hosted URL shortener built using Django with modern tooling for Python and best practices in mind.",
    tech: ["Python", "Django", "Docker", "Heroku"],
    link: "https://github.com/SanketDG/djurl",
  },
  {
    name: "khol",
    description:
      "A minimalistic shell written in C with support for redirection, history and pipes.",
    tech: ["C"],
    link: "https://github.com/SanketDG/khol",
  },
  {
    name: "extenstart",
    description: "Opinionated Boilerplate for Web Extensions",
    tech: ["Javascript", "ES6", "Webpack"],
    link: "https://github.com/SanketDG/extenstart",
  },
  {
    name: "awsomsauce",
    description: "An engineering blog that I and some of my friends write!",
    tech: ["Hugo", "Tachyons", "Netlify"],
    link: "https://github.com/awsomsauce/website",
  },
]
