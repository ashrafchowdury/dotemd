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
  const toggleToast = (title: string, event: any) =>
    toaster({
      title: title,
      input: true,
      type: "alert",
      btnOne: {
        title: "Insert Link",
        onclcik: event,
      },
      toastRef: selectorRef,
    });

  if (selector?.[1] === "BlockQuote") {
    itemSelect();
    editorChain().setBlockquote().run();
  } else if (selector?.[1] == "Table") {
    editorChain().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
    itemSelect();
  } else if (selector?.[1] == "Image") {
    const handleInsertImage = () => {
      const mediaLink = selectorRef.current?.value;
      editor.commands.setImage({ src: mediaLink });
    };

    toggleToast("Image Link", handleInsertImage);
    itemSelect();
  } else if (selector?.[1] == "Video") {
    const handleInsertVideo = () => {
      const mediaLink = selectorRef.current?.value;
      editorChain().setYoutubeVideo({ src: mediaLink }).run();
    };

    toggleToast("YouTube Link", handleInsertVideo);
    itemSelect();
  }
  itemSelect();
};
