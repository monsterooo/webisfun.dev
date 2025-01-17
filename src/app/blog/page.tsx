import { allBlogs } from "content-collections";
import Image from "next/image";
import Link from "next/link";

export default function Posts() {
  return (
    <section className="max-w-[40rem] mx-auto">
      <ul>
        {allBlogs.map((blog) => (
          <li key={blog._meta.path} className="[&:last-child>hr]:hidden">
            {blog.coverImage && (
              <Image
                src={blog.coverImage}
                alt={blog.title}
                sizes="100vw"
                width={500}
                height={300}
                className="aspect-video rounded-lg max-w-full h-auto object-cover w-full mb-2"
              />
            )}
            <p className="text-gray-500 text-sm md:text-base font-bold font-sans">
              {blog.date.toLocaleDateString()}
            </p>
            <h2 className="transition-colors hover:text-brand-500 text-xl md:text-3xl font-bold leading-tight mt-4">
              <Link href={`/blog/${blog._meta.path}`}>{blog.title}</Link>
            </h2>
            <p className="my-3 md:my-6 leading-[1.7] text-base md:text-xl">
              {blog.summary}
            </p>
            <div className="flex gap-2">
              {blog.tags &&
                blog.tags.map((tag) => (
                  <div
                    key={tag}
                    className="px-2 py-1 rounded-full text-brand-500 bg-brand-500/10 text-sm cursor-pointer font-semibold border border-transparent hover:shadow-tag transition-all"
                  >
                    {tag}
                  </div>
                ))}
            </div>
            <hr className="my-12 border-none h-[1px] relative before:absolute before:content-[''] before:bg-divider before:left-0 before:right-0 before:h-[1px]" />
          </li>
        ))}
      </ul>
    </section>
  );
}
