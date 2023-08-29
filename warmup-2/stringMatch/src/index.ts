// Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.

// stringMatch("xxcaazz", "xxbaaz") → 3
// stringMatch("abc", "abc") → 2
// stringMatch("abc", "axc") → 0

export function stringMatch(a: string, b: string): number {
   let count = 0;

   for (let index = 0; index < a.length; index++) {
      const firstAChar = a[index];
      const firstBChar = b[index];

      if (firstAChar == firstBChar) {
         const secondAChar = a[index + 1];
         const secondBChar = b[index + 1];

         if (secondAChar == secondBChar && secondAChar != undefined) {
            count++;
         }
      }
   }
   return count;
}
