//  break keyword
/* for (i = 0; i < 20; i++) {
    if(i>4){
        break;
    }
  console.log(i);
} */

// continue keyword
/* for (i = 0; i < 10; i++) {
  if (i > 4) {
    continue;
  }
  console.log(i);
} */
/* var items = ["bottle", "sunglass", "paper", "pen", "notebook"];
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  if(item=='pen'){
    break;
  }
  console.log(item);
} */
var items = ["bottle", "sunglass", "paper", "pen", "notebook"];
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  if (item == "pen") {
    continue;
  }
  console.log(item);
}
