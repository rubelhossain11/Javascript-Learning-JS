const phones = [
  {
    name: "Samsung",
    camera: 12,
    storage: "32gb",
    price: 36000,
    color: "silver",
  },
  {
    name: "Oppo",
    camera: 12,
    storage: "32gb",
    price: 22000,
    color: "Brown",
  },
  {
    name: "Walton",
    camera: 12,
    storage: "32gb",
    price: 26000,
    color: "silver",
  },
  {
    name: "Xaomi",
    camera: 12,
    storage: "32gb",
    price: 46000,
    color: "White",
  },
  {
    name: "Iphone",
    camera: 12,
    storage: "32gb",
    price: 76000,
    color: "gold",
  },
  {
    name: "Nokia",
    camera: 12,
    storage: "32gb",
    price: 56000,
    color: "gold",
  },
  {
    name: "STC",
    camera: 12,
    storage: "32gb",
    price: 39000,
    color: "gold",
  },
];
function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}
const mySelected = cheapestPhone(phones);
console.log(mySelected);
