const number1 = [2, 4, 6, 8, 12, 35, 53];
const number2 = [32.45, 88];
// console.log(Math.min(...number1));
const newArray = [123, 142, ...number1];
// console.log(newArray);

// console.log(Math.min(3, 4, 2, 54, 64));

const arr1 = [32.45, 88];
const arr2 = [...arr1];
// console.log(arr1, arr2);
arr1.push(333);
arr2.push(555);
arr2.push(222);
arr1.push(111);

// console.log(arr1);
// console.log(arr2);

const arr = [2, 4, 6, 8, 12, 35, 53];
const [first, second, ...remainig] = arr;
console.log(first, second);
console.log(remainig);
