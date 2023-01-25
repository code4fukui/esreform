import * as t from "https://deno.land/std/testing/asserts.ts";
import { esreform } from "./esreform.js";

Deno.test("without import", () => {
  t.assertEquals(esreform(`import { CSV } from "https://js.sabae.cc/CSV.js";

const res = await func();`
), `import { CSV } from "https://js.sabae.cc/CSV.js";

const res = await func();`);
});
