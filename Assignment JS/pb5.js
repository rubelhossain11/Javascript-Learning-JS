function gemsToDiamond(gem1, gem2, gem3) {
    let friends1 = 21;
    let friends2 = 32;
    let friends3 = 43;
    friends1 = gem1 * friends1;
    friends2 = gem2 * friends2;
    friends3 = gem3 * friends3;
    let totalDiamond = friends1 + friends2 + friends3;
    if (totalDiamond < 1000) {
    return totalDiamond;
    }
   else(totalDiamond > 2000) {
      totalDiamond = totalDiamond - 2000;
    }
    return totalDiamond;
  }
  let result = gemsToDiamond(20, 200, 50);
  console.log(result);
  