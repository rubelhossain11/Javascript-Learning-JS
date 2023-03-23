// const myNumbers=[13,53,64,24,64,75,45]
function getSumArray(numbers) {
  let sum = 0;

  for (var i = 0; i < myNumbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    console.log(index, element, sum);
  }
  return sum;
}
const myNumbers = [13, 53, 64, 24, 64, 75, 45];
getSumArray(myNumbers);
