/* const user = { id: 1, name: "foisal", job: "actor" };
const stirngified = JSON.stringify(user);
console.log(user);
console.log(stirngified);
 */
const shop = {
  owner: "Alia",
  address: {
    street: "mymensingh",
    city: "myn",
    country: "BD",
  },
  products: ["laptop", "mic", "monitor", "keyboard"],
  renenue: 45000,
  isOpen: true,
  isNew: false,
};
const shopJSON = JSON.stringify(shop);
console.log(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
