// Tom and his friends are participating in the WHO IS TALLEST ? competition as per the name person with the highest height will be the winer can you find the tallest among Tom and all of his friends ?
// input
// the input line can have multiple numbers xi (the height of friend in cm)
// 167 190 120 165 137
// output 188
function maxInArray(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    // console.log(index);
    const element = numbers[index];
    // console.log(element);
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}
const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log("tallest person is:", tallest);
