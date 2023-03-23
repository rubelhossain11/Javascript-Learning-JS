function mindGame(number) {
  if (typeof number === "number") {
    const firstResult = number * 3;
    const secondResult = firstResult + 10;
    const thirdResult = secondResult / 2;
    const result = thirdResult - 5;

    return result;
  } else {
    return "your input is not a number, please input a number.";
  }
}

 function evenOdd(string) {
  if (typeof string === "string") {
    let stringLength = string.length;
    if (stringLength % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  } else {
    return " Your input is not a string. please input a string then check even or odd.";
  }
} 

 function isLGSeven(number) {
    if (typeof number === "number") {
      let difference = number - 7;
      if (difference < 7) {
        return difference;
      } else {
        return number * 2;
      }
    } else {
      return "your input is not a number, please input a number.";
    }
  } 


function findingBadData(numbers) {
  if (Array.isArray(numbers)) {
    let negativeNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0) negativeNumber++;
    }
    return negativeNumber;
  } else {
    return "Your input is not an array. please input an array.";
  }
}

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
