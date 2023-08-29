// Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.

import { assert } from "chai";
import { stringMatch } from "../src";

// stringMatch("xxcaazz", "xxbaaz") → 3
// stringMatch("abc", "abc") → 2
// stringMatch("abc", "axc") → 0

describe("stringMatch", () => {
   it("should return 3 when passed 'xxcaazz' and 'xxbaaz'", () => {
      const result = stringMatch("xxcaazz", "xxbaaz");
      assert.equal(result, 3);
   });
   it("should return 2 when passed 'abc' and 'abc'", () => {
      const result = stringMatch("abc", "abc");
      assert.equal(result, 2);
   });
   it("should return 0 when passed 'abc' and 'axc'", () => {
      const result = stringMatch("abc", "axc");
      assert.equal(result, 0);
   });
   it("should return 1 when passed 'ab' and 'ab'", () => {
      const result = stringMatch("ab", "ab");
      assert.equal(result, 1);
   });
   it("should return 0 when passed '' and ''", () => {
      const result = stringMatch("", "");
      assert.equal(result, 0);
   });
});
