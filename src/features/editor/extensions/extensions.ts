import StarterKit from "@tiptap/starter-kit";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Placeholder from "@tiptap/extension-placeholder";
import Heading from "@tiptap/extension-heading";
import CodeBlock from "@tiptap/extension-code-block";
import Blockquote from "@tiptap/extension-blockquote";
import Gapcursor from "@tiptap/extension-gapcursor";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import History from "@tiptap/extension-history";
import {
  UpdatedTable,
  UpdatedImage,
  UpdatedHorizontalRule,
} from "./updatedExtensions";
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
    history: false,
  }),
  Heading.configure({
    levels: [1, 2, 3],
  }),
  Placeholder.configure({
    emptyEditorClass: "placeholder",
    includeChildren: true,
    placeholder: ({ node }) => {
      if (node.type.name == "heading") {
        return "Heading";
      } else if (node.type.name == "codeBlock") {
        return "Add Code";
      } else {
        return "Type '/' To Open Selector";
      }
    },
  }),
  TextAlign.configure({
    types: ["image", "paragraph", "heading"],
  }),

  Link.configure({
    openOnClick: false,
    HTMLAttributes: {
      rel: null,
      target: "_blank",
    },
  }),
  UpdatedImage.configure({
    inline: true,
  }),
  History,
  ListItem,
  OrderedList,
  CodeBlock,
  Blockquote,
  Gapcursor,
  TaskItem,
  TaskList,
  TableRow,
  TableHeader,
  TableCell,
  UpdatedTable,
  UpdatedHorizontalRule,
  TypeSuggestion,
];
