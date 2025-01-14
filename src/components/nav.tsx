import Link from "next/link";

export function Nav() {
  return (
    <nav className="font-sans flex gap-4">
      <Link href="/blog" className="font-bold text-gray-400">
        BLOG
      </Link>
      <Link href="/about" className="font-bold text-gray-400">
        ABOUT
      </Link>
    </nav>
  );
}
