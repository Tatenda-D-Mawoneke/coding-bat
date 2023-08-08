import { assert } from "chai";
import { everyNth } from "../src";

// Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.

// everyNth("Miracle", 2) → "Mrce"
// everyNth("abcdefg", 2) → "aceg"
// everyNth("abcdefg", 3) → "adg"

describe("everyNth", () => {
  it("should return 'Mrce' when passed a string 'Miracle' and n = 2", () => {
    const result = everyNth("Miracle", 2);
    assert.equal(result, "Mrce");
  });
  it("should return 'aceg' when passed a string 'abcdefg' and n = 2", () => {
    const result = everyNth("abcdefg", 2);
    assert.equal(result, "aceg");
  });
  it("should return 'adg' when passed a string 'abcdefg' and n = 3", () => {
    const result = everyNth("abcdefg", 3);
    assert.equal(result, "adg");
  });
  it("should return 'ab' when passed a string 'a' and n = 1", () => {
    const result = everyNth("ab", 1);
    assert.equal(result, "ab");
  });
  it("should return 'a' when passed a string 'a' and n = 1", () => {
    const result = everyNth("a", 2);
    assert.equal(result, "a");
  });
});
