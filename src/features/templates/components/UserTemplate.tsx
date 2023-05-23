'use client'
import { TrashIcon, FileIcon } from "@/components/ui/Icons";

const UserTemplate = () => {
  return (
    <div className=" w-full group/item flex items-center justify-between border-b border-glass py-2 my-3 cursor-pointer duration-200">
      <div className="flex items-center overflow-hidden whitespace-nowrap">
        <FileIcon style=" text-sm md:text-[16px] lg:text-lg" />{" "}
        <p className=" ml-2 text-sm md:text-sm lg:text-[16px]">Template</p>
      </div>

      <TrashIcon style=" invisible group-hover/item:visible hover:text-red-600 duration-300 text-xs md:text-[16px]" />
    </div>
  );
};

export default UserTemplate;
