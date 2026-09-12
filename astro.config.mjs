import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1, r2, sandbox } from "@emdash-cms/cloudflare";
import { formsPlugin } from "@emdash-cms/plugin-forms";
import webhookNotifier from "@emdash-cms/plugin-webhook-notifier";
import { defineConfig, fontProviders } from "astro/config";
import emdash from "emdash/astro";
import { cloudflareEmail } from "@emdash-cms/cloudflare/plugins";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  image: {
    layout: "constrained",
    responsiveStyles: true,
  },
  integrations: [
    react(),
    emdash({
      database: d1({ binding: "DB", session: "auto" }),
      storage: r2({ binding: "MEDIA" }),
      plugins: [formsPlugin()],
      sandboxed: [webhookNotifier],
      sandboxRunner: sandbox(),
      marketplace: "https://marketplace.emdashcms.com",
      plugins: [
        cloudflareEmail({
          from: { email: "no-replay@webisfun.dev", name: "Webisfun" },
          replyTo: "hello@webisfun.dev",
        }),
      ],
    }),
  ],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "IBM Plex Sans",
      cssVariable: "--font-body",
      weights: [400, 500, 600, 700],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "IBM Plex Mono",
      cssVariable: "--font-mono",
      weights: [400, 700],
      fallbacks: ["monospace"],
    },
  ],
  devToolbar: { enabled: false },
});
