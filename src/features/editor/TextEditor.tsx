"use client";

import EditorMenu from "./components/EditorMenu";
import { EditorContent } from "@tiptap/react";
import { useEditor } from "./context/useEditor";
import InlineSelector from "./components/InlineSelector";
import TableSelector from "./components/TableSelector";

const TextEditor = () => {
  const { editorRef, editor } = useEditor();
  return (
    <section className=" w-full">
      <EditorMenu />
      <InlineSelector />
      <TableSelector />

      {/***  TipTap RichText Editor ***/}
      <EditorContent ref={editorRef} editor={editor} className="editor" />
    </section>
  );
};

export default TextEditor;
