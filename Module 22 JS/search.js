/* const lyrics =
  "tumi bondhu kala paKhi ami jeno ki.bosonto kale tumai bolte pari ni,kala kala sada sada"; */
// const doesExits = lyrics.includes("Bosonto");
// includes
/* const doesExits = lyrics.toLocaleLowerCase().includes("pakhi");

console.log(doesExits);
 */
/* console.log(lyrics.indexOf("jeno"));
console.log(lyrics.indexOf("tumi"));
console.log(lyrics.indexOf("ni"));
console.log(lyrics.indexOf("bosonto"));
console.log(lyrics.indexOf("tumare"));
console.log(lyrics.indexOf("ami"));
 */
/* if(lyrics.indexOf('kala')!==-1){
    console.log('exists in side the string');
}
else{
    console.log('cannot find the string');
} */
// starts with
// console.log(lyrics.startsWith("tumi"));

// ends with
const fileName = "mybiodata.pdf";
const otherFile = "mypic.png";
fileName.endsWith("pdf");
// console.log(fileName);

// splite
/* const lyrics =
  "tumi bondhu kala paKhi ami jeno ki.bosonto kale tumai bolte pari ni,kala kala sada sada"; */
const parts = lyrics.split(" ");
// console.log(parts);
const sentence = lyrics.split(".");
// console.log(sentence);
const chars = lyrics.split("");
// console.log(chars);

// slice
// const partial = lyrics.slice(5, 8);
// console.log(partial);
const partial2 = lyrics.substring(5, 8);
// console.log(partial2);

// cocat

const lyrics = [
  "tumi bondhu kala paKhi ami jeno",
  "ki.bosonto kale tumai bolte pari ni,",
  "kala kala sada sada",
];
const added = lyrics.join(":");
console.log(added