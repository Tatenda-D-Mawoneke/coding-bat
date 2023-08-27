// Given an array of ints, return the number of 9's in the array.

import { assert } from "chai";
import { arrayCount9 } from "../src";

// arrayCount9([1, 2, 9]) → 1
// arrayCount9([1, 9, 9]) → 2
// arrayCount9([1, 9, 9, 3, 9]) → 3

describe("arrayCount9", () => {
    it("should return 1 when given [1, 2, 9]", () => {
        const result = arrayCount9([1, 2, 9]);
        assert.equal(result, 1);
    });
    it("should return 2 when given [1, 9, 9]", () => {
        const result = arrayCount9([1, 9, 9]);
        assert.equal(result, 2);
    });
    it("should return 3 when given [1, 9, 9, 3, 9] 3", () => {
        const result = arrayCount9([1, 9, 9, 3, 9]);
        assert.equal(result, 3);
    });
    it("should return 9 when given [9,9,9,9,9,9,9,9,9]", () => {
        const result = arrayCount9([9, 9, 9, 9, 9, 9, 9, 9, 9]);
        assert.equal(result, 9);
    });
    it("should return 0 when given [0,0,0]", () => {
        const result = arrayCount9([0, 0, 0]);
        assert.equal(result, 0);
    });
});
