# esreform

`esreform` は JavaScript コードを整形する軽量な ES モジュールです。`fixmyjs` のシンプルなラッパーとして機能し、`import` やトップレベルの `await` のような ES モジュール構文を処理します。

## デモ

- [ライブデモ: Reform JavaScript code (JS → AST → JS)](https://code4fukui.github.io/esreform/)

## 機能

- JavaScript を AST にパースし、`fixmyjs` を介してコードを再生成することで整形します。
- `import` 文を他のコードと分離して処理することで、正しく扱います。
- 処理中にコードを一時的に `async` 関数でラップすることで、トップレベルの `await` をサポートします。
- 以下の固定された整形ルールを適用します:
  - 制御構文（例: `if`、`for`）に中括弧を強制します。
  - すべてのシングルクォートをダブルクォートに変換します。

## 必要条件

なし。ES モジュールをサポートするモダンなウェブブラウザおよび Deno/Node.js 環境で動作します。

## 使い方

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

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
