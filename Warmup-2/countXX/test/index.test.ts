// Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".

// countXX("abcxx") → 1
// countXX("xxx") → 2
// countXX("xxxx") → 3

import { assert } from "chai";
import { countXX } from "../src";

describe("countXX", () => {
  it("should return '1' when passed 'abcxx'", () => {
    const result = countXX("abcxx");
    assert.equal(result, 1);
  });
  it("should return '2' when passed 'xxx'", () => {
    const result = countXX("xxx");
    assert.equal(result, 2);
  });
  it("should return '3' when passed 'xxxx'", () => {
    const result = countXX("xxxx");
    assert.equal(result, 3);
  });
});
