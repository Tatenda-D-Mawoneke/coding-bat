import { assert } from "chai";
import { icyHot } from "../src";
// import {icyHot} from
// Given two temperatures, return true if one is less than 0 and the other is greater than 100.

// icyHot(120, -1) → true
// icyHot(-1, 120) → true
// icyHot(2, 120) → false

describe("icyHot", () => {
  it("should return true when of the two temperatures given, one is less than 0 and the other is greater than 100, given: (120,-1)", () => {
    const result = icyHot(120, -1);
    assert.equal(result, true);
  });
  it("should return true when of the two temperatures given, one is less than 0 and the other is greater than 100, given: (-1, 120)", () => {
    const result = icyHot(-1, 120);
    assert.equal(result, true);
  });
  it("should return false when of the two temperatures given one is not less than 0 while the other is greater than 100,  given: (2, 120)", () => {
    const result = icyHot(2, 120);
    assert.equal(result, false);
  });
});
