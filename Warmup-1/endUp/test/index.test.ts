import { assert } from "chai";
import { endUp } from "../src";
// Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.

// endUp("Hello") → "HeLLO"
// endUp("hi there") → "hi thERE"
// endUp("hi") → "HI"

describe("endUp", () => {
  it("should return 'HeLLO' when passed string 'Hello' capitalising the last 3 characters of the string", () => {
    const result = endUp("Hello");
    assert.equal(result, "HeLLO");
  });
  it("should return 'hi thERE' when passed string 'hi there' capitalising the last 3 characters of the string", () => {
    const result = endUp("hi there");
    assert.equal(result, "hi thERE");
  });
  it("should return 'HI' when passed string 'hi' capitalising every character of the string", () => {
    const result = endUp("hi");
    assert.equal(result, "HI");
  });
  it("should return 'AYO' when passed string 'ayo' capitalising every character of the string", () => {
    const result = endUp("Hello");
    assert.equal(result, "HeLLO");
  });
  it("should return 'LoREM' when passed string 'Lorem' capitalising the last 3 characters of the string", () => {
    const result = endUp("Lorem");
    assert.equal(result, "LoREM");
  });
});
