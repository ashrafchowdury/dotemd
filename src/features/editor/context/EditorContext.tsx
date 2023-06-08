import { useState, createContext, useContext, useRef, Ref } from "react";
import { useEditor as useTiptap, PureEditorContent } from "@tiptap/react";
import { extensions } from "../extensions/extensions";

type EditorContextType = {
  isTemplate: boolean;
  setIsTemplate: React.Dispatch<React.SetStateAction<boolean>>;
  isKeyShortcut: boolean;
  setIsKeyShortcut: React.Dispatch<React.SetStateAction<boolean>>;
  editor: any;
  editorRef: Ref<PureEditorContent>;
  minText: boolean | null;
};

export const EditorContext = createContext<EditorContextType | null>(null);

export const useEditor = () => useContext(EditorContext)!;

const EditorDataProvider = ({ children }: { children: React.ReactNode }) => {
  //states
  const [isTemplate, setIsTemplate] = useState(false); // this state toggles the template section.
  const [isKeyShortcut, setIsKeyShortcut] = useState(false); // this state toggles the template section.

  //refs
  const editorRef = useRef(null);

  // hooks
  const editor = useTiptap({
    extensions: extensions,
  });

  const minText: boolean | null = editor && editor?.getText().length >= 10;

  const value: EditorContextType = {
    isTemplate,
    setIsTemplate,
    isKeyShortcut,
    setIsKeyShortcut,
    editor,
    editorRef,
    minText,
  };
  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

export default EditorDataProvider;
