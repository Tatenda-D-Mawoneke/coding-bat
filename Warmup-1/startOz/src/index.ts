export function startOz(givenInput: string): string {
  const myStringArray = [...givenInput];
  if (myStringArray[0] == "o" && myStringArray[1] == "z") {
    return "oz";
  } else if (myStringArray[0] == "o" && myStringArray[1] != "z") {
    return "o";
  } else if (myStringArray[0] != "o" && myStringArray[1] == "z") {
    return "z";
  }
  return "you failed!";
}
