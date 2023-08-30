// Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.

// noTriples([1, 1, 2, 2, 1]) → true
// noTriples([1, 1, 2, 2, 2, 1]) → false
// noTriples([1, 1, 1, 2, 2, 2, 1]) → false
export function noTriples(number: number[]): boolean {
   let triplesFound = false;
   for (let index = 0; index < number.length; index++) {
      if (
         number[index] == number[index + 1] &&
         number[index] == number[index + 2]
      ) {
         triplesFound = true;
         return !triplesFound;
      }
   }
   return !triplesFound;
}
