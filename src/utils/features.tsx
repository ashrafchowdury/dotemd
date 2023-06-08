import { ReactNode } from "react";
import { SaveIcon, KeyboardIcon, DownloadIcon } from "../components/ui/Icons";

type CardFeatureType = {
  icon: ReactNode;
  title: string;
  about: string;
};

type SlideFeaturesType = {
  image: string;
  label: string;
  title: string;
  about: string;
  style?: string;
};

export const cardFeatures: CardFeatureType[] = [
  {
    icon: <KeyboardIcon />,
    title: "Key Shortcuts",
    about:
      "Our editor has keyboard shortcuts for every selector, making it easy to edit and manipulate your templates.",
  },
  {
    icon: <SaveIcon />,
    title: "Auto Save",
    about:
      "Our editor has keyboard shortcuts for every selector, making it easy to edit and manipulate your templates.",
  },
  {
    icon: <DownloadIcon />,
    title: "Download File",
    about:
      "Our editor has keyboard shortcuts for every selector, making it easy to edit and manipulate your templates.",
  },
];

export const slideFeatures: SlideFeaturesType[] = [
  {
    image: "./assets/editor.svg",
    label: "Markdown",
    title: "We provide polish markdown to us an output",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero nam dolore, nesciunt facilis repellendus consequatur dolor debitis iusto. Commodi? Sequi vero nam dolore, nesciunt facilis repellendus consequatur dolor debitis iusto.",
  },
  {
    image: "./assets/workflow.svg",
    label: "How we work",
    title: "Everything is well planned & well designed",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero nam dolore, nesciunt facilis repellendus consequatur dolor debitis iusto. Commodi? Sequi vero nam dolore, nesciunt facilis repellendus consequatur dolor debitis iusto.",
    style: "lg:flex-row-reverse",
  },
  {
    image: "./assets/code.svg",
    label: "Code",
    title: "We provide polish markdown to us an output",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero nam dolore, nesciunt facilis repellendus consequatur dolor debitis iusto. Commodi? Sequi vero nam dolore, nesciunt facilis repellendus consequatur dolor debitis iusto.",
  },
];
