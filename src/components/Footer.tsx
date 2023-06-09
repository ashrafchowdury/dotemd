"use client";
import Logo from "./ui/Logo";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./ui/Icons";
import HorizontalLine from "./ui/HorizontalLine";
import { usePathname } from "next/navigation";
import {
  developerLink,
  githubLink,
  linkedinLink,
  twitterLink,
} from "@/utils/socialLinks";

const Footer = () => {
  const pathname = usePathname();

  if (pathname == "/editor") {
    return null;
  }
  return (
    <footer>
      <section className="w-full flex md:flex-row flex-col md:items-start items-center justify-between ">
        <div className="flex flex-col md:items-start items-center">
          <Logo />
          <p className="md:text-[16px] text-sm mt-6 mb-8 md:w-[400px] w-[300px] md:text-start text-center">
            Use the tool and create something stunning and asthetically blezzing
          </p>
          <div className=" flex items-center space-x-4">
            <Link href={githubLink} target="_blank">
              <GithubIcon style=" text-xl" />
            </Link>
            <Link href={twitterLink} target="_blank">
              <TwitterIcon style=" text-xl" />
            </Link>
            <Link href={linkedinLink} target="_blank">
              <LinkedinIcon style=" text-xl" />
            </Link>
          </div>
        </div>
        <div className=" flex items-start space-x-12 md:mt-0 mt-16">
          <div>
            <p className="text-sm text-slate-400 mb-6 md:text-start text-center">
              About
            </p>
            <div className="md:text-[16px] text-sm flex flex-col md:items-start items-center space-y-5 mt-4 ">
              <Link href="/">Home</Link>
              <Link href="#features">Feaures</Link>
              <Link href="/about">About Us</Link>
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-6 md:text-start text-center">
              Service
            </p>
            <div className="md:text-[16px] text-sm flex flex-col md:items-start items-center space-y-5 mt-4 ">
              <Link href="/editor">Create .md file</Link>
              <Link href="/editor">Open Editor</Link>
              <Link href="/doc">Documentation</Link>
            </div>
          </div>
        </div>
      </section>

      <HorizontalLine style="mt-10 mb-5" />

      <div className=" w-full flex md:flex-row flex-col md:items-start items-center justify-between mb-5">
        <div>
          <Link href={developerLink} target="_blank">
            Desigend & developed by
            <span className="ml-1 whitespace-nowrap underline underline-offset-[6px] decoration-1 decoration-wavy decoration-secondary">
              Ashraf Chowdury
            </span>
          </Link>
        </div>
        <p className="md:text-sm text-xs md:mt-0 mt-5">
          ©2023 All rights reserved by dotemd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
