"use client";
import Link from "next/link";
import Logo from "./ui/Logo";
import Button from "./ui/Button";
import { usePathname } from "next/navigation";
import { GithubIcon } from "./ui/Icons";
import DropdownMenu from "./DropdownMenu";
import { githubLink } from "@/utils/socialLinks";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { currentUser } = useAuth();
  const pathname = usePathname();

  return (
    <nav className=" w-full md:h-[100px] h-[80px] flex items-center justify-between">
      <div className=" flex items-center">
        <Logo />
        {pathname != "/editor" && (
          <div className="pageLinks lg:flex hidden items-center ml-8">
            <Link href="/">Home</Link>
            <Link href="/editor">Editor</Link>
            <Link href="/doc">Documentation</Link>
            <Link href="/about">About</Link>
          </div>
        )}
      </div>
      <div className=" flex items-center">
        <Link href={githubLink} target="_blank">
          <Button style="!p-2">
            <GithubIcon />
          </Button>
        </Link>

        <div className=" w-[2px] h-6 bg-glass mx-4"></div>

        <DropdownMenu />
        {!currentUser && (
          <Link href="/login">
            <Button style="lg:block hidden">Log In</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
