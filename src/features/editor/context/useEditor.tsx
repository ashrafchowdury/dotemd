import { useState, createContext, useContext } from "react";

type EditorContextType = {
  isTemplate?: boolean;
  setIsTemplate?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EditorContext = createContext<EditorContextType>({});

export const useEditor = (): EditorContextType => useContext(EditorContext);

const EditorDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [isTemplate, setIsTemplate] = useState(false);

  const value: EditorContextType = {
    isTemplate,
    setIsTemplate,
  };

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

export default EditorDataProvider;
