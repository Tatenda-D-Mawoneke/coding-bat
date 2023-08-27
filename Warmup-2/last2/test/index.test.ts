import { assert } from 'chai';
import { last2 } from '../src';
// Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).

// last2("hixxhi") → 1
// last2("xaxxaxaxx") → 1
// last2("axxxaaxx") → 2

describe("last2", () => {
    it("should return 1 when passed 'hixxhi'", () => {
        const result = last2("hixxhi");
        assert.equal(result, 1)
    })
    it("should return 1 when passed 'xaxxaxaxx'", () => {
        const result = last2("xaxxaxaxx");
        assert.equal(result, 1)
    })
    it("should return 2 when passed 'axxxaaxx'", () => {
        const result = last2("axxxaaxx");
        assert.equal(result, 2)
    })
    it("should return 1 when passed 'hxh'", () => {
        const result = last2("hxh");
        assert.equal(result, 0)
    })
    it("should return 1 when passed 'xhxhxh'", () => {
        const result = last2("xhxhxh");
        assert.equal(result, 2)
    })
    it("should return 0 when passed 'abcde'", () => {
        const result = last2("abcde");
        assert.equal(result, 0)
    })
})

