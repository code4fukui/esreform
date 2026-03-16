# esreform

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

esreform is an ES module to reformat JavaScript code.

## Demo
- [esreform, reform JavaScript code: JS → AST → JS](https://code4fukui.github.io/esreform/)

## Features
- Reformats JavaScript code by parsing to an AST and regenerating the code
- Handles imports, async/await, and other common JavaScript constructs
- Configurable formatting options

## Requirements
None. esreform can be used in the browser or in Node.js environments.

## Usage
```js
import { esreform } from "https://code4fukui.github.io/esreform/esreform.js";

console.log(esreform("const res = await func();"));
```

## License
MIT License — see [LICENSE](LICENSE).