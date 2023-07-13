"use client";

import { useState, useEffect } from "react";
import { useEditor } from "../context/EditorContext";
import { SlideIcon, TableIcon, CroseIcon } from "@/components/ui/Icons";

const TableSelector = () => {
  const [tableLocation, setTableLocation] = useState(0);
  const { editor } = useEditor();

  useEffect(() => {
    const findTablePosition = () => {
      const selection: any = window.getSelection();
      const range = selection.getRangeAt(0);
      const tableNode = range.startContainer?.closest?.("table");
      const editorElement = document.querySelector(".editor");

      if (tableNode && editorElement) {
        const activeTable = tableNode.getBoundingClientRect();
        const editorOffset = editorElement.getBoundingClientRect();
        const tableTop = activeTable.top - editorOffset.top;
        tableLocation !== tableTop && setTableLocation(tableTop);
      }
    };
    // Call the function if user click on the table
    window.addEventListener("click", findTablePosition);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("click", findTablePosition);
    };
  }, [tableLocation]);

  const toggleSelector = () => editor.chain().focus();

  const closeIcon = (
    <CroseIcon style=" text-red-500 md:text-xs text-[10px] absolute top-1 right-1" />
  );

  return (
    <section
      className={`inlineSelector absolute z-20 left-2/4 translate-x-[-50%] flex items-center justify-between md:space-x-2  overflow-hidden py-1 px-2 bg-dark border border-glass rounded-lg`}
      style={{
        top: `${tableLocation}px`,
      }}
    >
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
      <div className=" md:w-[2px] w-[1px] h-[20px] bg-glass md:mx-3 mx-1"></div>
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
        onClick={() => {
          toggleSelector().deleteTable().run();
          setTableLocation(0);
        }}
        className={` relative`}
        title="Delete Table"
      >
        <TableIcon />
        {closeIcon}
      </button>
    </section>
  );
};

export default TableSelector;
