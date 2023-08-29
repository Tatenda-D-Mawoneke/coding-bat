export function stringX(phrase: string): string {
   if (phrase.length <= 1) {
      return phrase;
   }

   let result = phrase[0];

   for (let i = 1; i < phrase.length - 1; i++) {
      if (phrase[i] != "x") {
         result += phrase[i];
      }
   }

   result += phrase[phrase.length - 1];
   return result;
}
