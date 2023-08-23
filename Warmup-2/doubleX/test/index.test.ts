// Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

import { assert } from "chai";
import { doubleX } from "../src";

// doubleX("axxbb") → true
// doubleX("axaxax") → false
// doubleX("xxxxx") → true

describe("doubleX", () => {
  it("should return true when passed 'axxbb'", () => {
    const result = doubleX("axxbb");
    assert.equal(result, true);
  });
  it("should return false when passed 'axaxax'", () => {
    const result = doubleX("axaxax");
    assert.equal(result, false);
  });
  it("should return true when passed 'xxxxx'", () => {
    const result = doubleX("xxxxx");
    assert.equal(result, true);
  });
});
