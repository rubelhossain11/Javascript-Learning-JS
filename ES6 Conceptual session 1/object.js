const person = {
  name: "Hero Alom",
  age: 34,
  phone: "0345354",
  address: "bari nai",
  p: [1, 2, 3, 5],
};
// const Name = person.name;
// const age = person.age;
// const phone = person.phone;
// const bari = person.address;
// const { name, age, phone, address: bari, p } = person;
// console.log(bari);
// console.log(name, age, phone, address, p);
/* const person2 = { ...person };
person2.isMale = true;
console.log(person);
console.log(person2);
 */
const { p } = person;
const [number] = p;
console.log(number);
