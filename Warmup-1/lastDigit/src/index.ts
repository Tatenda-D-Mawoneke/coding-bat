export function lastDigit(num1: number, num2: number): boolean {
  const num1LastDigit = String(num1).slice(-1);
  const num2LastDigit = String(num2).slice(-1);
  return num1LastDigit == num2LastDigit;
}
