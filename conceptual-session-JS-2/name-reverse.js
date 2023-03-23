let name1 = "sagor";
let name2 = "shahadot";
let length1 = name1.length;
let length2 = name2.length;
if (length1 > length2) {
  console.log(name1.split("").reverse().join(""));
} else {
  console.log(name2.split("").reverse().join(""));
}
