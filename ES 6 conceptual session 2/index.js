const myObj = {
  name: "abul",
  id: 12,
  adderess: "dhaka",
};
const jsonData = JSON.stringify(myObj);
const objFormate = JSON.parse(jsonData);
console.log(objFormate);
