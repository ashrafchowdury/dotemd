import { Editor } from "@tiptap/react";

export const toggleSelectors = (
  editor: Editor,
  selector: string | undefined,
  position: number,
  selectItem: (index: number) => void
) => {
  const itemSelect = () => selectItem(position);

  if (selector?.[1] === "BlockQuote") {
    itemSelect();
    editor.chain().focus().setBlockquote().run();
  }
  itemSelect();
};
