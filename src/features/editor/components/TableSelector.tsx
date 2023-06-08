"use client";

import { useEditor } from "../context/EditorContext";
import { BubbleMenu } from "@tiptap/react";
import { SlideIcon, TableIcon, CroseIcon } from "@/components/ui/Icons";

const TableSelector = () => {
  const { editor } = useEditor();

  const toggleSelector = () => editor.chain().focus();

  const closeIcon = (
    <CroseIcon style=" text-red-500 md:text-xs text-[10px] absolute top-1 right-1" />
  );
  return (
    <>
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          pluginKey="bubbleMenuForTable"
          shouldShow={({ editor, view, state, oldState, from, to }) => {
            // only show if table are active
            return editor?.isActive("table") && from !== to;
          }}
        >
          <section className="inlineSelector flex items-center justify-between space-x-2 py-1 px-2 bg-dark border border-glass rounded-lg">
            <button
              onClick={() => toggleSelector().addColumnAfter().run()}
              title="Add Column"
            >
              <SlideIcon />
            </button>
            <button
              onClick={() => toggleSelector().addRowAfter().run()}
              className={` rotate-90`}
              title="Add Row"
            >
              <SlideIcon />
            </button>
            <div className=" w-[2px] h-[20px] bg-glass mx-3"></div>
            <button
              onClick={() => toggleSelector().deleteColumn().run()}
              className={` relative`}
              title="Delete Column"
            >
              <SlideIcon />
              {closeIcon}
            </button>
            <button
              onClick={() => toggleSelector().deleteRow().run()}
              className={` relative rotate-90`}
              title="Delete Row"
            >
              <SlideIcon />
              <CroseIcon style=" text-red-500 md:text-xs text-[10px] absolute top-1 left-1" />
            </button>

            <button
              onClick={() => toggleSelector().deleteTable().run()}
              className={` relative`}
              title="Delete Table"
            >
              <TableIcon />
              {closeIcon}
            </button>
          </section>
        </BubbleMenu>
      )}
    </>
  );
};

export default TableSelector;
