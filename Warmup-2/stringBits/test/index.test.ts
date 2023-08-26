// Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

import { assert } from "chai";
import { stringBits } from "../src";

// stringBits("Hello") → "Hlo"
// stringBits("Hi") → "H"
// stringBits("Heeololeo") → "Hello"

describe("stringBits", () => {
    it("should return 'Hlo' when passed in 'Hello'", () => {
        const result = stringBits('Hello');
        assert.equal(result, "Hlo")
    })
    it("should return 'H' when passed in 'Hi'", () => {
        const result = stringBits('Hi');
        assert.equal(result, "H")
    })
    it("should return 'Hello' when passed in 'Heeololeo'", () => {
        const result = stringBits('Heeololeo');
        assert.equal(result, "Hello")
    })
    it("should return 'Random' when passed in 'Rnm'", () => {
        const result = stringBits('Heeololeo');
        assert.equal(result, "Hello")
    })
    it("should return '' when passed in ''", () => {
        const result = stringBits('');
        assert.equal(result, "")
    })
})