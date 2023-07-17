export function front22(givenInput: string): string {
  const splicedText = givenInput.substring(0, 2);
  return `${splicedText}${givenInput}${splicedText}`;
}
