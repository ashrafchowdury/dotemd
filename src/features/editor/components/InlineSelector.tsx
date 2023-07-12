"use client";
import { useState } from "react";
import { useEditor } from "../context/EditorContext";
import { BubbleMenu } from "@tiptap/react";
import {
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  ItalicIcon,
  BulletListIcon,
  CodeIcon,
  LinktIcon,
  UnLinktIcon,
} from "@/components/ui/Icons";
import Hyperlink from "./Hyperlink";

const InlineSelector = () => {
  const [isLink, setIsLink] = useState(false);
  const { editor } = useEditor();

  // checking whether the format is active ot not
  const isActive = (name: string | { textAlign: string }) =>
    editor?.isActive(name) ? "text-primary" : "";
  const toggleSelector = () => editor.chain().focus();

  return (
    <>
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          pluginKey="bubbleMenuForText"
          shouldShow={({ editor, view, state, oldState, from, to }) => {
            // only show out of table
            return from !== to;
          }}
        >
          <section
            className="inlineSelector flex items-center justify-between space-x-2 py-1 px-2 bg-dark border border-glass rounded-lg"
            style={{ display: isLink ? "none" : "flex" }}
          >
            {!editor.isActive("table") && (
              <>
                <button
                  onClick={() => toggleSelector().setTextAlign("left").run()}
                  className={`${isActive({ textAlign: "left" })}`}
                >
                  <AlignLeftIcon />
                </button>
                <button
                  onClick={() =>
                    editor.chain().focus().setTextAlign("center").run()
                  }
                  className={`${isActive({ textAlign: "center" })}`}
                >
                  <AlignCenterIcon />
                </button>
                <button
                  onClick={() => toggleSelector().setTextAlign("right").run()}
                  className={`${isActive({ textAlign: "right" })}`}
                >
                  <AlignRightIcon />
                </button>
                <div className=" w-[1px] h-5 bg-glass"></div>
              </>
            )}

            {!editor.isActive("image") && (
              <>
                <button
                  onClick={() => toggleSelector().toggleBold().run()}
                  className={`${isActive("bold")}`}
                >
                  B
                </button>
                <button
                  onClick={() => toggleSelector().toggleItalic().run()}
                  className={`${isActive("italic")}`}
                >
                  <ItalicIcon />
                </button>
                <button
                  onClick={() =>
                    toggleSelector().sinkListItem("listItem").run()
                  }
                  className={`${isActive("bulletList")} ${
                    editor?.isActive("bulletList") ? "" : "hidden"
                  }`}
                >
                  <BulletListIcon />
                </button>

                <button
                  onClick={() => toggleSelector().toggleCode().run()}
                  className={`${isActive("code")}`}
                >
                  <CodeIcon />
                </button>
              </>
            )}

            <button
              onClick={() =>
                editor.isActive("link")
                  ? editor.commands.unsetLink()
                  : setIsLink(true)
              }
              className={`${isActive("link")}`}
            >
              {editor?.isActive("link") ? (
                <UnLinktIcon style="md:text-sm text-xs" />
              ) : (
                <LinktIcon />
              )}
            </button>
          </section>

          {isLink && <Hyperlink setIsLink={setIsLink} />}
        </BubbleMenu>
      )}
    </>
  );
};

export default InlineSelector;
