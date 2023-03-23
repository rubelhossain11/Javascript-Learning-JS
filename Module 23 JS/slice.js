// slice orginal array same as before
/* const friendsAge = [14, 34, 24, 23, 32, 15, 16];
const partial=friendsAge.slice(3,6);
console.log(partial); */

// splice orginal array change
const friendsAge = [14, 34, 24, 23, 32, 15, 16, 67, 86, 98];
// const partial = friendsAge.splice(3, 6);
const partial = friendsAge.splice(3, 6, 222, 333, 444, 555);
console.log(partial);
console.log(friendsAge);
