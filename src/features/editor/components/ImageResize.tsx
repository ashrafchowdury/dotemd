"use client";

import { useEditor } from "../context/EditorContext";
import Moveable from "react-moveable";

const ImageResize = () => {
  const { editor } = useEditor();

  const updateMediaSize = () => {
    const imageInfo = document.querySelector(
      ".ProseMirror-selectednode"
    ) as HTMLImageElement;
    if (imageInfo) {
      editor.commands.setImage({
        src: imageInfo.src,
        width: Number(imageInfo.style.width.replace("px", "")),
        height: Number(imageInfo.style.height.replace("px", "")),
      });
    }
  };

  return (
    <>
      <Moveable
        target={document.querySelector(".ProseMirror-selectednode") as any}
        container={null}
        origin={true}
        /* Resize event edges */
        edge={false}
        throttleDrag={0}
        /* When resize or scale, keeps a ratio of the width, height. */
        keepRatio={true}
        /* resizable*/
        /* Only one of resizable, scalable, warpable can be used. */
        resizable={true}
        throttleResize={0}
        onResize={({
          target,
          width,
          height,
          dist,
          delta,
          direction,
          clientX,
          clientY,
        }: any) => {
          delta[0] && (target!.style.width = `${width}px`);
          delta[1] && (target!.style.height = `${height}px`);
        }}
        onResizeEnd={({ target, isDrag, clientX, clientY }: any) => {
          updateMediaSize();
        }}
        /* scalable */
        /* Only one of resizable, scalable, warpable can be used. */
        scalable={true}
        throttleScale={0}
        onScale={({
          target,
          scale,
          dist,
          delta,
          transform,
          clientX,
          clientY,
        }: any) => {
          target!.style.transform = transform;
        }}
      />
    </>
  );
};

export default ImageResize;
