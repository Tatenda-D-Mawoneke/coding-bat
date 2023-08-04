// Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % "mod" operator computes remainders, so 17 % 10 is 7.

import { assert } from "chai";
import { lastDigit } from "../src";

// lastDigit(7, 17) → true
// lastDigit(6, 17) → false
// lastDigit(3, 113) → true

describe("lastDigit", () => {
  it("should return true if the passed numbers have the same last digit such as for 7, 17", () => {
    const result = lastDigit(7, 17);
    assert.equal(result, true);
  });
  it("should return true if the passed numbers have the same last digit such as for 7, 717", () => {
    const result = lastDigit(7, 717);
    assert.equal(result, true);
  });
  it("should return true if the passed numbers have the same last digit such as for 3, 113", () => {
    const result = lastDigit(3, 113);
    assert.equal(result, true);
  });
  it("should return true if the passed numbers have the same last digit such as for 747, 17", () => {
    const result = lastDigit(747, 17);
    assert.equal(result, true);
  });
  it("should return false if the passed numbers have the same last digit such as for 6, 17", () => {
    const result = lastDigit(6, 17);
    assert.equal(result, false);
  });
});
