"use client";
import Link from "next/link";
import Logo from "./ui/Logo";
import Button from "./ui/Button";
import { usePathname } from "next/navigation";
import { KeyboardIcon, SlideIcon } from "./ui/Icons";
import DropdownMenu from "./DropdownMenu";
import Badge from "./ui/Badge";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className=" w-full md:h-[100px] h-[80px] flex items-center justify-between">
      <div className=" flex items-center">
        <Logo />
        <div className="pageLinks lg:flex hidden items-center ml-8">
          <Link href="/">Home</Link>
          <Link href="/editor">Editor</Link>
          <Link href="/templates">Templates</Link>
          <Link href="/doc">
            Doc <Badge title="New" variant="green" />
          </Link>
          <Link href="/about">About</Link>
        </div>
      </div>
      <div className=" flex items-center">
        {pathname == "/editor" && (
          <>
            <Button style="!p-2 mr-3">
              <SlideIcon />
            </Button>
            <Button style="!p-2">
              <KeyboardIcon />
            </Button>
            <div className=" w-[2px] h-6 bg-glass mx-4"></div>
          </>
        )}

        <Button style="lg:block hidden">
          Log In
        </Button>
        <DropdownMenu />
      </div>
    </nav>
  );
};

export default Navbar;
