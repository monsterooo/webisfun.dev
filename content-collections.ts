import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import rehypeStarryNight from "rehype-starry-night";

// for more information on configuration, visit:
// https://www.content-collections.dev/docs/configuration

const blogs = defineCollection({
  name: "blogs",
  directory: "src/content/blogs",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    coverImage: z.string().optional(),
    date: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
  }),
  async transform(document, context) {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeStarryNight],
    });
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [blogs],
});
