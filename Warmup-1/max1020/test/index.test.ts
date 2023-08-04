// Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

// max1020(11, 19) → 19
// max1020(19, 11) → 19
// max1020(11, 9) → 11

import { assert } from "chai";
import { max1020 } from "../src";

describe("max1020", () => {
  it("should return 19 when passed 11,19 as 19 is the larger of the two numbers and is within the range of 10-20 inclusive", () => {
    const result = max1020(11, 19);
    assert.equal(result, 19);
  });
  it("should return 19 when passed 19, 11 as 19 is the larger of the two numbers and is within the range of 10-20 inclusive", () => {
    const result = max1020(19, 11);
    assert.equal(result, 19);
  });
  it("should return 11 when passed 11,9 as 11 is the larger of the two numbers and is within the range of 10-20 inclusive", () => {
    const result = max1020(11, 9);
    assert.equal(result, 11);
  });
  it("should return 11 when passed 9,11 as 11 is the larger of the two numbers and is within the range of 10-20 inclusive", () => {
    const result = max1020(9, 11);
    assert.equal(result, 11);
  });
  it("should return 10 when passed 10,9 as 10 is the larger of the two numbers and is within the range of 10-20 inclusive", () => {
    const result = max1020(10, 9);
    assert.equal(result, 10);
  });
  it("should return 20 when passed 20,9 as 10 is the larger of the two numbers and is within the range of 10-20 inclusive", () => {
    const result = max1020(20, 9);
    assert.equal(result, 20);
  });
  it("should return 0 when passed 1,2 as neither of the two numbers are within the range of 10-20 inclusive", () => {
    const result = max1020(1, 2);
    assert.equal(result, 0);
  });
});
