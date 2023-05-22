import { ReactNode } from "react";
import Link from "next/link";

type ButtonType = {
  children: ReactNode;
  onclick?: () => void;
  style?: string;
  link?: string;
  disble?: boolean;
} & (
  | { link?: string; onclick?: never }
  | { link?: never; onclick: () => void }
);

const Button = ({ children, onclick, style, link, disble }: ButtonType) => {
  return (
    <>
      <Link href={link ? link : ""}>
        <button
          onClick={onclick}
          className={`${style} ${
            disble && "opacity-60"
          } lg:text-[16px] md:text-sm text-xs flex items-center rounded-lg py-2 px-7 font-medium bg-glass hover:opacity-80 duration-200`}
          disabled={disble}
        >
          {children}
        </button>
      </Link>
    </>
  );
};

export default Button;
