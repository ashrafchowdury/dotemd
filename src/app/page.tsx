import FeatureCard from "@/components/FeatureCard";
import Features from "@/components/Features";
import Heading from "@/components/ui/Heading";
import Label from "@/components/ui/Label";
import Example from "@/components/Example";
import Fqa from "@/components/Fqa";
import { GithubIcon } from "@/components/ui/Icons";
import HorizontalLine from "@/components/ui/HorizontalLine";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className=" lg:w-[950px] w-full h-[80vh] flex flex-col items-center justify-center mx-auto text-center">
        <Label
          icon={<GithubIcon style=" text-lg mr-2" />}
          name="View Github Repository"
        />
        <h1 className=" lg:text-6xl md:text-5xl sm:text-4xl text-3xl lg:leading-[70px] font-bold mt-16 mb-6">
          It takes only a few minutes to create your <span className=" whitespace-nowrap">[ .md ]</span> file{" "}
        </h1>
        <p className=" lg:w-[70%] md:w-[85%] md:text-[16px] sm:text-sm text-xs mx-auto text-slate-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos atque
          voluptate nihil perferendis! Debitis ipsum libero blanditiis cumque
          modi quisquam voluptates? Dolorum nam facilis cum?
        </p>
        <div className=" mt-16 flex items-center md:space-x-6 space-x-4">
          <Button style=" bg-primary py-3 " link="/editor">
            Open Editor
          </Button>
          <Button style="py-3 ">Learn More</Button>
        </div>
      </header>

      <section className=" flex flex-col items-center">
        <Heading label="Features" title="Some of the great features we have" style=" lg:w-[500px] md:w-[420px] w-[320px] text-center" />

        <div className=" flex flex-wrap items-center justify-center mt-20 mb-24">
          <FeatureCard />
        </div>

        <Features />
      </section>

      <HorizontalLine style="md:my-32 my-24" />

      <section className=" flex flex-col items-center">
        <Heading
          label="Example"
          title="We have create amazing Readme file that you will not believe"
          style=" lg:w-[600px] md:w-[500px] sm:w-[450px] w-[95%] text-center"
        />
        <div className=" flex lg:flex-row flex-col items-center justify-center mt-20">
          <Example />
        </div>
      </section>

      <section className=" flex flex-col items-center mt-36">
        <Heading
          label="FQA"
          title="Frequently Asked Questions from the Users"
          style=" lg:w-[550px] md:w-[450px] sm:w-[380px] w-[320px] text-center"
        />
        <div className=" md:w-[750px] sm:w-[550px] w-[95%] mt-24">
          <Fqa />
        </div>
      </section>

      <section className=" lg:h-[300px] bg-glass flex lg:flex-row flex-col items-center justify-between rounded-lg md:p-12 sm:p-10 p-8 mt-36">
        <h3 className="xl:w-[750px] lg:w-[600px] xl:text-4xl md:text-3xl sm:text-2xl text-xl lg:leading-[55px] font-bold lg:text-start text-center">
          We have prepared everything, it is time for you to tell the problem
        </h3>
        <div className=" flex items-center space-x-4 lg:mt-0 mt-12">
          <Button style="bg-primary md:py-4 py-3 xl:px-10 md:px-8">Open Editor</Button>
          <Button style="md:py-4 py-3 xl:px-10 md:px-8">Learn More</Button>
        </div>
      </section>

      <HorizontalLine style="mb-20 mt-6" />
    </>
  );
}
