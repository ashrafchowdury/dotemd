"use client";

import Button from "@/components/ui/Button";
import {
  SaveIcon,
  SlideIcon,
  KeyboardIcon,
  CopyIcon,
  CroseIcon,
  DownloadIcon,
  UndoIcon,
  RedoIcon,
} from "@/components/ui/Icons";
import { useEditor } from "../context/EditorContext";
import { useTemplates } from "../context/TemplateContext";
import { useAuth } from "@/context/AuthContext";
// functions
import { copyCode } from "../functions/copyCode";
import { clearCode } from "../functions/clearCode";
import { downloadFile } from "../functions/downloadFile";

const EditorMenu = () => {
  const {
    isTemplate,
    setIsTemplate,
    setIsKeyShortcut,
    editor,
    minText,
    toastRef,
  } = useEditor();
  const { currentUser } = useAuth() ?? {};
  const {
    publicTemplates,
    userTemplates,
    saveAndUpdateTemplates,
    getUserTemplates,
    getPublicTemplates,
    documentId,
    setDocumentId,
  } = useTemplates();

  const handleGetTemplates = () => {
    isTemplate ? setIsTemplate(false) : setIsTemplate(true);

    if (publicTemplates?.length == 0) {
      getPublicTemplates();
    }
    if (userTemplates?.length == 0 && currentUser) {
      getUserTemplates();
    }
  };
  return (
    <div className=" w-full flex justify-between items-center md:h-[60px] h-[50px] px-4 bg-glass rounded-lg mb-3 overflow-auto">
      <p className=" lg:text-[16px] md:text-sm text-xs flex items-center mr-8">
        Editor
        <span>
          <SaveIcon style="ml-3" />
        </span>
      </p>

      <div className="editorMenu !text-sm flex items-center md:space-x-3 space-x-2">
        <Button
          style="!p-2"
          onclick={() => handleGetTemplates()}
          title="Open Template"
        >
          <SlideIcon />
        </Button>
        <Button
          style="!p-2"
          onclick={() => setIsKeyShortcut(true)}
          title="Keyboard Shortcuts"
        >
          <KeyboardIcon />
        </Button>

        <div className=" w-[1px] h-6 bg-glass"></div>

        <Button
          style="!p-2"
          onclick={() => editor.commands.undo()}
          title="Undo"
        >
          <UndoIcon />
        </Button>

        <Button
          style="!p-2"
          onclick={() => editor.commands.redo()}
          title="Redo"
        >
          <RedoIcon />
        </Button>

        <div className=" w-[1px] h-6 bg-glass"></div>
        <Button
          style="!p-2"
          onclick={() => saveAndUpdateTemplates()}
          title="Save File"
        >
          <SaveIcon />
        </Button>

        <Button
          style="!p-2"
          onclick={() => downloadFile(toastRef, editor, minText)}
          title="Download File"
        >
          <DownloadIcon />
        </Button>

        <Button
          style="!p-2"
          onclick={() => minText && copyCode(editor)}
          title="Copy Code"
        >
          <CopyIcon />
        </Button>

        <Button
          style="!p-2"
          onclick={() => {
            minText && clearCode(editor);
            documentId && setDocumentId("");
          }}
          title="Clearn Editor"
        >
          <CroseIcon />
        </Button>
      </div>
    </div>
  );
};

export default EditorMenu;
