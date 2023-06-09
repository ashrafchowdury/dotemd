import React, { useState, useEffect } from "react";
import { CroseIcon } from "@/components/ui/Icons";
import { useEditor } from "../context/EditorContext";

type MediaResizerType = {
  setisLink: React.Dispatch<React.SetStateAction<"link" | "media" | "">>;
};

const MediaResizer = ({ setisLink }: MediaResizerType) => {
  const { editor } = useEditor();
  const [link, setLink] = useState("");
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const getMediaInfo = () => {
      // this selector helps us to get image info
      const imageInfo = document.querySelector(
        ".ProseMirror-selectednode"
      ) as HTMLImageElement;
      // this selector helps us to get iframe info
      const videoInfo = document.querySelector(
        ".ProseMirror-selectednode iframe"
      ) as HTMLImageElement;
      // taking value from one of them
      const mediaInfo = videoInfo ?? imageInfo;

      if (mediaInfo) {
        setWidth(mediaInfo.width);
        setHeight(mediaInfo.height);
        setLink(mediaInfo.src);
      }
    };
    getMediaInfo();
  }, []);

  const handleUpdateMedia = () => {
    editor.commands.setImage({ src: link, width: width, height: height });
    setisLink("");
  };

  return (
    <>
      <section
        className={` md:w-[350px] w-[220px] rounded-lg bg-dark p-3 border border-glass`}
      >
        <div className=" w-full flex justify-between items-center md:mb-4 mb-3">
          <p className=" md:text-sm text-xs font-meduim">🔗 Update Media</p>{" "}
          <button
            className="  md:text-[16px] text-sm p-2 rounded-lg hover:dark:bg-darkBg duration-300"
            onClick={() => setisLink("")}
          >
            <CroseIcon />
          </button>
        </div>

        <div className=" flex justify-between items-center">
          <input
            type="link"
            placeholder="Update Image URL"
            className="md:w-[180px] w-[100px] md:px-4 px-2 py-[10px] text-xs rounded-lg bg-glass outline-transparent"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          <input
            type="number"
            placeholder="Width"
            value={width}
            className="md:w-[60px] w-[40px] md:px-2 px-1 py-[10px] text-xs rounded-lg bg-glass outline-transparent"
            onChange={(e) => setWidth(parseInt(e.target.value))}
          />
          <input
            type="number"
            placeholder="Height"
            value={height}
            className="md:w-[60px] w-[40px] md:px-2 px-1 py-[10px] text-xs rounded-lg bg-glass outline-transparent"
            onChange={(e) => setHeight(parseInt(e.target.value))}
          />
        </div>
        <button
          className=" bg-primary py-1 px-3 md:!mt-7 mt-3 rounded-lg md:text-xs text-[10px]"
          onClick={handleUpdateMedia}
        >
          Update
        </button>
      </section>
    </>
  );
};

export default MediaResizer;
