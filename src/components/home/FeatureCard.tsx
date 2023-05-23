import { ReactNode } from "react";
import { SaveIcon, KeyboardIcon, DownloadIcon } from "../ui/Icons";

type FeatureCardType = {
  icon: ReactNode;
  title: string;
  about: string;
};

const FeatureCard = () => {
  const features: FeatureCardType[] = [
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
  return (
    <>
      {features.map((data) => {
        return (
          <div
            className=" xl:w-[380px] xl:h-[280px] md:w-[320px] md:h-[250px] w-full  bg-glass xl:mx-3 lg:mt-0 m-2 rounded-lg xl:p-10 md:p-8 p-10"
            key={data.title}
          >
            <div className=" md:w-[50px] md:h-[50px] w-[45px] h-[45px] flex items-center justify-center rounded-lg md:text-2xl text-xl bg-glass">
              {data.icon}
            </div>
            <p className=" md:text-lg text-[16px] font-semibold mt-6 mb-3">{data.title}</p>
            <p className=" md:text-[16px] text-sm font-light">{data.about}</p>
          </div>
        );
      })}
    </>
  );
};

export default FeatureCard;
