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
      "Speed up your workflow with convenient keyboard shortcuts for quick formatting and navigation within the dotemd editor.",
  },
  {
    icon: <SaveIcon />,
    title: "Auto Save",
    about:
      "Never lose your progress! dotemd automatically saves your work, ensuring that your content is always protected.",
  },
  {
    icon: <DownloadIcon />,
    title: "Download File",
    about:
      "Seamlessly download your markdown files with a single click, enabling easy sharing or offline access.",
  },
];

export const slideFeatures: SlideFeaturesType[] = [
  {
    image: "./assets/editor.svg",
    label: "Editor",
    title: "Create Stunning Markdown Files With A Powerful Editor",
    about:
      "Harness the power of dotemd's editor to effortlessly design visually appealing markdown files. With a rich set of formatting options, intuitive interface, and time-saving features like keyboard shortcuts, your content creation becomes a breeze.",
  },
  {
    image: "./assets/workflow.svg",
    label: "Save File",
    title: "Save your writing across the network",
    about:
      "With dotemd's file saving feature, your progress is automatically saved, ensuring that you never lose your work. You can also save up to three templates in your account for quick access and streamline your document creation process.",
    style: "lg:flex-row-reverse",
  },
  {
    image: "./assets/code.svg",
    label: "Markdown",
    title: "Convert Plain Text to Markdown in Seconds",
    about:
      "Transforming regular text into markdown is a breeze with dotemd. Simply type your content, and our tool automatically converts it to markdown format, allowing you to focus on writing without worrying about manual formatting.",
  },
];
