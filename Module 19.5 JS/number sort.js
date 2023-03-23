var number = [3, 5, 4, 1, 6, 2, 7, 9, 300, 12, 16, 20, 100, 50];
element = number.sort();
number.sort(function (a, b) {
  return a - b;
});
for (var i = 0; i < number.length; i++) {
  console.log(number[i]);
}
console.log(element);
