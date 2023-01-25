import fixmyjs from "https://code4fukui.github.io/fixmyjs/lib/index.js";

const removeAsync = (src) => {
  const ss = src.split("\n");
  ss.pop();
  ss.splice(0, 1);
  return ss.map(s => s.substring(2)).join("\n");
};

export const esreform = (program) => {
  const ss = program.split("\n");
  const imports = [];
  for (let i = 0; i < ss.length; i++) {
    const s = ss[i];
    if (!(s.startsWith("import") || !s.trim() || s.startsWith("//"))) {
      ss.splice(0, i);
      break;
    }
    imports.push(s);
  }
  const res = `async () => { ${ss.join("\n")} }`;
  const opt = {
    curly: true, // add blackets
    quotmark: "double", // use double quote
  };
  const simport = fixmyjs.fix(imports.join("\n"), opt);
  return (simport.length > 0 ? simport + "\n\n" : "") + removeAsync(fixmyjs.fix(res, opt));
};
