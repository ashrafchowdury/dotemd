import { Fragment } from "react";
import HorizontalLine from "../ui/HorizontalLine";
import { tableOfContent } from "../../utils/tableOfContent";

const Navigation = () => {
  return (
    <aside className=" lg:w-[280px] sticky lg:top-[80px] right-0 bg-glass border-2 border-glassBorder pb-2 rounded-lg lg:block hidden">
      <p className="text-sm font-semibold my-4 mx-5 flex items-center justify-between group/item ">
        Table of Contents{" "}
        <span className=" invisible group-hover/item:visible">^.^</span>
      </p>
      <HorizontalLine style="my-4" />
      <div className=" flex flex-col space-y-1">
        {tableOfContent?.map((parentData, parentInd) => {
          return (
            <Fragment key={parentInd}>
              <a
                href={`#${parentData.parent}`}
                className="text-sm capitalize font-semibold hover:bg-glassBorder px-5 py-2"
              >
                {parentData.parent}
              </a>
              <div className=" w-full text-sm font-medium ">
                {parentData.childrens?.map((childData, childInd) => {
                  return (
                    <a
                      key={childInd}
                      href={`#${childData}`}
                      className="hover:bg-glassBorder px-9 py-2 capitalize"
                    >
                      {childData}
                    </a>
                  );
                })}
              </div>
            </Fragment>
          );
        })}
      </div>
    </aside>
  );
};

export default Navigation;
