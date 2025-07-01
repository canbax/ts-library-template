import { expect, test } from "vitest";
import { yourLibFunction } from "../src/index.ts";

test("yourLibFunction returns ", () => {
  expect(yourLibFunction(1, 2)).toEqual(3);
});
