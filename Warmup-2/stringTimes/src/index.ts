// Given a string and a non-negative int n, return a larger string that is n copies of the original string.

// stringTimes("Hi", 2) → "HiHi"
// stringTimes("Hi", 3) → "HiHiHi"
// stringTimes("Hi", 1) → "Hi"

export function stringTimes(word: string, factor: number): string {
  return word.repeat(factor);
}
