function findingBadData(numbers) {
  if (Array.isArray(numbers)) {
    let negativeNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0) negativeNumber++;
    }
    return negativeNumber;
  } else {
    return "Your input is not an array. please input an array.";
  }
}
let array = [2, -5, -7, 13, -7, -75, -56, 67];
let badNumber = findingBadData(array);
console.log(badNumber);
