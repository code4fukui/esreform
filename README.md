# esreform

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

`esreform` is a lightweight ES module that reformats JavaScript code. It acts as a simple wrapper around `fixmyjs` to handle ES module syntax like `import` and top-level `await`.

## Demo

- [Live Demo: Reform JavaScript code (JS → AST → JS)](https://code4fukui.github.io/esreform/)

## Features

- Reformats JavaScript by parsing it to an AST and regenerating code via `fixmyjs`.
- Correctly handles `import` statements by processing them separately from other code.
- Supports top-level `await` by temporarily wrapping code in an `async` function during processing.
- Applies a fixed set of formatting rules:
  - Enforces curly braces for control structures (e.g., `if`, `for`).
  - Converts all single quotes to double quotes.

## Requirements

None. Works in modern web browsers and Deno/Node.js environments that support ES modules.

## Usage

```javascript
import { esreform } from "https://code4fukui.github.io/esreform/esreform.js";

const unformatted = "import { f } from './foo.js';\n\nif(true) console.log('hello')";
const formatted = esreform(unformatted);

console.log(formatted);
/*
Output:

import { f } from "./foo.js";

if (true) {
  console.log("hello");
}
*/
```

## License

MIT License — see [LICENSE](LICENSE).