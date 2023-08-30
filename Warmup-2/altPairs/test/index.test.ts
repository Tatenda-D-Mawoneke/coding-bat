// Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

// altPairs("kitten") → "kien"
// altPairs("Chocolate") → "Chole"
// altPairs("CodingHorror") → "Congrr"

import { assert } from "chai";
import { altPairs } from "../src";

describe("altPairs", () => {
   it("should return 'kien' when given 'kitten' ", () => {
      const result = altPairs("kitten");
      assert.deepEqual(result, "kien");
   });
   it("should return 'Chole' when given 'Chocolate' ", () => {
      const result = altPairs("Chocolate");
      assert.deepEqual(result, "Chole");
   });
   it("should return 'Congrr' when given 'CodingHorror' ", () => {
      const result = altPairs("CodingHorror");
      assert.deepEqual(result, "Congrr");
   });
   it("should return '' when given '' ", () => {
      const result = altPairs("kitten");
      assert.deepEqual(result, "kien");
   });
   it("should return 'kie' when given 'kitte' ", () => {
      const result = altPairs("kitte");
      assert.deepEqual(result, "kie");
   });
});
