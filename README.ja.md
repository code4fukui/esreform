# esreform

esreformは、JavaScript (ECMAScript) コードのリフォーマットを行うためのESモジュールです。

## デモ
- [esreform, reform JavaScript code: JS → AST → JS](https://code4fukui.github.io/esreform/)

## 機能
- JavaScriptコードをAST (Abstract Syntax Tree) に変換し、再び整形されたJavaScriptコードを生成します。
- 波括弧の追加、単一引用符から二重引用符への変換など、一般的な整形が可能です。

## 必要環境
特に必要ありません。ブラウザ上で動作します。

## 使い方
以下のように使用できます:

```js
import { esreform } from "https://code4fukui.github.io/esreform/esreform.js";

console.log(esreform("const res = await func();"));
```

## ライセンス
MIT License