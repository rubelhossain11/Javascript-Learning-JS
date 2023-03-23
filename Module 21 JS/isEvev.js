function isEvevOrOdd(number) {
  const reminder = number % 2;
  if (reminder === 0) {
    return true;
  } else {
    return false;
  }
}
const myNumber = isEvevOrOdd(20);
console.log(myNumber);
const sakibNumbers = isEvevOrOdd(123);
console.log(sakibNumbers);
const asqueNumber = isEvevOrOdd(431);
console.log(asqueNumber);
