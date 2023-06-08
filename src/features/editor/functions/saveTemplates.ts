import toaster from "@/components/ui/toaster";
import { toast } from "react-hot-toast";

export const saveTemplates = (
  inputRef: React.RefObject<HTMLInputElement>,
  saveUserTemplates: (title: string) => void,
  currentUser: any,
  minText: boolean | null | undefined
) => {
  if (!currentUser) {
    toast.error("Log In to your account to save file");
  } else if (!minText) {
    toast.error("Write some text to save the file");
  } else {
    toaster({
      title: "Save Template",
      about: "You can save upto 3 templates in one account",
      type: "alert",
      input: true,
      toastRef: inputRef,
      btnOne: { title: "Cancel", onclcik: () => null },
      btnTwo: {
        title: "Save File",
        onclcik: () =>
          inputRef.current?.value && saveUserTemplates(inputRef.current?.value),
      },
    });
  }
};
