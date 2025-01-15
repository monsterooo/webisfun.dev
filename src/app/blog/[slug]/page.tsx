import { MDX } from "@/components/mdx";
import { allPosts } from "content-collections";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

export default async function PostDetail({ params }: { params: Params }) {
  const { slug } = await params;
  const post = allPosts.find((post) => post._meta.path === slug);

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <header className="text-center">
        <p className="text-gray-500 font-bold font-sans my-5">
          {post.date.toLocaleDateString()}
        </p>
        <h1 className="text-5xl text-gray-900 font-bold">{post.title}</h1>
        {post.tags && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {post.tags.map((tag) => (
              <div
                key={tag}
                className="px-2 py-1 rounded-full text-brand-500 bg-brand-500/10 text-sm cursor-pointer font-semibold border border-transparent hover:shadow-tag transition-all"
              >
                {tag}
              </div>
            ))}
          </div>
        )}
        <hr className="min-w-24 w-1/3 mx-auto my-12 border-none h-[1px] relative before:absolute before:content-[''] before:bg-divider before:left-0 before:right-0 before:h-[1px]" />
      </header>
      <section className="max-w-[40rem] mx-auto article">
        <MDX code={post.mdx} />
      </section>
    </div>
  );
}
