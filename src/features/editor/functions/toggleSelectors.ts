import toaster from "@/components/ui/toaster";
import { Editor } from "@tiptap/react";

export const toggleSelectors = (
  editor: Editor,
  selector: string | undefined,
  position: number,
  selectItem: (index: number) => void,
  selectorRef?: any
) => {
  const itemSelect = () => selectItem(position);
  const editorChain = () => editor.chain().focus();

  if (selector?.[1] === "BlockQuote") {
    itemSelect();
    editorChain().setBlockquote().run();
  } else if (selector?.[1] === "Check List") {
    itemSelect();
    editorChain().toggleTaskList().run();
  } else if (selector?.[1] == "Table") {
    editorChain().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
    itemSelect();
  } else if (selector?.[1] == "Image") {
    const handleInsertImage = () => {
      const mediaLink = selectorRef.current?.value;
      editor.commands.setImage({ src: mediaLink });
    };
    toaster({
      title: "Image Link",
      input: true,
      type: "alert",
      btnOne: {
        title: "Insert Link",
        onclcik: handleInsertImage,
      },
      toastRef: selectorRef,
    });
    itemSelect();
  } else {
    itemSelect();
  }
};
