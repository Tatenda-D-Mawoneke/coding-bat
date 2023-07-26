// Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

import { assert } from "chai";
import { delDel } from "../src";

// delDel("adelbc") → "abc"
// delDel("adelHello") → "aHello"
// delDel("adedbc") → "adedbc"

describe("delDel", () => {
  it("should return return 'abc' when passed 'adelbc' removing the del", () => {
    const result = delDel("adelbc");
    assert.equal(result, "abc");
  });
  it("should return return 'aHello' when passed 'adelHello' removing the del", () => {
    const result = delDel("adelHello");
    assert.equal(result, "aHello");
  });
  it("should return return 'adedbc' when passed 'adedbc' keeping the string unchanged", () => {
    const result = delDel("adedbc");
    assert.equal(result, "adedbc");
  });
});
