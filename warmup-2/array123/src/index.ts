export function array123(values: number[]): boolean {
  const valuesString = values.join("");
  if (valuesString.includes("123")) {
    return true;
  }
  return false;
}
