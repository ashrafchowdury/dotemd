import { ArrowDownIcon } from "../ui/Icons";
import { fqaQuestions } from "@/utils/fqa";

const Fqa = () => {
  return (
    <>
      {fqaQuestions.map((data, index) => {
        return (
          <details key={index} className="group py-5 border-b border-glass">
            <summary className="flex items-center justify-between cursor-pointer py-1 font-medium md:text-xl text-[16px]">
              {data.qus}
              <ArrowDownIcon style=" lg:text-xl md:text-lg text-sm rotate-0 transform group-open:rotate-180" />
            </summary>
            <p className=" md:text-[16px] text-xs md:leading-7 leading-5 py-5 font-normal">
              {data.ans}
            </p>
          </details>
        );
      })}
    </>
  );
};

export default Fqa;
