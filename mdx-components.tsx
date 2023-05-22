import type { MDXComponents } from "mdx/types";
import Button from "@/components/ui/Button";
import { HashIcon } from "@/components/ui/Icons";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h2: ({ children }) => (
      <h2 id={children?.toString().toLowerCase()} className=" group/item">
        <Button style="!p-2 mr-3 invisible group-hover/item:visible">
          <HashIcon style="text-sm" />
        </Button>

        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 id={children?.toString().toLowerCase()} className=" group/item">
        <Button style="!p-2 mr-3 invisible group-hover/item:visible">
          <HashIcon style="text-xs" />
        </Button>
        {children}
      </h3>
    ),
    hr: ({ children }) => <div className="docLine">{children}</div>,
    ...components,
  };
}
