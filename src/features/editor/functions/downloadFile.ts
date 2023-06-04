import toaster from "@/components/ui/toaster";
import { toast } from "react-hot-toast";
import { htmlToMarkdown } from "./htmlToMarkdown";
import { Editor } from "@tiptap/react";

export const downloadFile = (editor: Editor) => {
  const { markdownCode } = htmlToMarkdown(editor);
  try {
    const a = document.createElement("a");
    const blob = new Blob([markdownCode]);
    a.href = URL.createObjectURL(blob);
    a.download = "README.md";
    a.click();
    toaster({
      title: "File Downloaded",
      about: "Now you can use the file wherever you want",
    });
  } catch (error) {
    toast.error("Something was wrong!");
  }
};
