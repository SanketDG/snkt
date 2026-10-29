import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://snkt.vercel.app",
  trailingSlash: "never",
  markdown: {
    shikiConfig: { theme: "github-dark" },
  },
})
