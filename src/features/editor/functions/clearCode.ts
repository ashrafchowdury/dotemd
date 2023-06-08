import { Editor } from "@tiptap/core";
import toaster from "@/components/ui/toaster";

export const clearCode = (editor: Editor) => {
  toaster({
    title: "Clear Code",
    about: "Do you want to clear your data",
    type: "alert",
    btnTwo: {
      title: "Clear Code",
      onclcik: () => editor.commands.clearContent(),
    },
  });
};
