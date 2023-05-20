import Image from "next/image";
import Documentation from "@/components/doc/documentation.mdx";
import Navigation from "@/components/doc/Navigation";
import Search from "@/components/doc/Search";
import HorizontalLine from "@/components/ui/HorizontalLine";
import { GithubIcon } from "@/components/ui/Icons";
import Label from "@/components/ui/Label";


const page = () => {
  return (
    <>
      <header className=" flex items-center justify-between mt-24">
        <div className=" w-[600px] flex flex-col items-start">
          <Label
            icon={<GithubIcon style=" text-lg mr-2" />}
            name="View Github Repository"
          />
          <h1 className=" lg:text-6xl md:text-5xl sm:text-4xl text-3xl lg:leading-[70px] font-bold mt-10 mb-4">
            Learn how to use the editor
          </h1>
          <p className=" lg:w-[90%] md:text-[16px] sm:text-sm text-xs text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            minus veniam vitae qui eum doloribus?
          </p>
          <Search />
        </div>
        <div>
          <Image
            src="./assets/editor.svg"
            width={500}
            height={500}
            alt="image"
          />
        </div>
      </header>

      <HorizontalLine style="my-32" />

      <article className=" border-l border-glass relative flex items-start justify-between mb-24">
        <div className="doc ml-20 w-[800px]">
          <Documentation />
        </div>

        <Navigation />
      </article>
    </>
  );
};

export default page;
