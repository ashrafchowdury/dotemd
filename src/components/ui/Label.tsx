import { ReactNode } from "react";
import Link from "next/link";
type LabelType = {
  icon?: ReactNode;
  name: string;
  style?: string;
  link?: string;
};
const Label = ({ icon, name, style, link = "/" }: LabelType) => {
  return (
    <Link
      href={link}
      target="_blank"
      className={` ${style} flex items-center py-2 px-4 rounded-full border border-glass cursor-pointer`}
    >
      <div>{icon}</div>
      <span className=" md:text-sm text-xs font-normal opacity-70 text-secondary">
        {name}
      </span>
    </Link>
  );
};

export default Label;
