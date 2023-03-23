var num1 = 10;
var num2 = 15;
var num3 = 8;
var num4 = 2;
if (num1 < num2 && num1 < num3 && num1 < num4) {
  console.log("number one is smallest");
} else if (num2 < num3 && num2 < num4) {
  console.log("number two is smallest");
} else if (num3 < num4) {
  console.log("number three is smallest");
} else {
  console.log("number four is smallest");
}
