"use client";
import TextEditor from "@/features/editor/TextEditor";
import Templates from "@/features/templates/Templates";
import EditorDataProvider from "@/features/editor/context/useEditor";

const page = () => {
  return (
    <main className=" relative flex items-start justify-between">
      <EditorDataProvider>
        <Templates />
        <TextEditor />
      </EditorDataProvider>
    </main>
  );
};

export default page;
