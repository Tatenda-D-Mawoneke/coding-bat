export function delDel(myString: string): string {
  const mySubString = myString[1] + myString[2] + myString[3];
  return mySubString == "del" ? myString.replace("del", "") : myString;
}
