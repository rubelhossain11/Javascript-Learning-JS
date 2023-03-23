/*var chikenPrice = 200;
var myMoney = 300;
if (chikenPrice < myMoney) {
  console.log("i eat chiken now");
} else {
  console.log("i have not enough money");
}*/

//logical and if else condition

/*var chikenPrice = 200;
var myMoney = 300;
var extraTaka = 250;
if (chikenPrice < myMoney && chikenPrice < extraTaka) {
  console.log("i eat chiken now");
} else if (chikenPrice < myMoney && chikenPrice > extraTaka) {
  console.log("i have not enough money");
} else {
  console.log("onno kuno din aisa khamune");
}*/

// logical or if else condition

var chikenPrice = 200;
var myMoney = 100;
var extraTaka = 250;
if (chikenPrice < myMoney || chikenPrice > extraTaka) {
  console.log("i eat chiken now");
} else if (chikenPrice < myMoney || chikenPrice < extraTaka) {
  console.log("i have not enough money");
} else {
  console.log("onno kuno din aisa khamune");
}
