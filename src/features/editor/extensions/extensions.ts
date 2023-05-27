import StarterKit from "@tiptap/starter-kit";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Placeholder from "@tiptap/extension-placeholder";
import Heading from "@tiptap/extension-heading";
import CodeBlock from "@tiptap/extension-code-block";
import Blockquote from "@tiptap/extension-blockquote";
import Gapcursor from "@tiptap/extension-gapcursor";

import { TypeSuggestion } from "../selectors/suggestion";

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
  ListItem,
  OrderedList,
  CodeBlock,
  Blockquote,
  Gapcursor,
  TypeSuggestion,
];
