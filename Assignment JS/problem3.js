function isLGSeven(number) {
  if (typeof number === "number") {
    let difference = number - 7;
    if (difference < 7) {
      return difference;
    } else {
      return number * 2;
    }
  } else {
    return "your input is not a number, please input a number.";
  }
}
let result = isLGSeven(15);
console.log(result);

/* function isLGSeven(number) {
  if (number > 7) {
    return number * 2;
  } else {
    return number - 7;
  }
}
let result = isLGSeven(15);
console.log(result);
 */
