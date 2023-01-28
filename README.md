# esreform

esreform is a ES module to reformat the program in ECMAscript (JavaScript).

```js
import { esreform } from "https://code4fukui.github.io/esreform/esreform.js";

console.log(esreform("const res = await func();"));
```

## demo

- [esreform, reform JavaScript code: JS → AST → JS](https://code4fukui.github.io/esreform/)

## dependencies

- [fixmyjs](https://github.com/code4fukui/fixmyjs)
    - [esprima](https://github.com/code4fukui/esprima)
    - [escodegen](https://github.com/code4fukui/escodegen)
