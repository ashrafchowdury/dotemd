import { TipTapEditorFormatType } from "../types/selectorsTypes";
import {
  BulletListIcon,
  NumListIcon,
  BlockQuoteIcon,
  CodeIcon,
} from "@/components/ui/Icons";

const EditorFormat: TipTapEditorFormatType = {
  TEXT: ["Aa", "Text", "Normal Text", "Alt 0"],
  HEADING_ONE: ["H1", "Heding 1", "Big Heading", "Alt 1"],
  HEADING_TWO: ["H2", "Heding 2", "Mideum Heading", "Alt 2"],
  HEADING_THREE: ["H3", "Heding 3", "Normal Heading", "Alt 3"],
  BULLET_LIST: [
    <BulletListIcon key="bullet" />,
    "Bullet List",
    "Bullet List",
    "Shift 8",
  ],
  NUMBER_LIST: [
    <NumListIcon key="orderd" />,
    "Orderd List",
    "Number List",
    "Shift 7",
  ],
  BLOCKQUOTE: [
    <BlockQuoteIcon key="quote" />,
    "BlockQuote",
    "Add quotes",
    "Shift B",
  ],
  CODE: [<CodeIcon key="code" />, "Code Block", "Add Code Block", "Alt C"],
};

// lists formats
const list = [
  {
    type: "listItem",
    content: [
      {
        type: "paragraph",
      },
    ],
  },
];

const TipTapEditorFormatType = {
  [EditorFormat.TEXT]: { type: "paragraph" },
  [EditorFormat.HEADING_ONE]: { type: "heading", attrs: { level: 1 } },
  [EditorFormat.HEADING_TWO]: { type: "heading", attrs: { level: 2 } },
  [EditorFormat.HEADING_THREE]: { type: "heading", attrs: { level: 3 } },
  [EditorFormat.BULLET_LIST]: {
    type: "bulletList",
    content: list,
  },
  [EditorFormat.NUMBER_LIST]: {
    type: "orderedList",
    content: list,
  },
  [EditorFormat.BLOCKQUOTE]: { type: "blockquotes" },
  [EditorFormat.CODE]: { type: "codeBlock" },
};

export { EditorFormat, TipTapEditorFormatType };
