import TurndownService from "turndown";
import { Editor } from "@tiptap/react";

export const htmlToMarkdown = (editor: Editor) => {
  let turndownService = new TurndownService();

  // Add a filter to ignore some html tags
  turndownService.addRule("ignoreTags", {
    filter: ["table", "tbody", "tr", "td", "th", "br"],
    replacement: function (content, node: any) {
      if (node.tagName === "P") {
        return node.innerHTML; // Replace the <p> element with its content
      } else if (node.tagName === "TABLE") {
        node.querySelectorAll("p").forEach((p: any) => {
          const innerMarkdown = turndownService.turndown(p.innerHTML);
          p.innerHTML = innerMarkdown.trim(); // Convert the inner content of <p> to markdown
          p.replaceWith(...p.childNodes);
        });
      }
      return node?.outerHTML;
    },
  });

  turndownService.addRule("peragraph", {
    filter: "p",
    replacement: function (content, node: any) {
      if (
        node.hasAttribute("style") &&
        node.getAttribute("style") !== "text-align: start"
      ) {
        const alignment = node
          .getAttribute("style")
          .replace("text-align: ", "");
        return `\n<p align="${alignment}">${content}<p>\n `;
      } else {
        return `\n${content}\n `;
      }
    },
  });

  turndownService.addRule("headings", {
    filter: ["h1", "h2", "h3"],
    replacement: function (content, node: any) {
      if (
        node.hasAttribute("style") &&
        node.getAttribute("style") !== "text-align: start"
      ) {
        const tagName = node.tagName?.toLowerCase();
        const alignment = node
          .getAttribute("style")
          .replace("text-align: ", "");
        return `\n\n<${tagName} align="${alignment}">${content}</${tagName}>\n`;
      } else {
        if (node.tagName === "H1") {
          return `\n\n# ${content}\n `;
        } else if (node.tagName === "H2") {
          return `\n\n## ${content}\n `;
        } else if (node.tagName === "H3") {
          return `\n\n### ${content}\n `;
        }
      }
      return node?.outerHTML;
    },
  });
  turndownService.addRule("checkList", {
    filter: function (node) {
      return node.nodeName === "LI" && node.hasAttribute("data-checked");
    },
    replacement: function (content, node: any) {
      if (node.getAttribute("data-checked") === "true") {
        return `- [x] ${content.trimStart()}`;
      } else {
        return `- [ ] ${content.trimStart()}`;
      }
    },
  });

  turndownService.addRule("blockquote", {
    filter: "blockquote",
    replacement: function (content) {
      return `\n> ${content.trimStart()}\n`;
    },
  });

  turndownService.addRule("itelic", {
    filter: "em",
    replacement: function (content) {
      return " *" + content + "* ";
    },
  });

  turndownService.addRule("image", {
    filter: "img",
    replacement: function (content, node: any) {
      const src = node.getAttribute("src");
      const width = node.getAttribute("width");
      const height = node.getAttribute("height");
      if (node.hasAttribute("width") && !node.hasAttribute("style")) {
        return `\n<img src="${src}" width="${width}" height="${height}" />\n`;
      } else if (!node.hasAttribute("width") && node.hasAttribute("style")) {
        return `\n<img src="${src}"  />\n`;
      } else {
        return `\n![image](${src})\n`.trimStart();
      }
    },
  });

  turndownService.addRule("horizoltalRule", {
    filter: "hr",
    replacement: function (content) {
      return `\n---\n `;
    },
  });

  turndownService.addRule("link", {
    filter: "a",
    replacement: function (content, node: any) {
      if (
        node.parentNode.tagName &&
        node.parentNode.hasAttribute("style") &&
        node.parentNode.getAttribute("style") !== "text-align: start"
      ) {
        return `${node?.outerHTML}\n`; // Skip converting the link
      }
      // Convert the link as usual
      return ` [${content}](${node.getAttribute("href")}) `.trimStart();
    },
  });

  const markdownCode = turndownService.turndown(editor?.getHTML());

  // convert the html table with markdown table
  if (editor.getHTML().includes("<table>")) {
    const replaceAttributes = markdownCode
      .replace(/colspan="1" rowspan="1"/g, "")
      .replace(/colwidth/g, "width")
      .replaceAll('style="text-align: center"', "")
      .replaceAll('gstyle="text-align: right"', "");

    const originalData = replaceAttributes;

    // Find the position of the table in the original data
    const tableStartIndex = originalData.indexOf("<table>");
    const tableEndIndex = originalData.indexOf("</table>") + 8;

    // Extract the data before and after the table
    const beforeTableData = originalData.substring(0, tableStartIndex);
    const afterTableData = originalData.substring(tableEndIndex).trim();

    // Convert the table to a Markdown table
    const tableData = originalData.substring(tableStartIndex, tableEndIndex);
    const rows: any = tableData.match(/<tr>(.*?)<\/tr>/gi);
    const headerCells = rows[0]
      .match(/<th\s*.*?>(.*?)<\/th>/gi)
      .map((cell: any) => cell.replace(/<\/?th\s*.*?>/gi, "").trim());
    const hyphens = headerCells.map((cell: any) => "-".repeat(cell.length));
    const bodyCells = rows
      ?.slice(1)
      .map((row: any) =>
        row
          .match(/<td\s*.*?>(.*?)<\/td>/gi)
          .map((cell: any) => cell.replace(/<\/?td\s*.*?>/gi, "").trim())
      );
    const mdTable = `| ${headerCells.join(" | ")} |\n| ${hyphens.join(
      " | "
    )} |\n${bodyCells.map((row: any) => `| ${row.join(" | ")} |`).join("\n")}`;

    // Combine the data before the table, the Markdown table, and the data after the table
    const markdownTable = `${beforeTableData}\n\n${mdTable}\n\n${afterTableData}`;

    return { markdownCode: markdownTable };
  } else {
    const markdown = markdownCode
      .replaceAll('style="text-align: center"', "")
      .replaceAll('gstyle="text-align: right"', "");
    return { markdownCode: markdown };
  }
};
