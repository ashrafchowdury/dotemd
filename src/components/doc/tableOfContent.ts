type TableOfContentType = {
  parent: string;
  childrens?: string[];
};

export const tableOfContent: TableOfContentType[] = [
  { parent: "overview" },
  {
    parent: "editor",
    childrens: ["formats", "selectors", "editor menu"],
  },
  { parent: "template examples" },
  { parent: "contribution", childrens: ["installation"] },
  { parent: "conclusion" },
];
