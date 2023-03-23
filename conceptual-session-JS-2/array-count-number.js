/* let numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  const index = i;
  const element = numbers[index];
  if (element > 5) {
    count++;
  }
}
console.log(count); */
function findGreterThenfive(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element > 5) {
      count++;
    }
  }
  return count;
}
let result = findGreterThenfive([-1, 2, -3, 4, 5, 6, -7, 8, -9, 10]);
console.log(result);
