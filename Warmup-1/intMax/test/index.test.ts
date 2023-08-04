// Given three int values, a b c, return the largest.

import { assert } from "chai";
import { intMax } from "../src";

// intMax(1, 2, 3) → 3
// intMax(1, 3, 2) → 3
// intMax(3, 2, 1) → 3

describe("intMax", () => {
  it("should return the largest value 3 when passed 1,2,3", () => {
    const result = intMax(1, 2, 3);
    assert.equal(result, 3);
  });
  it("should return the largest value 3 when passed 1,3,2", () => {
    const result = intMax(1, 3, 2);
    assert.equal(result, 3);
  });
  it("should return the largest value 3 when passed 3,2,1", () => {
    const result = intMax(3, 2, 1);
    assert.equal(result, 3);
  });
});
