var student = {
  id: 12,
  name: "tanvir",
  height: 5.8,
  weight: "50kg",
  quality: "good",
};
// three steps using object values

// console.log(student);
// console.log(student.height);
// console.log(student.id);
student.id = 20;
student.weight = "60kg";
// console.log(student.id);
// console.log(student.weight);
/* var properties = Object.keys(student);
console.log(properties);
var propertyValues = Object.values(student);
console.log(propertyValues);
 */

var shoppingCard = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
};
// 3 different way we get property value

// first

/* var penCount = shoppingCard.pen;
console.log(penCount); */

// second
var penCount2 = shoppingCard["pen"];
// console.log(penCount2);

// third

var propertyName = "pen";
var propertyValues = shoppingCard[propertyName];
console.log(propertyName, propertyValues);
