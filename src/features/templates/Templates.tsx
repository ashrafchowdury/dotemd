"use client";

import { Fragment } from "react";
import { useEditor } from "../editor/context/useEditor";
import UserTemplate from "./components/UserTemplate";

const Templates = () => {
  const { isTemplate } = useEditor();
  if (!isTemplate) {
    return null;
  }
  return (
    <aside className=" absolute lg:sticky z-50 top-[62px] md:top-[71px] right-0 lg:top-0 left-0 bottom-0 lg:bg-transparent bg-glass lg:mr-3 flex items-start justify-start rounded-lg">
      <section className="flex flex-col items-start justify-start w-[90%] md:w-[280px] lg:w-[300px] lg:h-[89vh] h-full bg-dark border border-glass rounded-lg py-5 px-4">
        <p className="lg:mb-8 mb-6"> Templates</p>

        {[1, 2, 3, 4]?.map((data, ind) => {
          return (
            <Fragment key={ind}>
              <UserTemplate />
            </Fragment>
          );
        })}
      </section>
    </aside>
  );
};

export default Templates;
