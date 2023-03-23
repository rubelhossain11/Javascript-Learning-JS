// 1.[288,243,533,622,364,853,884,433,655,345,704,840]
// this array who is largest number find it using function

/* let numbers = [288, 243, 533, 622, 364, 853, 884, 433, 655, 345, 704, 840];
let largest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  const index = i;
  const element = numbers[index];
  if (element > largest) {
    largest = element;
  }
}
console.log(largest); */

/* function findLargestNumbeerInArray(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

let result = findLargestNumbeerInArray([
  288, 243, 533, 622, 364, 853, 884, 433, 655, 345, 704, 840,
]);
console.log(result);
 */

// find the smallest number in array
/* let numbers = [43, 24, 54, 35, 73, 74, 33, 42, 67, 55, 11, 34, 96, 100, 52];
let smallest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  const index = i;
  const element = numbers[index];
  if (element < smallest) {
    smallest = element;
  }
}
console.log("the smallest number is:", smallest);
 */

function findSmallestNumbeerInArray(numbers) {
  let smallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element < smallest) {
      smallest = element;
    }
  }
  return smallest;
}
let result = findSmallestNumbeerInArray([
  43, 24, 54, 35, 73, 74, 33, 42, 67, 55, 11, 34, 96, 100, 52,
]);
console.log("the samllest number is:", result);
