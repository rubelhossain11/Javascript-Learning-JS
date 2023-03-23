function gemsToDiamond(gem1, gem2, gem3) {
  if (
    typeof gem1 === "number" &&
    typeof gem2 === "number" &&
    typeof gem3 === "number"
  ) {
    const firstFriendGems1 = 21;
    const secondFriendGems2 = 32;
    const thirdFriendGems3 = 43;

    let firstFriendDiamond = firstFriendGems1 * gem1;
    let secondFriendDiamond = secondFriendGems2 * gem2;
    let thirdFriendDiamond = thirdFriendGems3 * gem3;

    let totalDiamond =
      firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;

    if (totalDiamond < 2000) {
      return totalDiamond;
    } else {
      return totalDiamond - 2000;
    }
  } else {
    return "Your inputs are not numbers. Please inputs number.";
  }
}
let total = gemsToDiamond(1, 1, 1);
console.log(total);

/* function gemsToDiamond(gem1, gem2, gem3) {
  if (
    typeof gem1 !== "number" ||
    typeof gem2 !== "number" ||
    typeof gem3 !== "number"
  ) {
    return "Please enter a number";
  }
  let friends1 = 21;
  let friends2 = 32;
  let friends3 = 43;
  friends1 = gem1 * friends1;
  friends2 = gem2 * friends2;
  friends3 = gem3 * friends3;
  let totalDiamond = friends1 + friends2 + friends3;
  if (totalDiamond > 2000) {
    totalDiamond = totalDiamond - 2000;
  }
  return totalDiamond;
}
let result = gemsToDiamond(80, "200", 50);
console.log(result);
 */
