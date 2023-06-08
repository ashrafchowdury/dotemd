import Table from "@tiptap/extension-table";
import Image from "@tiptap/extension-image";
import HorizontalRule from "@tiptap/extension-horizontal-rule";

export const UpdatedHorizontalRule = HorizontalRule.extend({
  addKeyboardShortcuts() {
    return { "Control-Alt-h": () => this.editor.commands.setHorizontalRule() };
  },
});
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
