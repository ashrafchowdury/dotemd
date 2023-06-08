"use client";
import TextEditor from "@/features/editor/TextEditor";
import Templates from "@/features/editor/components/Templates";
import EditorDataProvider from "@/features/editor/context/EditorContext";
import TemplateContextProvider from "@/features/editor/context/TemplateContext";

const Editor = () => {
  return (
    <main className=" relative flex items-start justify-between">
      <EditorDataProvider>
        <TemplateContextProvider>
          <Templates />
          <TextEditor />
        </TemplateContextProvider>
      </EditorDataProvider>
    </main>
  );
};

export default Editor;
