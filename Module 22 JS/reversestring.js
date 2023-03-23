// i am a good boy
// ouput:yob doog a ma i
/* function reversString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    reversed = reversed + element;
    console.log(element);
  }
  return reversed;
}

const myString = "i am a student";
const reversed = reversString(myString);
console.log("reverse string", reversed);
 */
function reverseWords(str) {
  const result = [];
  const words = str.split(" ");
  //   console.log(words);[ 'i', 'am', 'a', 'good', 'boy' ]
  for (let i = words.length - 1; i >= 0; i--) {
    const element = words[i];
    result.push(element);
  }
  const reversed = result.join(" ");
  return reversed;
}
const myString = "i am a good boy";
const reversed = reverseWords(myString);
console.log(reversed);
