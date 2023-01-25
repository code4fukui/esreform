import * as esprima from "https://code4fukui.github.io/esprima/es/esprima.min.js";

const ast = esprima.parseModule(`async () => { /*import { CSV } from "https://js.sabae.cc/CSV.js";*/\nconsole.log("abc"); }`);
console.log(ast);

/*
const ast = esprima.parseModule(`// comment\nimport { CSV } from "https://js.sabae.cc/CSV.js";\nasync() => { console.log("abc"); }`);
const ast = esprima.parseModule(`async() => { console.log("abc"); }`);
console.log(ast);

Module {
  type: "Program",
  body: [
    ImportDeclaration {
      type: "ImportDeclaration",
      specifiers: [ [Object] ],
      source: Literal {
        type: "Literal",
        value: "https://js.sabae.cc/CSV.js",
        raw: '"https://js.sabae.cc/CSV.js"'
      }
    },
    ExpressionStatement {
      type: "ExpressionStatement",
      expression: AsyncArrowFunctionExpression {
        type: "ArrowFunctionExpression",
        id: null,
        params: [Array],
        body: [Object],
        generator: false,
        expression: false,
        async: true
      }
    }
  ],
  sourceType: "module"
}
*/
