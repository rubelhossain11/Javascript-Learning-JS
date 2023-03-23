var shoppingCard = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
};
var keys = Object.keys(shoppingCard);
var propertyValues = Object.values(shoppingCard);
// console.log(keys);
// console.log(propertyValues);
// for loop using
/* for (var i = 0; i < keys.length; i++) {
  var propertyName = keys[i];
  var propertyValue = shoppingCard[propertyName];
  console.log(propertyName, propertyValue);
} */

// for in
for (var propertyName in shoppingCard) {
  const value = shoppingCard[propertyName];
  console.log(propertyName, value);
}
