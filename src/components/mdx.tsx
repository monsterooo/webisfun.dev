import { useMDXComponent } from "@content-collections/mdx/react";

export function MDX({ code }: { code: string; className?: string }) {
  const Component = useMDXComponent(code);

  return (
    <article>
      <Component components={{}} />
    </article>
  );
}
