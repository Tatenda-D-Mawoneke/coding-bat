// Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

import { assert } from "chai";
import { stringX } from "../src";

// stringX("xxHxix") → "xHix"
// stringX("abxxxcd") → "abcd"
// stringX("xabxxxcdx") → "xabcdx"

describe("stringX", () => {
   it("should return xHix when given xxHxix", () => {
      const result = stringX("xxHxix");
      assert.equal(result, "xHix");
   });
   it("should return abcd when given abxxxcd", () => {
      const result = stringX("abxxxcd");
      assert.equal(result, "abcd");
   });
   it("should return xabcdx when given xabxxxcdx", () => {
      const result = stringX("xabxxxcdx");
      assert.equal(result, "xabcdx");
   });
   it("should return '' when given ''", () => {
      const result = stringX("");
      assert.equal(result, "");
   });
});
