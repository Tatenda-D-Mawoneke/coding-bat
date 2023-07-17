// Given 2 int values, return true if either of them is in the range 10..20 inclusive.

import { assert } from "chai";
import { in1020 } from "../src";

// in1020(12, 99) → true
// in1020(21, 12) → true
// in1020(8, 99) → false

describe("in1020", () => {
  it("should return true if the given values (12, 99) are within the range of 10 and 20", () => {
    const result = in1020(12, 99);
    assert.equal(result, true);
  });
  it("should return true if the given values (21, 12) are within the range of 10 and 20", () => {
    const result = in1020(21, 12);
    assert.equal(result, true);
  });
  it("should return false if the given values (8, 99) are not within the range of 10 and 20", () => {
    const result = in1020(8, 99);
    assert.equal(result, false);
  });
});
