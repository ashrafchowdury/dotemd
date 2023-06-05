"use client";

import { useRef } from "react";
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
import { useEditor } from "../context/useEditor";
import { useTemplates } from "../context/TemplateContext";
import { useAuth } from "@/context/AuthContext";
// functions
import { copyCode } from "../functions/copyCode";
import { clearCode } from "../functions/clearCode";
import { downloadFile } from "../functions/downloadFile";
import { saveTemplates } from "../functions/saveTemplates";

const EditorMenu = () => {
  const { isTemplate, setIsTemplate, editor, minText } = useEditor();
  const { currentUser } = useAuth();
  const {
    publicTemplates,
    userTemplates,
    saveUserTemplates,
    getUserTemplates,
    getPublicTemplates,
  } = useTemplates();
  //  this ref helps us to get value from toaster input
  const inputRef = useRef<HTMLInputElement>(null);

  const handleGetTemplates = () => {
    isTemplate ? setIsTemplate?.(false) : setIsTemplate?.(true);

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
        <Button style="!p-2" onclick={() => handleGetTemplates()}>
          <SlideIcon />
        </Button>
        <Button style="!p-2">
          <KeyboardIcon />
        </Button>

        <div className=" w-[1px] h-6 bg-glass"></div>

        <Button style="!p-2" onclick={() => editor.commands.undo()}>
          <UndoIcon />
        </Button>

        <Button style="!p-2" onclick={() => editor.commands.redo()}>
          <RedoIcon />
        </Button>

        <div className=" w-[1px] h-6 bg-glass"></div>
        <Button
          style="!p-2"
          onclick={() =>
            saveTemplates(inputRef, saveUserTemplates, currentUser, minText)
          }
        >
          <SaveIcon />
        </Button>

        <Button style="!p-2" onclick={() => downloadFile(inputRef, editor)}>
          <DownloadIcon />
        </Button>

        <Button style="!p-2" onclick={() => copyCode(editor)}>
          <CopyIcon />
        </Button>

        <Button style="!p-2" onclick={() => clearCode(editor)}>
          <CroseIcon />
        </Button>
      </div>
    </div>
  );
};

export default EditorMenu;
