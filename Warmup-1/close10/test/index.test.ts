// Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.

import { assert } from "chai";
import { close10 } from "../src";

// close10(8, 13) → 8
// close10(13, 8) → 8
// close10(13, 7) → 0

describe("close10", () => {
  it("should return 8 when given 8, 13 as 8 is closer to 10", () => {
    const result = close10(8, 13);
    assert.equal(result, 8);
  });
  it("should return 8 when given 13, 8  as 8 is closer to 10", () => {
    const result = close10(13, 8);
    assert.equal(result, 8);
  });
  it("should return 0 when given 13, 7 both numbers are equally close to 10", () => {
    const result = close10(13, 7);
    assert.equal(result, 8);
  });
});
