// create a new section
// 1.where to add
const mainContainer = document.getElementById("main-container");

// what to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "my food list";
section.appendChild = h1;

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "birani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "chiken";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "kichuri";
ul.appendChild(li3);

const li4 = document.createElement("li");
li4.innerText = "salad";
ul.appendChild(li4);
section.appendChild(ul);


mainContainer.appendChild(section);

// 