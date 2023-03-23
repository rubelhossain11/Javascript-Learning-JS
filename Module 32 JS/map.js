/* const numbers = [2, 8, 3, 4, 7];
const ouput = [];
for (const number of numbers) {
  const double = number * 2;
  ouput.push(double);
}
console.log(ouput); */
// map use
const numbers = [2, 8, 3, 4, 7];
const doubleIt = (num) => num * 2;
const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);
