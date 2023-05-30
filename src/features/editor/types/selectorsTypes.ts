import { HTMLAttributes } from "react";

/******** suggetion.tsx ********/

export type TipTapEditorFormatType = {
  TEXT: any;
  HEADING_ONE: any;
  HEADING_TWO: any;
  HEADING_THREE: any;
  BULLET_LIST: any;
  NUMBER_LIST: any;
  BLOCKQUOTE: any;
  CODE: any;
  TABLE: any;
};

/******** Selectors.tsx ********/

export type SelectorPropsType = HTMLAttributes<HTMLDivElement> & {
  options: string[];
  items: [string, string, string, string?];
  command: (item: string) => void;
};
