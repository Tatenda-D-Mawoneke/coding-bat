// Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.

import { assert } from "chai";
import { noTriples } from "../src";

// noTriples([1, 1, 2, 2, 1]) → true
// noTriples([1, 1, 2, 2, 2, 1]) → false
// noTriples([1, 1, 1, 2, 2, 2, 1]) → false

describe("noTriples", () => {
   it("should return true when given [1, 1, 2, 2, 1]", () => {
      const result = noTriples([1, 1, 2, 2, 1]);
      assert.equal(result, true);
   });
   it("should return false when given [1, 1, 2, 2, 2, 1]", () => {
      const result = noTriples([1, 1, 2, 2, 2, 1]);
      assert.equal(result, false);
   });
   it("should return false when given [1, 1, 1, 2, 2, 2, 1]", () => {
      const result = noTriples([1, 1, 1, 2, 2, 2, 1]);
      assert.equal(result, false);
   });
   it("should return false when given []", () => {
      const result = noTriples([]);
      assert.equal(result, true);
   });
});
