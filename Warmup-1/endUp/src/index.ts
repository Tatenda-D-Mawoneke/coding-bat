// Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.

// endUp("Hello") → "HeLLO"
// endUp("hi there") → "hi thERE"
// endUp("hi") → "HI"

export function endUp(myString: string): string {
  return myString.length < 3
    ? myString.toUpperCase()
    : myString.slice(0, myString.length - 3) +
        myString.slice(myString.length - 3, myString.length).toUpperCase();
}
