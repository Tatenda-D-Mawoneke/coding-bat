// Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.

// everyNth("Miracle", 2) → "Mrce"
// everyNth("abcdefg", 2) → "aceg"
// everyNth("abcdefg", 3) → "adg"

export function everyNth(myString: string, n: number): string {
  let newString = "";
  for (let i = 0; i < myString.length; i += n) {
    newString += myString[i];
  }
  return newString;
}
