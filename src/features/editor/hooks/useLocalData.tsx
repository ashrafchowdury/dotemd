import { useRef } from "react";
import { useEditor } from "../context/EditorContext";
import toaster from "@/components/ui/toaster";

export const useLocalData = () => {
  const keyCountRef = useRef(0);
  const { editor } = useEditor();

  const updateLocalData = () => {
    keyCountRef.current += 1;
    // Execute as action after every 10 keyboard key presses
    if (keyCountRef.current % 10 === 0) {
      localStorage.setItem("editor", editor?.getHTML());
    }
  };

  const getLocalData = () => {
    const getLsData = localStorage.getItem("editor");
    if (getLsData) {
      toaster({
        title: "Restore Previous Data",
        about: "Restore your previous writing data",
        type: "alert",
        btnOne: { title: "Cancel", onclcik: () => null },
        btnTwo: {
          title: "Restore",
          onclcik: () => {
            editor?.commands.clearContent();
            editor?.commands.insertContent(getLsData);
          },
        },
      });
    }
  };

  return { updateLocalData, getLocalData };
};
