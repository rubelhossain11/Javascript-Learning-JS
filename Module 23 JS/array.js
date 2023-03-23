const country = "Bangladesh";
const age = 19;
const isIndependent = true;
const student = { id: 14, name: "rohim", class: 11 };
const friendsAge = [14, 34, 24, 23, 32, 15, 16];

// console.log(typeof country);
// console.log(typeof age);
// console.log(typeof isIndependent);
// console.log(typeof student);
// console.log(typeof friendsAge);
/* function add(num1, num2) {
  return num1 + num2;
}
console.log(add);
 */
// check array
// console.log(Array.isArray(friendsAge));
/* console.log(friendsAge.includes(21));
console.log(friendsAge.includes(23));
 */
const friends = [19, 13];
const totalFriends = friendsAge.concat(friends);
console.log(totalFriends);
