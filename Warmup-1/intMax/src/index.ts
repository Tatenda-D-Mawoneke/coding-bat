export function intMax(a: number, b: number, c: number): number {
  //   return Math.max(a, b, c);

  const myArray = [a, b, c];
  let largestNumber = 0;
  for (let number of myArray) {
    if (largestNumber < number) {
      largestNumber = number;
    }
  }
  return largestNumber;
}
