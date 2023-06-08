import { CroseIcon } from "@/components/ui/Icons";
import { keyShortCutList } from "../utils/keyShortCutList";
import Button from "@/components/ui/Button";
import { useEditor } from "../context/EditorContext";

const ShortCuts = () => {
  const { isKeyShortcut, setIsKeyShortcut } = useEditor();

  if (!isKeyShortcut) {
    return null;
  }
  return (
    <section className="bg-glassBorder fixed z-50 top-0 right-0 left-0 bottom-0 flex items-center justify-center">
      <div className=" lg:w-[700px] md:w-[500px] w-[90%] bg-dark p-9 rounded-lg relative">
        <div className="w-full mb-9 flex justify-between items-center">
          <p className=" lg:text-xl md:text-lg text-sm font-medium ">
            Keyboard Shortcuts
          </p>
          <Button
            style=" !p-2 hover:bg-glass duration-300"
            onclick={() => setIsKeyShortcut(false)}
          >
            <CroseIcon style=" md:text-sm text-xs" />
          </Button>
        </div>

        <div className="w-full lg:h-[500px] md:h-[350px] h-[300px] overflow-auto my-2">
          {keyShortCutList.map((value, ind) => {
            return (
              <div
                key={ind}
                className="py-2 md:px-3 px-1 flex items-center justify-between my-4 cursor-pointer duration-200"
              >
                <p className="lg:text-lg md:text-[16px] text-sm font-medium">
                  {value.title}
                </p>
                <p className="md:text-xs text-[10px] py-1 px-2 bg-glass rounded-md">
                  Ctrl + {value.key}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShortCuts;
