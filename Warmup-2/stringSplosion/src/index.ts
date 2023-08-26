export function stringSplosion(word: string): string {
    let result: string = ''
    let count = 0
    for (const char of word) {
        for (let index = 0; index <= count; index++) {
            result += word[index];
        }
        count++
    }
    return result
}