/* 
fixed per item wood requirements
1.chair--->3 cft
2.table--->10 cft
3.bed---->50 cft
vary:quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantity * perBedWood;
  const totalWood = chairWood + bedWood + tableWood;
  return totalWood;
}
const totalWood = woodCalculator(2, 2, 5);
console.log("total wood required", totalWood);
