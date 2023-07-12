"use client";

import { useEffect } from "react";
import EditorMenu from "./components/EditorMenu";
import { EditorContent } from "@tiptap/react";
import { useEditor } from "./context/EditorContext";
import InlineSelector from "./components/InlineSelector";
import TableSelector from "./components/TableSelector";
import { useLocalData } from "./hooks/useLocalData";
import ShortCuts from "./components/ShortCuts";
import EditorSkeleton from "./components/skeleton/EditorSkeleton";
import ImageResize from "./components/ImageResize";

const TextEditor = () => {
  const { editorRef, editor } = useEditor();
  const { updateLocalData, getLocalData } = useLocalData();

  useEffect(() => {
    getLocalData();
  }, [editor]);

  return (
    <section className=" w-full">
      <EditorMenu />
      <InlineSelector />
      <TableSelector />
      <ShortCuts />

      {/***  TipTap RichText Editor ***/}
      <EditorContent
        ref={editorRef}
        editor={editor}
        className="editor"
        onKeyDown={updateLocalData}
      />
      {editor?.isActive("image") && <ImageResize />}
      {!editor && <EditorSkeleton />}
    </section>
  );
};

export default TextEditor;
