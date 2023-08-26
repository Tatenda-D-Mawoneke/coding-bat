// Given a non-empty string like "Code" return a string like "CCoCodCode".

import { assert } from "chai"
import { stringSplosion } from "../src"

// stringSplosion("Code") → "CCoCodCode"
// stringSplosion("abc") → "aababc"
// stringSplosion("ab") → "aab"

describe("stringSplosion", () => {
    it("should return 'Code' when passed in 'CCoCodCode'", () => {
        const result = stringSplosion("Code")
        assert.equal(result, "CCoCodCode")
    })
    it("should return 'aababc' when passed in 'abc'", () => {
        const result = stringSplosion("abc")
        assert.equal(result, "aababc")
    })
    it("should return 'aab' when passed in 'ab'", () => {
        const result = stringSplosion("ab")
        assert.equal(result, "aab")
    })
    it("should return 'C' when passed in 'C'", () => {
        const result = stringSplosion("C")
        assert.equal(result, "C")
    })
    it("should return 'OO O K' when passed in 'O K'", () => {
        const result = stringSplosion("O K")
        assert.equal(result, "OO O K")
    })
})