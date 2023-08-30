// Given an array of ints, return true if it contains a 2, 7, 1 pattern: a value, followed by the value plus 5, followed by the value minus 1. Additionally the 271 counts even if the "1" differs by 2 or less from the correct value.

// has271([1, 2, 7, 1]) → true
// has271([1, 2, 8, 1]) → false
// has271([2, 7, 1]) → true

import { assert } from "chai";
import { has271 } from "../src";

describe("has271", () => {
   it("should return true when given [1, 2, 7, 1]", () => {
      const result = has271([1, 2, 7, 1]);
      assert.equal(result, true);
   });
   it("should return false when given [1, 2, 8, 1]", () => {
      const result = has271([1, 2, 8, 1]);
      assert.equal(result, false);
   });
   it("should return false when given [2, 7, 1]", () => {
      const result = has271([2, 7, 1]);
      assert.equal(result, true);
   });
   it("should return false when given []", () => {
      const result = has271([]);
      assert.equal(result, false);
   });
});
