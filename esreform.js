import * as esprima from "https://code4fukui.github.io/esprima/es/esprima.min.js";
import escodegen from "https://code4fukui.github.io/escodegen/escodegen.js";

export const esreform = (program) => {
  const ast = esprima.parseModule(`async() => { ${program} }`);
  const ast2 = { type: "Program", body: ast.body[0].expression.body.body };
  const res = escodegen.generate(ast2);
  return res;
};
