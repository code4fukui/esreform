import * as t from "https://deno.land/std/testing/asserts.ts";
import { esreform } from "./esreform.js";

Deno.test("await func", () => {
  t.assertEquals(esreform("const res = await func();"), "const res = await func();");
});
