"use client";

import EditorMenu from "./components/EditorMenu";

const TextEditor = () => {
  return (
    <section className=" w-full">
      <EditorMenu />
      <textarea className="editor w-full min-h-[81vh] max-h-full bg-glass rounded-lg p-7 outline-none"></textarea>
    </section>
  );
};

export default TextEditor;
