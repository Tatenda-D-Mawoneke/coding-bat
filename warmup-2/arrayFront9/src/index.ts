export function arrayFront9(values: number[]): boolean {
  for (let index = 0; index < 4; index++) {
    if (values[index] == 9) {
      return true;
    }
  }
  return false;
}
