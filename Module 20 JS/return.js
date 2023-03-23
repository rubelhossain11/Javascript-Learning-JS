function myShopping(taka) {
  var shirtPrice = 500;
  var shirtPis = taka / shirtPrice;
  return shirtPis;
}
var taka = 3000;
var shirtPis = myShopping(taka);
console.log("my shirt pis:", shirtPis);
