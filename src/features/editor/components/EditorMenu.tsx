"use client";

import Button from "@/components/ui/Button";
import { SaveIcon, SlideIcon, KeyboardIcon } from "@/components/ui/Icons";
import { useEditor } from "../context/useEditor";

const EditorMenu = () => {
  const { isTemplate, setIsTemplate } = useEditor();

  return (
    <div className=" w-full flex justify-between items-center md:h-[60px] h-[50px] px-4 bg-glass rounded-lg mb-3 overflow-auto">
      <p className=" lg:text-[16px] md:text-sm text-xs flex items-center mr-8">
        Editor
        <span>
          <SaveIcon style="ml-3" />
        </span>
      </p>

      <div className=" flex items-center space-x-2">
        <Button
          style="!p-2"
          onclick={() =>
            isTemplate ? setIsTemplate?.(false) : setIsTemplate?.(true)
          }
        >
          <SlideIcon />
        </Button>
        <Button style="!p-2">
          <KeyboardIcon />
        </Button>
      </div>
    </div>
  );
};

export default EditorMenu;
