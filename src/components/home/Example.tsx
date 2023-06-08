import Image from "next/image";
import { example } from "@/utils/example";

const Example = () => {
  return (
    <>
      {example.map((data) => {
        return (
          <div
            key={data.title}
            className=" lg:w-[500px] md:w-[550px] sm:w-[450px] w-[95%] flex flex-col items-center text-center lg:mt-0 mt-6"
          >
            <div className=" lg:w-[500px] md:w-[550px] sm:w-[450px] w-[95%]">
              <Image
                src={data.img}
                width={700}
                height={700}
                loading="lazy"
                alt="example image"
              />
            </div>
            <p className=" text-lg font-medium">{data.title}</p>
            <p className=" text-sm text-slate-300 mt-2 w-[95%]">{data.about}</p>
            <a
              href={data.link}
              target="_blank"
              className=" bg-glass border border-glassBorder py-1 px-6 rounded-full mt-10"
            >
              View
            </a>
          </div>
        );
      })}
    </>
  );
};

export default Example;
