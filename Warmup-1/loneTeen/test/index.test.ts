// We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.

import { assert } from "chai";
import { loneTeen } from "../src";

// loneTeen(13, 99) → true
// loneTeen(21, 19) → true
// loneTeen(13, 13) → false

describe("loneTeen", () => {
  it("should return true when the given value (13, 99) is within the range of 13..19 inclusive", () => {
    const result = loneTeen(13, 99);
    assert.equal(result, true);
  });
  it("should return true when the given value (21, 19) is within the range of 13..19 inclusive", () => {
    const result = loneTeen(21, 19);
    assert.equal(result, true);
  });
  it("should return false when the given value (13, 13) is not within the range of 13..19 inclusive", () => {
    const result = loneTeen(13, 13);
    assert.equal(result, false);
  });
});
