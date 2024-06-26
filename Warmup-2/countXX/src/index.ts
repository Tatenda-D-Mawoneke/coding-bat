// Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".

// countXX("abcxx") → 1
// countXX("xxx") → 2
// countXX("xxxx") → 3

export function countXX(word: string): number {
  let count = 0;
  const wordArray: string[] = [...word];
  wordArray.forEach(function (char, index) {
    if (char == "x") {
      if (wordArray[index + 1] == "x") {
        count++;
      }
    }
  });
  return count;
}
