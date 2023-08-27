export function arrayCount9(inputArray: number[]): number {
    let count = 0
    for (const element of inputArray) {
        if (element == 9) {
            count++
        }
    }
    return count
}