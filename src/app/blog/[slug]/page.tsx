import { MDX } from "@/components/mdx";
import { allBlogs } from "content-collections";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

export default async function PostDetail({ params }: { params: Params }) {
  const { slug } = await params;
  const blog = allBlogs.find((blog) => blog._meta.path === slug);

  if (!blog) {
    return notFound();
  }

  return (
    <div>
      <header className="text-center">
        <p className="text-gray-500 font-bold font-sans my-3 md:my-5 text-sm md:text-base">
          {blog.date.toLocaleDateString()}
        </p>
        <h1 className="text-3xl md:text-5xl text-gray-900 font-bold">
          {blog.title}
        </h1>
        {blog.tags && (
          <div className="flex justify-center items-center gap-2 mt-4 md:mt-8">
            {blog.tags.map((tag) => (
              <div
                key={tag}
                className="px-2 py-1 rounded-full text-brand-500 bg-brand-500/10 text-sm cursor-pointer font-semibold border border-transparent hover:shadow-tag transition-all"
              >
                {tag}
              </div>
            ))}
          </div>
        )}
        <hr className="min-w-24 w-1/3 mx-auto my-7 md:my-12 border-none h-[1px] relative before:absolute before:content-[''] before:bg-divider before:left-0 before:right-0 before:h-[1px]" />
      </header>
      <section className="max-w-[40rem] mx-auto article md:text-base text-xs">
        <MDX code={blog.mdx} />
      </section>
    </div>
  );
}
