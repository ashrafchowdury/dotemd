import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";

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
];
