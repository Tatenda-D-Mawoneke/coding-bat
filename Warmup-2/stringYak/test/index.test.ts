// Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.

import { assert } from "chai";
import { stringYak } from "../src";

// stringYak("yakpak") → "pak"
// stringYak("pakyak") → "pak"
// stringYak("yak123ya") → "123ya"

describe("stringYak", () => {
   it("should return pak when given yakpak", () => {
      const result = stringYak("yakpak");
      assert.equal(result, "pak");
   });
   it("should return pak when given pakyak", () => {
      const result = stringYak("pakyak");
      assert.equal(result, "pak");
   });
   it("should return 123ya when given yak123ya", () => {
      const result = stringYak("yak123ya");
      assert.equal(result, "123ya");
   });
});
