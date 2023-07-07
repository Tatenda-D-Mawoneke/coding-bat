// Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.

// posNeg(1, -1, false) → true
// posNeg(-1, 1, false) → true
// posNeg(-4, -5, true) → true

import { assert } from "chai";
import { posNeg } from "../src";

describe("posNeg", () => {
  it("should return true when the value of num1 is negative AND num2 is positive AND the parameter named 'negative' is false", () => {
    const result = posNeg(-1, 1, false);
    assert.equal(result, true);
  });
  it("should return true when the value of num1 is positive AND num2 is negative AND the parameter named 'negative' is false", () => {
    const result = posNeg(1, -1, false);
    assert.equal(result, true);
  });
  it("should return true when the values of both parameters (num 1 & num2) are negative AND the parameter named 'negative' is true", () => {
    const result = posNeg(-1, -1, true);
    assert.equal(result, true);
  });
  it("should return false when the values of both parameters (num 1 & num2) are negative AND the parameter named 'negative' is false", () => {
    const result = posNeg(-1, -1, false);
    assert.equal(result, false);
  });
});
