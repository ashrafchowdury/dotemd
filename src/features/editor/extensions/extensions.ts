import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Placeholder from "@tiptap/extension-placeholder";

export const extensions = [
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  Heading.configure({
    levels: [1, 2, 3],
  }),
  Placeholder.configure({
    emptyEditorClass: "placeholder",
    includeChildren: true,
    placeholder: ({ node }) => {
      const element: string | undefined = (window.getSelection() as any)
        ?.baseNode?.offsetParent?.localName;
      if (node.type.name == "heading") {
        return "Heading";
      } else if (node.type.name == "codeBlock") {
        return "Add Code";
      } else if (element == "th") {
        return "Table heading";
      } else if (element == "td") {
        return "Table info";
      } else {
        return "Type '/' To Open Selector";
      }
    },
  }),
];
