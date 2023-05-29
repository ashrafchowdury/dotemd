"use client";

import EditorMenu from "./components/EditorMenu";
import { EditorContent } from "@tiptap/react";
import { useEditor } from "./context/useEditor";
import InlineSelector from "./components/InlineSelector";

const TextEditor = () => {
  const { editorRef, editor } = useEditor();
  return (
    <section className=" w-full">
      <EditorMenu />

      <InlineSelector />
      {/***  TipTap RichTex tEditor ***/}
      <EditorContent ref={editorRef} editor={editor} className="editor" />
    </section>
  );
};

export default TextEditor;
