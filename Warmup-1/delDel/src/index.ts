export function delDel(givenInput: string): string {
  if (givenInput.includes("del")) {
    return givenInput.replace("del", "");
  }
  return givenInput;
}
