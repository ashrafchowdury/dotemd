"use client";

import { toast } from "react-hot-toast";
import { CroseIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

type ToastType = {
  title: string;
  about: string;
  type?: "alert" | "status";
  btnOne?: { title: string; onclcik: any };
  btnTwo?: { title: string; onclcik: any };
};

const toaster = ({
  title,
  about,
  type = "status",
  btnOne,
  btnTwo,
}: ToastType) => {
  toast.custom(
    <div className=" text-start sm:w-[400px] w-[95%] sm:p-6 p-5 rounded-lg border border-glass bg-[#0B0B22]">
      <p className="sm:text-lg text-[16px] font-semibold flex items-center justify-between">
        {title}
        <button onClick={() => toast.remove()}>
          <CroseIcon style="cursor-pointer" />
        </button>
      </p>
      <p className=" sm:text-xs text-[10px] mt-3">{about}</p>
      <div className="flex items-center">
        {btnOne?.title && (
          <Button
            style="sm:!text-xs !text-[10px] capitalize bg-transparent border border-glass !px-4 mr-3 mt-7"
            onclick={btnOne?.onclcik}
          >
            {btnOne?.title}
          </Button>
        )}
        {btnTwo?.title && (
          <Button
            style="sm:!text-xs !text-[10px] capitalize !px-4 mt-7"
            onclick={btnTwo?.onclcik}
          >
            {btnTwo?.title}
          </Button>
        )}
      </div>
    </div>,
    {
      duration: type == "alert" ? 999999 : 4000,
    }
  );
};

export default toaster;
