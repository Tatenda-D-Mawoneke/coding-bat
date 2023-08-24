// Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front;

// frontTimes("Chocolate", 2) → "ChoCho"
// frontTimes("Chocolate", 3) → "ChoChoCho"
// frontTimes("Abc", 3) → "AbcAbcAbc"

export function frontTimes(word: string, mupltiple: number): string {
  const first3 = word[0] + word[1] + word[2];
  return first3.repeat(mupltiple);
}
