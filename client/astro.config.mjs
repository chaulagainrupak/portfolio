// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import remarkWikiLink from "remark-wiki-link";

// https://astro.build/config
export default defineConfig({
  site: "https://chaulagainrupak.com.np",

  markdown: {
    remarkPlugins: [
      [
        remarkWikiLink,
        {
          // @ts-ignore
          hrefTemplate: (permalink) => `/logs/${permalink}`,
          aliasDivider: "|", // supports [[post|Text]]
        },
      ],
    ],
  },

  integrations: [
    mdx({
      remarkPlugins: [
        [
          remarkWikiLink,
          {
          // @ts-ignore
            hrefTemplate: (permalink) => `/logs/${permalink}`,
            aliasDivider: "|",
          },
        ],
      ],
    }),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});