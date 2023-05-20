import { Fragment } from "react";
import HorizontalLine from "../ui/HorizontalLine";
import { tableOfContent } from "./tableOfContent";

const Navigation = () => {
  return (
    <aside className=" w-[280px] sticky top-[80px] right-0 bg-glass border-2 border-glassBorder pb-2 rounded-lg">
      <p className="text-sm font-semibold my-4 mx-5">Table of Contents</p>
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
