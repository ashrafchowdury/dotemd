import toaster from "@/components/ui/toaster";
import { toast } from "react-hot-toast";
import { htmlToMarkdown } from "./htmlToMarkdown";
import { Editor } from "@tiptap/react";

export const downloadFile = (
  inputRef: React.RefObject<HTMLInputElement>,
  editor: Editor,
  minText: boolean | null
) => {
  const { markdownCode } = htmlToMarkdown(editor);

  if (minText) {
    toaster({
      title: "Download File",
      about: "Add file name to download it",
      type: "alert",
      input: true,
      toastRef: inputRef,
      btnOne: { title: "Cancel", onclcik: () => null },
      btnTwo: {
        title: "Save File",
        onclcik: () => {
          try {
            const a = document.createElement("a");
            const blob = new Blob([markdownCode]);
            a.href = URL.createObjectURL(blob);
            a.download = inputRef
              ? `${inputRef.current?.value}.md`
              : "README.md";
            a.click();
            toaster({
              title: "File Downloaded",
              about: "Now you can use the file wherever you want",
            });
          } catch (error) {
            toast.error("Something went wrong!");
          }
        },
      },
    });
  } else {
    toast.error("Add enough text to download the file");
  }
};
