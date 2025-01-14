"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    title: "HOME",
  },
  {
    href: "/blog",
    title: "BLOG",
  },
  {
    href: "/about",
    title: "ABOUT",
  },
];

export function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") {
      return true;
    } else if (pathname.startsWith(href) && href !== "/") {
      return true;
    }
  };

  return (
    <nav className="font-sans flex justify-center items-center gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "font-bold text-lg relative px-3 transition-all duration-500 hover:text-brand-500 nav",
            {
              "text-gray-500": !isActive(link.href),
              "nav-active text-gray-900 after:animate-nav-show": isActive(
                link.href
              ),
            }
          )}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
