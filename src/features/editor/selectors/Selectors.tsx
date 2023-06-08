import { forwardRef, ForwardedRef, useRef } from "react";
import { SelectorPropsType } from "../types/selectorsTypes";
import { useEditor } from "../context/EditorContext";
import { toggleSelectors } from "../functions/toggleSelectors";

const Selectors = forwardRef(
  (props: SelectorPropsType, ref: ForwardedRef<HTMLDivElement>) => {
    const selectorRef = useRef<any>(null);
    const { editor } = useEditor();

    const selectItem = (index: number) => {
      const item = props.items[index];
      if (item) {
        props.command(item);
      }
    };

    return (
      <section
        className={`selection md:w-[320px] sm:w-[250px] w-[220px] md:h-[350px] h-[300px] bg-dark rounded-lg p-4 overflow-auto`}
      >
        <p className=" md:text-xl text-[16px] font-semibild mb-6">Selectors</p>
        {props.items.length > 0 ? (
          props.items.map((item, index) => (
            <button
              key={index}
              onClick={() =>
                toggleSelectors(editor, item, index, selectItem, selectorRef)
              }
            >
              <div className=" flex justify-between items-center">
                <div className="flex items-center cursor-pointer">
                  <div className=" md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-md bg-glass flex items-center justify-center">
                    {item?.[0]}
                  </div>
                  <div className=" md:ml-4 ml-3">
                    <p className=" md:text-[16px] text-sm mb-1"> {item?.[1]}</p>
                    <p className="md:text-xs text-[10px]">{item?.[2]}</p>
                  </div>
                </div>
                <p
                  className={`md:text-[10px] text-[8px] ${
                    item?.[3] && "px-2 py-1"
                  } bg-glass rounded-lg mr-[-6px]`}
                >
                  {item?.[3] && "Ctl"} {item?.[3] || ""}
                </p>
              </div>
            </button>
          ))
        ) : (
          <div className="item">No result</div>
        )}
      </section>
    );
  }
);

Selectors.displayName = "SuggestionList";

export { Selectors };
