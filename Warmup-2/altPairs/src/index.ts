// Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

// altPairs("kitten") → "kien"
// altPairs("Chocolate") → "Chole"
// altPairs("CodingHorror") → "Congrr"
export function altPairs(phrase: string): string {
   let newPhrase = "";
   for (let index = 0; index < phrase.length; index += 4) {
      newPhrase += phrase[index];
      if (phrase[index + 1]) {
         newPhrase += phrase[index + 1];
      }
   }
   return newPhrase;
}
