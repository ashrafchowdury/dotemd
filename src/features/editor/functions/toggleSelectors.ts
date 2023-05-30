import { Editor } from "@tiptap/react";

export const toggleSelectors = (
  editor: Editor,
  selector: string | undefined,
  position: number,
  selectItem: (index: number) => void
) => {
  const itemSelect = () => selectItem(position);
  const editorChain = () => editor.chain().focus();

  if (selector?.[1] === "BlockQuote") {
    itemSelect();
    editorChain().setBlockquote().run();
  } else if (selector?.[1] == "Table") {
    editorChain().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
    itemSelect();
  }
  itemSelect();
};
