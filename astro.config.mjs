import { defineConfig } from "astro/config";
import compress from "astro-compress";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [compress(), mdx(), tailwind()],
  output: "static",
  site: "https://zzk13180.github.io",
  base: "/passbox",
  build: {
    assets: "public",
  },
});
