"use client";

import { example } from "@/utils/example";
import Image from "next/image";

const Example = () => {
  return (
    <>
      {example.map((data) => {
        return (
          <div
            key={data.title}
            className=" lg:w-[500px] md:w-[550px] sm:w-[450px] w-[95%] flex flex-col items-center text-center lg:mt-0 mt-6"
          >
            <div className=" lg:w-[450px] md:w-[550px] sm:w-[450px] w-[95%] border border-glass p-2 rounded-lg mb-12">
              <Image
                src={data.img}
                width={700}
                height={700}
                loading="lazy"
                alt="example image"
                className=" rounded-lg"
              />
            </div>
            <p className=" lg:text-lg md:text-[16px] text-sm font-medium">
              {data.title}
            </p>
            <p className=" md:text-sm text-xs text-slate-300 mt-2 w-[95%]">
              {data.about}
            </p>
            <a
              href={data.link}
              target="_blank"
              className="lg:text-[16px] md:text-sm text-xs bg-glass border border-glassBorder py-1 px-6 rounded-full mt-10"
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
