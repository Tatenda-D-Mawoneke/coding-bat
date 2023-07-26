export function close10(givenInput1: number, givenInput2: number): number {
  const givenInput1Modulo10 = givenInput1 % 10;
  const givenInput2Modulo10 = givenInput2 % 10;
  if (givenInput1Modulo10 < givenInput2Modulo10) {
    return givenInput2;
  } else if (givenInput2Modulo10 < givenInput1Modulo10) {
    return givenInput1;
  } else {
    return 0;
  }
}
