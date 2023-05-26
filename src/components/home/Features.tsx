import Image from "next/image";
import Heading from "../ui/Heading";

type FeaturesType = {
  image: string;
  label: string;
  title: string;
  about: string;
  style?: string;
};

const Feature = () => {
  const features: FeaturesType[] = [
    {
      image: "./assets/editor.svg",
      label: "Markdown",
      title: "We provide polish markdown to us an output",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero nam dolore, nesciunt facilis repellendus consequatur dolor debitis iusto. Commodi? Sequi vero nam dolore, nesciunt facilis repellendus consequatur dolor debitis iusto.",
    },
    {
      image: "./assets/workflow.svg",
      label: "How we work",
      title: "Everything is well planned & well designed",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero nam dolore, nesciunt facilis repellendus consequatur dolor debitis iusto. Commodi? Sequi vero nam dolore, nesciunt facilis repellendus consequatur dolor debitis iusto.",
      style: "lg:flex-row-reverse",
    },
    {
      image: "./assets/code.svg",
      label: "Code",
      title: "We provide polish markdown to us an output",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero nam dolore, nesciunt facilis repellendus consequatur dolor debitis iusto. Commodi? Sequi vero nam dolore, nesciunt facilis repellendus consequatur dolor debitis iusto.",
    },
  ];
  return (
    <>
      {features.map((data) => {
        return (
          <div
            className={`${data?.style} flex lg:flex-row flex-col lg:items-center items-start justify-between lg:my-20 my-16`}
            key={data.image}
          >
            <div className=" lg:w-[500px] md:w-[450px] sm:w-[400px] w-[95%]">
              <Image
                src={data?.image}
                width={500}
                height={500}
                loading="lazy"
                alt="feature images"
              />
            </div>

            <div
              className={`${
                data?.style ? "lg:mr-10" : "lg:ml-10"
              } lg:mt-0 mt-6 lg:w-[500px] md:w-[420px] sm:w-[380px] w-[95%]`}
            >
              <Heading label={data?.label} title={data?.title} />
              <p className=" md:mt-8 sm:mt-6 mt-5  md:text-[16px] text-sm md:leading-7 leading-5 ">
                {data?.about}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Feature;
