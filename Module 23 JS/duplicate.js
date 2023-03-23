function removeDuplicte(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}
const friendsName = [
  "abul",
  "babul",
  "kabul",
  "cabul",
  "dabul",
  "habul",
  "abul",
  "cabul",
  "dabul",
  "kabul",
  "abul",
  "satter",
];
const uniqueName = removeDuplicte(friendsName);
console.log(uniqueName);
