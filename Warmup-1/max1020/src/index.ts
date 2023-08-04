// Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

// max1020(11, 19) → 19
// max1020(19, 11) → 19
// max1020(11, 9) → 11

export function max1020(num1: number, num2: number): number {
  const num1InRange = numWithinRange(num1);
  const num2InRange = numWithinRange(num2);

  return num1InRange && num2InRange
    ? Math.max(num1, num2)
    : num1InRange && !num2InRange
    ? num1
    : num2InRange && !num1InRange
    ? num2
    : 0;
}

function numWithinRange(num: number): boolean {
  return num >= 10 && num <= 20;
}
