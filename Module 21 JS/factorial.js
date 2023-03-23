/* function factorial(number) {
  sum = 1;
  for (let i = 1; i <= number; i++) {
    sum = sum * i;
    console.log(i, sum);
  }
  return sum;
}
const myNumbers = factorial(7);
const herNumbers = factorial(10);
 */
//* / 1+2+3+4+5+6+7
/* function getSum(number) {
  sum = 0;
  for (let i = 0; i <= number; i++) {
    sum = sum + i;
    console.log(i, sum);
  }
  return sum;
}
const myNumber = getSum(7);
  */

function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
    console.log(i, result);
  }
  return result;
}
const myNumbers = factorial(10);
console.log("factorial of 10:", myNumbers);
