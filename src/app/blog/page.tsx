import { allPosts } from "content-collections";
import Image from "next/image";
import Link from "next/link";

export default function Posts() {
  return (
    <section className="max-w-[40rem] mx-auto">
      <ul>
        {allPosts.map((post) => (
          <li key={post._meta.path}>
            {post.coverImage && (
              <Image
                src={post.coverImage}
                alt={post.title}
                sizes="100vw"
                width={500}
                height={300}
                className="aspect-video rounded-lg max-w-full h-auto object-cover w-full mb-2"
              />
            )}
            <p className="text-gray-500 font-bold font-sans">
              {post.date.toLocaleDateString()}
            </p>
            <h2 className="transition-colors hover:text-brand-500 text-3xl font-bold leading-tight mt-4">
              <Link href={`/posts/${post._meta.path}`}>{post.title}</Link>
            </h2>
            <p className="my-6 leading-[1.7] text-[1.2rem]">{post.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
