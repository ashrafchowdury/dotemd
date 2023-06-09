"use client";

import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { CroseIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

type ToastType = {
  title: string;
  about?: string;
  type?: "alert" | "status";
  btnOne?: { title: string; onclcik: any };
  btnTwo?: { title: string; onclcik: any };
  input?: boolean;
  toastRef?: any;
};

const CustomToast = ({
  title,
  about,
  btnOne,
  btnTwo,
  input,
  toastRef,
  type,
}: ToastType) => {
  useEffect(() => {
    // if type == "alert" then then this function disable the window click
    const disableWindowClick = () => {
      if (type == "alert") {
        window.document.documentElement.style.pointerEvents = "none";
      }
    };
    disableWindowClick();
  }, []);

  const enableWindow = () => {
    window.document.documentElement.style.pointerEvents = "auto";
    toast.remove();
  };

  return (
    <div className=" text-start sm:w-[400px] w-[95%] sm:p-6 p-5 rounded-lg border border-glass bg-[#0B0B22]">
      <p className="sm:text-[16px] text-sm font-semibold flex items-center justify-between">
        {title}
        <button onClick={() => enableWindow()}>
          <CroseIcon style="cursor-pointer" />
        </button>
      </p>
      <p className=" sm:text-xs text-[10px] mt-3">{about}</p>
      {input && (
        <input
          type="text"
          placeholder="Enter URL"
          className="w-full px-4 py-2 sm:text-sm text-xs rounded-lg bg-glass mt-3 outline-transparent"
          ref={toastRef}
        />
      )}

      <div className="flex items-center">
        {btnOne?.title && (
          <Button
            style="sm:!text-xs !text-[10px] capitalize bg-transparent border border-glass !px-4 mr-3 mt-6"
            onclick={() => {
              btnOne?.onclcik();
              enableWindow();
            }}
          >
            {btnOne?.title}
          </Button>
        )}
        {btnTwo?.title && (
          <Button
            style="sm:!text-xs !text-[10px] capitalize !px-4 mt-6"
            onclick={() => {
              btnTwo?.onclcik();
              enableWindow();
            }}
          >
            {btnTwo?.title}
          </Button>
        )}
      </div>
    </div>
  );
};

const toaster = ({
  title,
  about,
  type = "status",
  btnOne,
  btnTwo,
  input,
  toastRef,
}: ToastType) => {
  toast.custom(
    <CustomToast
      title={title}
      about={about}
      btnOne={btnOne}
      btnTwo={btnTwo}
      input={input}
      toastRef={toastRef}
      type={type}
    />,
    {
      duration: type == "alert" ? 999999 : 2000,
    }
  );
};

export default toaster;
