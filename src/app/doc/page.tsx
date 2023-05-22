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
      <header className=" flex items-center justify-between lg:mt-24 md:mt-20 mt-16">
        <div className=" lg:w-[600px] md:w-[600px] w-[90%] flex flex-col items-start">
          <Label
            icon={<GithubIcon style=" text-lg mr-2" />}
            name="View Github Repository"
          />
          <h1 className=" lg:text-6xl md:text-5xl sm:text-4xl text-3xl lg:leading-[70px] md:leading-[60px] font-bold mt-10 mb-4">
            Learn how to use the editor
          </h1>
          <p className=" md:w-[90%] md:text-[16px] sm:text-sm text-xs text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            minus veniam vitae qui eum doloribus?
          </p>
          <Search />
        </div>
        <div className="relative lg:w-[500px] lg:block hidden">
          <div className="gradiant lg:-top-5 lg:-left-5 lg:w-[560px] lg:h-[460px] bg-[#6016fc]"></div>
          <div className="gradiant lg:top-10 lg:-right-5 lg:w-[500px] lg:h-[400px] bg-[#fc165b]"></div>
          <Image
            src="./assets/editor.svg"
            width={500}
            height={500}
            alt="image"
          />
        </div>
      </header>

      <HorizontalLine style="lg:my-32 md:my-24 my-16" />

      <article className=" border-l border-glass relative flex lg:flex-row flex-col-reverse items-start justify-between mb-24">
        <div className="doc ml-6 md:ml-8 lg:ml-20 lg:w-[800px] w-[95%] lg:mr-6">
          <Documentation />
        </div>

        <Navigation />
      </article>
    </>
  );
};

export default page;
