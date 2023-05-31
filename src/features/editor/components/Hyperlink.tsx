"use client";
import { useState } from "react";
import { CroseIcon } from "@/components/ui/Icons";
import { useEditor } from "../context/useEditor";

type HyperlinkType = {
  setisLink: React.Dispatch<React.SetStateAction<"link" | "media" | "">>;
};

const Hyperlink = ({ setisLink }: HyperlinkType) => {
  const [link, setlink] = useState("");
  const { editor } = useEditor();

  return (
    <>
      <div className=" linkComponent flex flex-col items-start rounded-lg bg-dark border border-glass md:p-5 p-3 lg:w-[400px] md:w-[350px] sm:w-[280px] w-[280px]">
        <div className=" w-full flex justify-between items-center md:mb-4 mb-3">
          <p className=" md:text-sm text-xs font-meduim">🔗 Insert Link</p>{" "}
          <button
            className="  md:text-[16px] text-sm p-2 rounded-lg hover:dark:bg-darkBg duration-300"
            onClick={() => setisLink("")}
          >
            <CroseIcon />
          </button>
        </div>

        <input
          type="link"
          placeholder="🔗 Add Link"
          className="w-full px-3 py-2 md:text-xs text-[10px] rounded-lg bg-glass mt-2 outline-transparent"
          onChange={(e) => setlink(e.target.value)}
          autoFocus={true}
        />
        <button
          className=" bg-primary py-1 px-3 md:!mt-7 mt-4 rounded-lg md:text-xs text-[10px]"
          onClick={() => {
            editor?.commands.setLink({ href: link });
            setisLink("");
          }}
        >
          Insert Link
        </button>
      </div>
    </>
  );
};

export default Hyperlink;
