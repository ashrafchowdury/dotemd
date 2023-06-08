import FeatureCard from "@/components/home/FeatureCard";
import Features from "@/components/home/Features";
import Heading from "@/components/ui/Heading";
import Label from "@/components/ui/Label";
import Example from "@/components/home/Example";
import Fqa from "@/components/home/Fqa";
import { GithubIcon } from "@/components/ui/Icons";
import HorizontalLine from "@/components/ui/HorizontalLine";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { githubLink } from "@/utils/socialLinks";

const Home = () => {
  return (
    <>
      <header className=" relative lg:w-[950px] w-full h-[80vh] flex flex-col items-center justify-center mx-auto text-center sm:mb-0 sm:mt-0 mt-10 mb-16 lg:overflow-visible overflow-hidden">
        <div className="gradiant !-z-50 lg:top-[5px] md:top-[30px] top-[50px] center lg:w-[700px] md:w-[500px] w-[250px] lg:h-[700px] md:h-[500px] h-[250px] bg-[#6016fc]"></div>
        <div className="gradiant lg:top-[250px] lg:left-[450px] top-[180px] left-[50px] lg:w-[700px] md:w-[500px] w-[250px] lg:h-[700px] md:h-[500px] h-[250px] bg-[#16fcd2]"></div>
        <div className="gradiant lg:top-[250px] lg:left-[-250px] lg:right-0 top-[180px] right-[50px] lg:w-[700px] md:w-[500px] w-[250px] lg:h-[700px] md:h-[500px] h-[250px] bg-[#fca016]"></div>

        <Label
          icon={<GithubIcon style=" text-lg mr-2" />}
          name="View Github Repository"
          link={githubLink}
        />
        <h1 className=" lg:text-6xl md:text-5xl sm:text-4xl text-3xl lg:leading-[70px] font-bold mt-16 mb-6">
          It takes only a few minutes to create your{" "}
          <span className=" whitespace-nowrap">[ .md ]</span> file{" "}
        </h1>
        <p className=" lg:w-[70%] md:w-[85%] md:text-[16px] sm:text-sm text-xs mx-auto text-slate-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos atque
          voluptate nihil perferendis! Debitis ipsum libero blanditiis cumque
          modi quisquam voluptates? Dolorum nam facilis cum?
        </p>
        <div className=" mt-16 flex items-center md:space-x-6 space-x-4">
          <Link href="/editor">
            <Button style=" bg-primary py-3 ">Open Editor</Button>
          </Link>
          <Link href="/doc">
            <Button style="py-3 ">Learn More</Button>
          </Link>
        </div>
      </header>

      <section className="relative flex flex-col items-center lg:overflow-visible overflow-hidden">
        <div className="gradiant lg:top-[520px] top-[780px] lg:left-[0px] left-[140px] lg:w-[460px] w-[300px] lg:h-[460px] h-[300px] bg-[#fca016]"></div>
        <div className="gradiant lg:top-[700px] top-[950px] lg:left-[280px] lg:right-0 right-[140px] lg:w-[400px] w-[250px] lg:h-[400px] h-[250px] bg-[#16fcd2]"></div>
        <div className="gradiant lg:top-[1100px] top-[1600px] lg:right-[0px] right-[140px] lg:w-[460px] w-[300px] lg:h-[460px] h-[300px] bg-[#6016fc]"></div>
        <div className="gradiant lg:top-[1300px] top-[1800px] lg:right-[280px] lg:left-0 left-[140px] lg:w-[400px] w-[250px] lg:h-[400px] h-[250px] bg-[#fc165b]"></div>
        <div className="gradiant lg:top-[1700px] top-[2500px] lg:left-[0px] left-[140px] lg:w-[460px] w-[300px] lg:h-[460px] h-[300px] bg-[#fca016]"></div>
        <div className="gradiant lg:top-[1900px] top-[2700px] lg:left-[280px] lg:right-0 right-[140px] lg:w-[400px] w-[250px] lg:h-[400px] h-[250px] bg-[#6016fc]"></div>

        <Heading
          label="Features"
          title="Some of the great features we have"
          style=" lg:w-[500px] md:w-[420px] w-[320px] text-center"
        />

        <div className=" flex flex-wrap items-center justify-center mt-20 mb-24">
          <FeatureCard />
        </div>

        <Features />
      </section>

      <HorizontalLine style="md:my-32 my-24" />

      <section className=" relative flex flex-col items-center">
        <div className="gradiant top-[-80px] center lg:w-[700px] md:w-[500px] w-[300px] lg:h-[700px] md:h-[500px] h-[300px] bg-[#fc165b]"></div>
        <div className="circle top-[-80px] right-[200px] md:w-[55px] w-[45px] md:h-[55px] h-[45px] bg-gradient-to-r from-[#66ffa3] to-[#009c3e]"></div>
        <div className="circle top-[10px] left-[0px] md:w-[50px] w-[40px] md:h-[50px] h-[40px] bg-gradient-to-r from-[#ff81a6] to-[#fc165b]"></div>
        <div className="circle top-[180px] right-[0px] md:w-[40px] w-[30px] md:h-[40px] h-[30px] bg-gradient-to-r from-[#7e42ff] to-[#6016fc]"></div>

        <Heading
          label="Example"
          title="We have create amazing Readme file that you will not believe"
          style=" lg:w-[600px] md:w-[500px] sm:w-[450px] w-[95%] text-center"
        />
        <div className=" flex lg:flex-row flex-col items-center justify-center mt-20">
          <Example />
        </div>
      </section>

      <section className=" relative flex flex-col items-center mt-36 lg:overflow-visible overflow-hidden">
        <div className="gradiant lg:top-[80px] top-[160px] lg:left-[200px] left-[100px] lg:w-[450px] w-[300px] lg:h-[450px] h-[300px] bg-[#16fcd2]"></div>
        <div className="gradiant lg:top-[300px] top-[300px] lg:right-[200px] right-[100px] lg:w-[400px] w-[250px] lg:h-[400px] h-[250px] bg-[#6016fc]"></div>

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
        <h3 className="xl:w-[750px] lg:w-[600px] xl:text-4xl md:text-3xl sm:text-2xl text-xl lg:leading-[70px] font-bold lg:text-start text-center">
          We have prepared everything, it is time for you to tell the problem
        </h3>
        <div className=" flex items-center space-x-4 lg:mt-0 mt-12">
          <Link href="/editor">
            <Button style="bg-primary md:py-4 py-3 xl:px-10 md:px-8">
              Open Editor
            </Button>
          </Link>
          <Link href="/doc">
            <Button style="md:py-4 py-3 xl:px-10 md:px-8">Learn More</Button>
          </Link>
        </div>
      </section>

      <HorizontalLine style="mb-20 mt-6" />
    </>
  );
};

export default Home;
