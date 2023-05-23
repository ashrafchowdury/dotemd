"use client";
import { DoteMenuIcon } from "./ui/Icons";
import Link from "next/link";
import Button from "./ui/Button";
import HorizontalLine from "./ui/HorizontalLine";
import useDropdown from "@/hooks/useDropdown";

const DropdownMenu = () => {
  const { dropdown, setDropdown } = useDropdown();

  return (
    <>
      <div className="relative lg:hidden md:block">
        <Button
          style="!p-2"
          onclick={() => (dropdown ? setDropdown(false) : setDropdown(true))}
        >
          <DoteMenuIcon />
        </Button>
        {dropdown && (
          <div className="absolute z-10 w-[250px] right-1 origin-top-right mt-2 rounded-lg bg-glass">
            <div className="px-1 py-1 shadow-md rounded-lg flex flex-col ">
              <p className="px-3 mt-2 overflow-hidden whitespace-nowrap">
                About
              </p>
              <HorizontalLine style="my-1" />
              <Link
                href="/"
                className="flex items-center px-3 py-2 my-1 text-sm text-start font-medium rounded-md duration-300"
              >
                Home
              </Link>
              <Link
                href="/editor"
                className="flex items-center px-3 py-2 my-1 text-sm text-start font-medium rounded-md duration-300"
              >
                Editor
              </Link>
              <Link
                href="/templates"
                className="flex items-center px-3 py-2 my-1 text-sm text-start font-medium rounded-md duration-300"
              >
                Templates
              </Link>
              <Link
                href="/doc"
                className="flex items-center px-3 py-2 my-1 text-sm text-start font-medium rounded-md duration-300"
              >
                Doc
              </Link>
              <Link
                href="/login"
                className="flex items-center px-3 py-2 my-1 text-sm text-start font-medium rounded-md duration-300"
              >
                Log In
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DropdownMenu;
