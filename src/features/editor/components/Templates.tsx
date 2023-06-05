"use client";

import { useEditor } from "../context/useEditor";
import { useAuth } from "@/context/AuthContext";
import { useTemplates } from "../context/TemplateContext";
import { TrashIcon, FileIcon } from "@/components/ui/Icons";
import TemplateSkeleton from "./skeleton/TemplateSkeleton";
import Link from "next/link";

const Templates = () => {
  const { isTemplate, editor, setIsTemplate } = useEditor();
  const { currentUser } = useAuth();
  const { publicTemplates, userTemplates, deleteUserTemplates, isLoading } =
    useTemplates();

  const handleInsertData = (template: string) => {
    editor?.commands.clearContent();
    editor?.commands.insertContent(template);
    setIsTemplate?.(false);
  };

  if (!isTemplate) {
    return null;
  }
  return (
    <aside className=" absolute lg:sticky z-50 top-[62px] md:top-[71px] right-0 lg:top-0 left-0 bottom-0 lg:bg-transparent bg-glass lg:mr-3 flex items-start justify-start rounded-lg">
      <section className="relative flex flex-col items-start justify-start w-[90%] md:w-[280px] lg:w-[260px] xl:w-[300px] lg:h-[89vh] h-full lg:bg-glass bg-dark rounded-lg py-5 px-4">
        <p className="lg:mb-8 mb-6 opacity-60 text-sm"> Templates</p>

        <p className="mb-2 md:text-sm text-xs ">Public Templates</p>
        {publicTemplates?.map((data, ind) => {
          return (
            <div
              key={ind}
              className="w-full flex items-center overflow-hidden whitespace-nowrap border-b border-glass py-2 my-[10px] cursor-pointer duration-200"
              onClick={() => handleInsertData(data.template)}
            >
              <FileIcon style=" text-sm md:text-[16px] lg:text-lg" />{" "}
              <p className=" ml-2 text-sm md:text-sm lg:text-[16px]">
                {data.title}
              </p>
            </div>
          );
        })}
        {isLoading && publicTemplates?.length == 0 ? (
          <TemplateSkeleton />
        ) : null}

        <p className="mb-3 mt-8 md:text-sm text-xs ">Your Templates</p>
        {currentUser ? (
          <>
            {userTemplates?.map((data, ind) => {
              return (
                <div
                  key={ind}
                  className=" w-full group/item flex items-center justify-between border-b border-glass py-2 my-[10px] cursor-pointer duration-200"
                >
                  <div
                    className="flex items-center overflow-hidden whitespace-nowrap"
                    onClick={() => handleInsertData(data.template)}
                  >
                    <FileIcon style=" text-sm md:text-[16px] lg:text-lg" />{" "}
                    <p className=" ml-2 text-sm md:text-sm lg:text-[16px]">
                      {data.title}
                    </p>
                  </div>

                  <button onClick={() => deleteUserTemplates(data.$id)}>
                    <TrashIcon style=" invisible group-hover/item:visible hover:text-red-600 duration-300 text-xs md:text-[16px]" />
                  </button>
                </div>
              );
            })}
            {isLoading && <TemplateSkeleton />}

            {userTemplates?.length == 0 && !isLoading ? (
              <p className=" md:text-sm text-xs">Empty templates</p>
            ) : null}
          </>
        ) : (
          <Link
            href="/login"
            className=" w-full md:text-sm text-xs py-2 px-4 rounded-lg bg-glass"
          >
            Log In
          </Link>
        )}
      </section>
    </aside>
  );
};

export default Templates;
