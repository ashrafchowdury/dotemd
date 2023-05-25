import { Editor } from "@tiptap/core";

export const clearCode = (editor: Editor) => {
  const conformation = window.confirm("Do you want to clear your data");
  conformation && editor.commands.clearContent();
};
