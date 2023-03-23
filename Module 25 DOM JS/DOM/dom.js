const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.border = "2px solid black";
  section.style.marginBottom = "5px";
  section.style.borderRadius = "15px";
  section.style.paddingLeft = "7px";
  section.style.backgroundClip = "lightgray";
}

// section added 2nd option
// set html element directy
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h1>Dress section</h1>
<ul>
<li>T-shirt</li>
<li>longi</li>
<li>panjabi</li>
</ul>
`;
mainContainer.appendChild(sectionDress);
