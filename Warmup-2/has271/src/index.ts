// Given an array of ints, return true if it contains a 2, 7, 1 pattern: a value, followed by the value plus 5, followed by the value minus 1. Additionally the 271 counts even if the "1" differs by 2 or less from the correct value.

// has271([1, 2, 7, 1]) → true
// has271([1, 2, 8, 1]) → false
// has271([2, 7, 1]) → true

export function has271(numbers: number[]): boolean {
   let patternFound = false;
   for (let index = 0; index < numbers.length; index++) {
      const firstNumber = numbers[index];
      const secondNumber = numbers[index + 1];
      const thirdNumber = numbers[index + 2];
      if (secondNumber == firstNumber + 5 && thirdNumber == firstNumber - 1) {
         return !patternFound;
      }
   }
   return patternFound;
}
