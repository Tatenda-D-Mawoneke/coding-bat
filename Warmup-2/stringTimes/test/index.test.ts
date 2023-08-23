// Given a string and a non-negative int n, return a larger string that is n copies of the original string.

import { assert } from "chai";
import { stringTimes } from "../src";

// stringTimes("Hi", 2) → "HiHi"
// stringTimes("Hi", 3) → "HiHiHi"
// stringTimes("Hi", 1) → "Hi"

describe("stringTimes", () => {
  it("should return 'HiHi' when passed 'Hi' and '2'", () => {
    const result = stringTimes("Hi", 2);
    assert.equal(result, "HiHi");
  });
  it("should return 'HiHiHi' when passed 'Hi' and '3'", () => {
    const result = stringTimes("Hi", 2);
    assert.equal(result, "HiHi");
  });
  it("should return 'Hi' when passed 'Hi' and '1'", () => {
    const result = stringTimes("Hi", 1);
    assert.equal(result, "Hi");
  });
});
