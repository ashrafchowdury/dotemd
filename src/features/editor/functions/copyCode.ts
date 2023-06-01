import toaster from "@/components/ui/toaster";
import { htmlToMarkdown } from "./htmlToMarkdown";
import { Editor } from "@tiptap/react";

export const copyCode = (editor: Editor) => {
  const { markdownCode } = htmlToMarkdown(editor);
  navigator.clipboard.writeText(markdownCode);
  toaster({
    title: "Code Copied",
    about: "Now you can past the code in a markdown file",
  });
};
