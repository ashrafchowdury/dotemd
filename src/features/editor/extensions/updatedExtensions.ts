import Table from "@tiptap/extension-table";
import Youtube from "@tiptap/extension-youtube";
import Image from "@tiptap/extension-image";

export const UpdatedTable = Table.extend({
  addKeyboardShortcuts() {
    return {
      "Control-Alt-t": () =>
        this.editor.commands.insertTable({
          rows: 3,
          cols: 3,
          withHeaderRow: true,
        }),
    };
  },
});
export const UpdatedImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
      },
      height: {
        default: null,
      },
    };
  },
});
