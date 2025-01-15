import { allBlogs } from "content-collections";
import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const domain = headersList.get("host") as string;

  return [
    {
      url: `https://${domain}`,
      lastModified: new Date(),
    },
    {
      url: `https://${domain}/about`,
      lastModified: new Date(),
    },
    ...allBlogs.map((blog) => ({
      url: `https://${domain}/blog/${blog._meta.path}`,
      lastModified: new Date(blog.date),
    })),
  ];
}
