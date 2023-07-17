import { assert } from "chai";
import { front22 } from "../src";
// Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.

// front22("kitten") → "kikittenki"
// front22("Ha") → "HaHaHa"
// front22("abc") → "ababcab"

describe("front22", () => {
  it("should return 'kikittenki' when passed the string 'kitten'", () => {
    const result = front22("kitten");
    assert.equal(result, "kikittenki");
  });
  it("should return 'HaHaHa' when passed the string 'Ha'", () => {
    const result = front22("Ha");
    assert.equal(result, "HaHaHa");
  });
  it("should return 'ababcab' when passed the string 'abc'", () => {
    const result = front22("abc");
    assert.equal(result, "ababcab");
  });
});
