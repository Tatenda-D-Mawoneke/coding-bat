export function loneTeen(givenInput1: number, givenInput2: number): boolean {
  const givenInput1IsTeen = givenInput1 >= 13 && givenInput1 <= 19;
  const givenInput2IsTeen = givenInput2 >= 13 && givenInput2 <= 19;

  return (givenInput1IsTeen && !givenInput2IsTeen) ||
    (!givenInput1IsTeen && givenInput2IsTeen)
    ? true
    : false;
}
