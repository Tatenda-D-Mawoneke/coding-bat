// Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.

// posNeg(1, -1, false) → true
// posNeg(-1, 1, false) → true
// posNeg(-4, -5, true) → true

export function posNeg(num1: number, num2: number, negative: boolean): boolean {
  // attempt 3:
  const myNum1 = Math.sign(num1);
  const myNum2 = Math.sign(num2);
  return (
    (myNum1 * myNum2 == -1 && !negative) || (myNum1 * myNum2 == 1 && negative)
  );
}
