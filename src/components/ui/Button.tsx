import { ReactNode } from "react";

type ButtonType = {
  children: ReactNode;
  onclick?: any;
  style?: string;
  disable?: boolean;
  title?: string;
};

const Button = ({ children, onclick, style, disable, title }: ButtonType) => {
  return (
    <>
      <button
        onClick={onclick}
        className={`${style} ${
          disable && "opacity-60"
        } lg:text-[16px] md:text-sm text-xs flex items-center rounded-lg py-2 px-7 font-medium bg-glass hover:opacity-80 duration-200`}
        disabled={disable}
        title={title}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
