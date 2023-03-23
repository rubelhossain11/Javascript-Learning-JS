function evenOdd(string) {
  if (typeof string === "string") {
    let stringLength = string.length;
    if (stringLength % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  } else {
    return " Your input is not a string. please input a string then check even or odd.";
  }
}
let evenOddResult = evenOdd("rubel");
console.log(evenOddResult);

/* function evenOdd(string) {
  let length = string.length;
  const reminder = length / 2;
  if (reminder % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
let result = evenOdd("phero");
console.log(result);
 */
