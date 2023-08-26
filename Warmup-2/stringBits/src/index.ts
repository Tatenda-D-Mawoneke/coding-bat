// Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

// stringBits("Hello") → "Hlo"
// stringBits("Hi") → "H"
// stringBits("Heeololeo") → "Hello"

export function stringBits(word: string): string {
    let result = ''
    for (let index = 0; index < word.length; index += 2) {
        result += word[index];
    }
    return result
}