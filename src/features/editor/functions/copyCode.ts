export const copyCode = (code: string) => {
  navigator.clipboard.writeText(code);
  alert("Code Copied");
};
