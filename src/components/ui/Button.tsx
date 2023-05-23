import { ReactNode } from "react";

type ButtonType = {
  children: ReactNode;
  onclick?: () => void;
  style?: string;
  disble?: boolean;
};

const Button = ({ children, onclick, style, disble }: ButtonType) => {
  return (
    <>
      <button
        onClick={onclick}
        className={`${style} ${
          disble && "opacity-60"
        } lg:text-[16px] md:text-sm text-xs flex items-center rounded-lg py-2 px-7 font-medium bg-glass hover:opacity-80 duration-200`}
        disabled={disble}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
