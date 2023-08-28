import { assert } from "chai";
import { arrayFront9 } from "../src";

// Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.

// arrayFront9([1, 2, 9, 3, 4]) → true
// arrayFront9([1, 2, 3, 4, 9]) → false
// arrayFront9([1, 2, 3, 4, 5]) → false

describe("arrayFront9", () => {
  it("should return true when passed [1, 2, 9, 3, 4]", () => {
    const result = arrayFront9([1, 2, 9, 3, 4]);
    assert.equal(result, true);
  });
  it("should return false when passed [1, 2, 3, 4, 9]", () => {
    const result = arrayFront9([1, 2, 3, 4, 9]);
    assert.equal(result, false);
  });
  it("should return false when passed [1, 2, 3, 4, 5]", () => {
    const result = arrayFront9([1, 2, 3, 4, 5]);
    assert.equal(result, false);
  });
  it("should return true when passed [1,9]", () => {
    const result = arrayFront9([1, 9]);
    assert.equal(result, true);
  });
  it("should return false when passed []", () => {
    const result = arrayFront9([]);
    assert.equal(result, false);
  });
});
