/*
Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front;

frontTimes("Chocolate", 2) → "ChoCho"
frontTimes("Chocolate", 3) → "ChoChoCho"
frontTimes("Abc", 3) → "AbcAbcAbc"
*/

import { assert } from "chai";
import { frontTimes } from "../src";

describe("frontTimes", () => {
  it("should return 'ChoCho' when passed Chocolate and n = 2", () => {
    const result = frontTimes("Chocolate", 2);
    assert.equal(result, "ChoCho");
  });
  it("should return 'ChoChoCho' when passed Chocolate and n = 3", () => {
    const result = frontTimes("Chocolate", 3);
    assert.equal(result, "ChoChoCho");
  });
  it("should return 'AbcAbcAbc' when passed Abc and n = 3", () => {
    const result = frontTimes("Abc", 3);
    assert.equal(result, "AbcAbcAbc");
  });
  it("should return 'AbAbAb' when passed Ab and n = 3", () => {
    const result = frontTimes("Ab", 3);
    assert.equal(result, "AbAbAb");
  });
});