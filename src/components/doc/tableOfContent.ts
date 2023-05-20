type TableOfContentType = {
  parent: string;
  childrens?: string[];
};

export const tableOfContent: TableOfContentType[] = [
  {
    parent: "overview",
  },
  {
    parent: "formats",
    childrens: ["editor", "style", "coding"],
  },
  {
    parent: "example",
  },
];
