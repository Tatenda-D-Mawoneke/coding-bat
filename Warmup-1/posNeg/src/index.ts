export function posNeg(num1: number, num2: number, negative: boolean): boolean {
  let myResult: boolean = false;
  const myBoolean1 = Boolean(num1);
  const myBoolean2 = Boolean(num2);
  switch (negative) {
    case false:
      if (
        (myBoolean1 && !myBoolean2 == false) ||
        (!myBoolean1 == false && myBoolean2)
      ) {
        myResult = true;
      }
      break;
    case true:
      if (!myBoolean1 == false && !myBoolean2 == false) {
        myResult = true;
      }
      break;
    default:
      console.log("There has to be an easier way to do this :'s");
      break;
  }
  return myResult;
}
