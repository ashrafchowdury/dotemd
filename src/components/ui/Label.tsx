import { ReactNode } from "react";

type LabelType = {
  icon?: ReactNode;
  name: string;
  style?: string;
};
const Label = ({ icon, name, style }: LabelType) => {
  return (
    <div
      className={` ${style} flex items-center py-2 px-4 rounded-full bg-glass border-2 border-glassBorder cursor-pointer`}
    >
      <div>{icon}</div>
      <span className=" md:text-sm text-xs font-semibold text-secondary">{name}</span>
    </div>
  );
};

export default Label;
