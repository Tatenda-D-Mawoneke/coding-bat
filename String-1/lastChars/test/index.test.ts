import { assert } from "chai";
import lastChars from "../src";

// Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

// lastChars("last", "chars") → "ls"
// lastChars("yo", "java") → "ya"
// lastChars("hi", "") → "h@"

describe("lastChar", () => {
	it("Should return ls when given 'last' & 'chars'", () => {
		const result = lastChars("last", "chars");
		assert.equal(result, "ls");
	});
	it("Should return ls when given 'yo' & 'java'", () => {
		const result = lastChars("yo", "java");
		assert.equal(result, "ya");
	});
	it("Should return ls when given 'hi' & ''", () => {
		const result = lastChars("hi", "");
		assert.equal(result, "h@");
	});
});