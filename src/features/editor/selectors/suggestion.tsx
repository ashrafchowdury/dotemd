import { Node } from "@tiptap/core";
import { ReactRenderer } from "@tiptap/react";
import Suggestion from "@tiptap/suggestion";
import { PluginKey } from "prosemirror-state";
import tippy from "tippy.js";
import { EditorFormat, TipTapEditorFormatType } from "./schema";
import { Selectors } from "./Selectors";

export const TypeSuggestionPluginKey = new PluginKey("type-suggestion");

const SUGGESTION_CHAR = "/";

function isNotEmptyLine(editor: any) {
  const chunks =
    editor.view.state.selection.$head.parent.textContent.split(SUGGESTION_CHAR);
  // if we have more than 2 chunks, it means that we will have at least a '/ 'char on the line, else whe checks that the  first chunks is not empty.
  return chunks.length > 2 || chunks[0].trim().length;
}

export const TypeSuggestion = Node.create({
  name: "type-suggestion",

  group: "inline",

  inline: true,

  selectable: false,

  atom: true,

  addProseMirrorPlugins() {
    return [
      Suggestion({
        char: SUGGESTION_CHAR,
        pluginKey: TypeSuggestionPluginKey,
        command: ({
          editor,
          range,
          props,
        }: {
          editor: any;
          range: any;
          props: any;
        }) => {
          const selectedType = (TipTapEditorFormatType as any)[props];
          if (isNotEmptyLine(editor)) {
            // Add selected type after the current selection
            editor
              .chain()
              .insertContentAt(range, selectedType)
              .focus(range.to)
              .run();
          } else {
            // Replace the current selection with the selected type
            editor
              .chain()
              .deleteRange(range)
              .insertContent(selectedType)
              .focus(range.to)
              .run();
          }
          window.getSelection()?.collapseToEnd();
        },
        allow: ({ state, range }) => {
          const $from = state.doc.resolve(range.from);
          const type = state.schema.nodes[this.name];
          return !!$from.parent.type.contentMatch.matchType(type);
        },
        editor: this.editor,
        items: ({ query, editor }) => {
          return Object.values(EditorFormat).filter((item) => item[0]);
        },
        render: () => {
          let component: any;
          let popup: any;
          return {
            onStart: (props) => {
              component = new ReactRenderer(Selectors, {
                props,
                editor: props.editor,
              });

              if (!props.clientRect) {
                return;
              }

              popup = (tippy as any)("body", {
                getReferenceClientRect:
                  props.clientRect ??
                  (() => document.body.getBoundingClientRect()),
                appendTo: () => document.body,
                content: component.element,
                showOnCreate: true,
                interactive: true,
                trigger: "manual",
                placement: "bottom-start",
              });
            },

            onUpdate(props) {
              component.updateProps(props);

              if (!props.clientRect) {
                return;
              }

              popup[0].setProps({
                getReferenceClientRect: props.clientRect,
              });
            },

            onKeyDown(props) {
              if (props.event.key === "Escape") {
                popup[0].hide();
                return true;
              }
              return component.ref?.onKeyDown(props);
            },

            onExit() {
              popup[0].destroy();
              component.destroy();
            },
          };
        },
      }),
    ];
  },
});
