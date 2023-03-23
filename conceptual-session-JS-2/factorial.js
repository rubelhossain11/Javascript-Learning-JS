// factorial
function factorial(number) {
  let fact = 1;
  for (let i = number; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
}
let result = factorial(8);
console.log(result);
