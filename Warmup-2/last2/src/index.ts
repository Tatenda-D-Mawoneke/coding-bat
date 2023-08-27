// Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).

// last2("hixxhi") → 1
// last2("xaxxaxaxx") → 1
// last2("axxxaaxx") → 2
export function last2(word: string): number {

    const wordArray = [...word]
    const last2Array = wordArray.splice(-2)
    const last2 = `${last2Array[0]}${last2Array[1]}`
    let current2 = '';
    let count = 0
    for (let index = 0; index < wordArray.length; index++) {
        current2 = wordArray[index] + wordArray[index + 1]
        if (current2 == last2) {
            count++
        }
    }
    return count
}