import * as t from "https://deno.land/std/testing/asserts.ts";
import { esreform } from "./esreform.js";

Deno.test("func", () => {
  t.assertEquals(esreform("const res = func();"), "const res = func();");
});
Deno.test("err func", () => {
  t.assertThrows(() => esreform("const res = async func();"));
});
