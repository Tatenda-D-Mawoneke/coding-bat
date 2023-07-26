// Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so "ozymandias" yields "oz".

import { assert } from "chai";
import { startOz } from "../src";

// startOz("ozymandias") → "oz"
// startOz("bzoo") → "z"
// startOz("oxx") → "o"

describe("startOz", () => {
  it("should return 'oz' when given 'ozymandias' as the first character is an o and the second character is a z", () => {
    const result = startOz("ozymandias");
    assert.equal(result, "oz");
  });
  it("should return 'z' when given 'bzoo' as the first character is not an o and the second character is a z", () => {
    const result = startOz("bzoo");
    assert.equal(result, "z");
  });
  it("should return 'o' when given 'oxx' as the first character is an o and the second character is not a z", () => {
    const result = startOz("oxx");
    assert.equal(result, "o");
  });
});
