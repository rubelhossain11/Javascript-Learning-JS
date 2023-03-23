console.log(6);
// option 1 derectly set on html element
/* <button onclick="console.log('65')">Another button</button> */

// option 2 add on click function on the html element
// important we will use this
/* <button onclick="makeRed()">Make Red</button> */
function makeRed() {
  document.body.style.backgroundColor = "red";
}
// option 3
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
 // option 3
 const purpleButton = document.getElementById("make-purple");
 purpleButton.onclick = function makePurple() {
   document.body.style.backgroundColor = "purple";
 };
 // option 4
 const pinkButton = document.getElementById("make-pink");
 pinkButton.addEventListener("click", makePink);
 function makePink() {
   document.body.style.backgroundColor = "pink";
 }
 // option 4 another
 const greenButton = document.getElementById("make-green");
 greenButton.addEventListener("click", function makeGreen() {
   document.body.style.backgroundColor = "green";
 });
 // option 4 final
      // important we will use this sometimes
      document
        .getElementById("make-goldenrod")
        .addEventListener("click", function () {
          document.body.style.backgroundColor = "goldenrod";
        });