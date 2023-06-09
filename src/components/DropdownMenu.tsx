"use client";
import { DoteMenuIcon } from "./ui/Icons";
import Link from "next/link";
import Button from "./ui/Button";
import HorizontalLine from "./ui/HorizontalLine";
import useDropdown from "@/hooks/useDropdown";
import { useAuth } from "@/context/AuthContext";

const DropdownMenu = () => {
  const { isDropdown, setIsDropdown, dropdownRef } = useDropdown();
  const { currentUser, logout } = useAuth();

  return (
    <>
      <div
        ref={dropdownRef}
        className={`relative ${currentUser ? "" : "lg:hidden"} block`}
      >
        <Button style="!p-2" onclick={() => setIsDropdown(!isDropdown)}>
          <DoteMenuIcon />
        </Button>
        {isDropdown && (
          <div className="absolute z-10 w-[250px] right-1 origin-top-right mt-2 rounded-lg bg-dark border border-glass">
            <div
              className="px-1 py-1 shadow-md rounded-lg flex flex-col"
              onClick={() => setIsDropdown(false)}
            >
              <p className=" text-sm px-3 mt-2 overflow-hidden whitespace-nowrap">
                {currentUser ? currentUser?.email : "About"}
              </p>
              <HorizontalLine style="mb-2 mt-3" />
              <Link
                href="/"
                className=" px-3 py-2 my-1 text-sm text-start font-medium rounded-md duration-300"
              >
                Home
              </Link>
              <Link
                href="/editor"
                className=" px-3 py-2 my-1 text-sm text-start font-medium rounded-md duration-300"
              >
                Editor
              </Link>
              <Link
                href="/doc"
                className=" px-3 py-2 my-1 text-sm text-start font-medium rounded-md duration-300"
              >
                Doc
              </Link>
              {currentUser ? (
                <button
                  className=" px-3 py-2 my-1 text-sm text-start font-medium rounded-md duration-300"
                  onClick={() => logout()}
                >
                  Log Out
                </button>
              ) : (
                <Link
                  href="/login"
                  className=" px-3 py-2 my-1 text-sm text-start font-medium rounded-md duration-300"
                >
                  Log In
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DropdownMenu;
