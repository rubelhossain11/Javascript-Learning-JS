const shoppingCart = [
  { name: "shoe", price: 1200 },
  { name: "shirt", price: 2200 },
  { name: "pant", price: 3300 },
  { name: "belt", price: 200 },
];
function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    // console.log(product);
    sum = sum + product.price;
  }
  return sum;
}
const expense = totalCost(shoppingCart);
console.log("my total cost", expense);
