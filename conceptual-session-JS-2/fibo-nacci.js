/* const n = 25;
const fibo = [0, 1];
for (let i = 2; i <= n; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
 */
function fibonacci(number) {
  let fibo = [0, 1];
  for (let i = 2; i <= number; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
let result = fibonacci(10);
console.log(result);
