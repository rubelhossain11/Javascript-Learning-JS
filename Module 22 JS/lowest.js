// write a program function to get the lowest number in an array
// number 240 153 463 765 433 135 532
function lowestInArray(numbers) {
  let smallest = numbers[0]; //numbers er modde akti 
//element k choto dorte hobe
  for (let i = 0; i < numbers.length; i++) {
    const index = [i];
    // console.log(index);
    const element = numbers[index];
    // console.log(element);
    if (element < smallest) {
      smallest = element;
    }
  }
  return smallest;
}
const arrayNumbers = [240, 153, 463, 765, 433, 135, 532];
const lowest = lowestInArray(arrayNumbers);
console.log(lowest);
