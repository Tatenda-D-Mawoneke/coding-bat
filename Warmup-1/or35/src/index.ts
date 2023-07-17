export function or35(givenInput: number): boolean | string {
  if (Math.sign(givenInput) == -1) return "number must be positive";
  return givenInput % 3 == 0 || givenInput % 5 == 0 ? true : false;
}
