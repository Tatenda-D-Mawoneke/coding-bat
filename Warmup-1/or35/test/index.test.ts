import { assert } from "chai";
import { or35 } from "../src";
// Return true if the given non-negative number is a multiple of 3 or a multiple of 5. Use the % "mod" operator

// or35(3) → true
// or35(10) → true
// or35(8) → false

describe("or35", () => {
  it("should return true when given a number that is a multiple of 3 or 5 such as 3", () => {
    const result = or35(3);
    assert.equal(result, true);
  });
  it("should return true when given a number that is a multiple of 3 or 5 such as 10", () => {
    const result = or35(10);
    assert.equal(result, true);
  });
  it("should return false when given a number that is a multiple of 3 or 5 such as 8", () => {
    const result = or35(8);
    assert.equal(result, false);
  });
  it("should return 'number must be positive' when given a number that is negative", () => {
    const result = or35(-5);
    assert.equal(result, "number must be positive");
  });
});
