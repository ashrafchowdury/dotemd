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
        node
          .querySelectorAll("p")
          .forEach((p: any) => p.replaceWith(...p.childNodes)); // Remove any <p> elements inside the <table>
      }
      return node?.outerHTML;
    },
  });
  turndownService.addRule("peragraph", {
    filter: "p",
    replacement: function (content, node: any) {
      const innerMarkdown = turndownService.turndown(node.innerHTML);
      if (node.hasAttribute("style")) {
        //checking wheather the p tag has style att ot not
        const style = node.getAttribute("style");
        if (style.includes("text-align: start")) {
          if (!content.trim()) {
            return ""; // empty content, ignore the <p> tag
          } else {
            return innerMarkdown.trim();
          }
          // We are using div to center inner elements
        } else if (style.includes("text-align: center")) {
          return `<div align="center"> \n\n ${innerMarkdown.trim()} \n\n </div>`;
        } else if (style.includes("text-align: right")) {
          return `<div align="right"> \n\n ${innerMarkdown.trim()} \n\n </div>`;
        }
      }
      return `\n${content}\n `;
    },
  });

  turndownService.addRule("headings", {
    filter: ["h1", "h2", "h3"],
    replacement: function (content, node: any) {
      if (node.tagName === "H1") {
        return `\n# ${content}\n `;
      } else if (node.tagName === "H2") {
        return `\n## ${content}\n `;
      } else if (node.tagName === "H3") {
        return `\n### ${content}\n `;
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
      return `> ${content.trimStart()}`;
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
      if (node.hasAttribute("width")) {
        const src = node.getAttribute("src");
        const width = node.getAttribute("width");
        const height = node.getAttribute("height");

        return `<img src="${src}" width="${width}" height="${height}" />`;
      } else {
        let src = node.getAttribute("src") || "";
        return `![image](${src})`;
      }
    },
  });

  turndownService.addRule("horizoltalRule", {
    filter: "hr",
    replacement: function (content) {
      return `\n---\n `;
    },
  });

  const markdownCode = turndownService.turndown(
    editor?.getHTML().replace("<p></p><p></p>", `\n<br>\n `)
  );

  // convert the html table with markdown table
  if (editor.getHTML().includes("<table>")) {
    const replaceAttributes = markdownCode
      .replace(/colspan="1" rowspan="1"/g, "")
      .replace(/colwidth/g, "width");

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
    return { markdownCode };
  }
};