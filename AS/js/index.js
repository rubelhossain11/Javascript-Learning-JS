const loadUniverse = async (dataLimit) => {
  const url = "https://openapi.programming-hero.com/api/ai/tools";
  const res = await fetch(url);
  const data = await res.json();
  displayUniverse(data.data.tools, dataLimit);

  // Sort by Date Button Event
  document
    .getElementById("sort-btn")
    .addEventListener("click", function sorting() {
      data.data.tools.sort(function (a, b) {
        return new Date(a.published_in) - new Date(b.published_in);
      });
      displayUniverse(data.data.tools, dataLimit);
      // console.log(data.data.tools)
      if (dataLimit > 6) {
        const seeMore = document.getElementById("see-btn");
        seeMore.classList.add("d-none");
      }
    });
};

// Display Loaded data
const displayUniverse = (universes, dataLimit) => {
  const cardDiv = document.getElementById("card-conteiner");
  cardDiv.innerHTML = "";
  toggleSpinner(true);

  //   how many see the card
  const seeMore = document.getElementById("see-btn");

  if (dataLimit && universes.length > 6) {
    universes = universes.slice(0, 6);
    seeMore.classList.remove("d-none");
  } else {
    seeMore.classList.add("d-none");
  }

  // ForEach Loop
  universes.forEach((universe) => {
    console.log(universe);
    const div = document.createElement("div");
    div.classList.add("col");

    div.innerHTML = `
  <div class="card h-100 p-2">
           <img src="${
             universe.image
           }" class="card-img-top rounded-3" alt="...">
       <div class="card-body">
           <h3 class="card-title">Features</h3> 
           <ol class="list-group-numbered card-text">
                   <li class="list-group-item"> ${
                     universe.features[0] ? universe.features[0] : ""
                   }</li>
                   <li class="list-group-item">${universe.features[1]}</li>
                   <li class="list-group-item">${universe.features[2]}</li>
               </ol>
           
              </div>
              <div class="card-footer">
              <h4 class="card-text">${universe.name}</h4>
              <div class="d-flex justify-content-between align-items-center">
              <small class="text-muted"><i class="fa-regular fa-calendar-days"></i>  ${
                universe.published_in
              }</small>
                 <!-- Button trigger modal -->
              <button type="button" onclick="loadUnuversesDetails(${
                universe.id
              })" class="btn bg-primary bg-opacity-10 rounded-circle" data-bs-toggle="modal" data-bs-target="#universesModal"> <i class="fa-solid fa-arrow-right"></i> </button>
              </div>
              </div>
            </div>
  `;

    // Features
    // const featuresOl = document.getElementById("features-ol");
    // const features = universe.features;
    // console.log(features);
    // for(let feature of features){
    //   const featuresOl = document.getElementById("features-ol");
    //   console.log(feature);
    //   featuresOl.innerHTML = `
    //   <li> ${feature}</li>
    //   `
    // }

    cardDiv.appendChild(div);
  });
  toggleSpinner(false);
};

// Spinners
const toggleSpinner = (isLoading) => {
  const loaderSectin = document.getElementById("loader");
  if (isLoading) {
    loaderSectin.classList.remove("d-none");
  } else {
    loaderSectin.classList.add("d-none");
  }
};

//click btn see more
document.getElementById("btn-see-all").addEventListener("click", function () {
  const seeMore = document.getElementById("see-btn");
  loadUniverse();
  seeMore.classList.add("d-none");
});

// Universes Details
const loadUnuversesDetails = async (id) => {
  const url = "https://openapi.programming-hero.com/api/ai/tool/${id}";
  const res = await fetch(url);
  const data = await res.json();
  displayUniverseDetails(data.data);
};

const displayUniverseDetails = (universes) => {
  // console.log(universes);
  const universesModalLabel = document.getElementById("universesModalLabel");
  universesModalLabel.innerHTML = `
  <div class="border border-success rounded-3 p-3 bg-success-subtle bg-opacity-1">
  <h3 class="card-title my-5">${universes.description} </h3>
  <div id="priceList"  class ="d-md-flex justify-content-between align-items-center text-warning-emphasis text-center gap-3">
  
  </div>
  
  <div class="d-md-flex justify-content-between align-items-center my-5">
  <div>
  <h3 class="card-title">Features</h3>
  <ul id="feature">
  
  </ul>
  </div>
  <div>
  <h3 class="card-title">Integrations</h3>
  <ul id="intrigation">
  
  </ul>
  </div>
  </div>
  </div>
  `;
};
// Prices Section innerHtml
if (universes.pricing === null) {
  const priceList = document.getElementById("priceList");
  priceList.innerHTML = `
    <div class = "shadow p-3 bg-body-secondary">
    <h4 class="fs-5 p-1"> ${universes.pricing[0].price}</h4>
    <h4 class="fs-5 p-1"> ${universes.pricing[0].plan}</h4>
    </div>
    <div class = "shadow p-3 bg-body-secondary">
    <h4 class="fs-5 p-1"> ${universes.pricing[1].price}</h4>
    <h4 class="fs-5 p-1"> ${universes.pricing[1].plan}</h4>
    </div>
    <div class = "shadow p-1 bg-body-secondary">
    <h4 class="fs-5 p-1"> ${universes.pricing[2].price}</h4>
    <h4 class="fs-5 p-1"> ${universes.pricing[2].plan}</h4>
    </div>
    `;
} else {
  const priceList = document.getElementById("priceList");
  priceList.innerHTML = `
    <div class = "shadow">
    <h4 class="fs-5 p-1"> Free of Cost/</h4>
    <h4 class="fs-5 p-1">Basic</h4>
    </div>
    <div class = "shadow">
    <h4 class="fs-5 p-1"> Free of Cost/</h4>
    <h4 class="fs-5 p-1"> Pro</h4>
    </div>
    <div class = "shadow">
    <h4 class="fs-5 p-1"> Free of Cost/</h4>
    <h4 class="fs-5 p-1"> Enterprise</h4>
    </div>`;
}

// Feature List Dynamic
if (universes.features != null) {
  const value = Object.values(universes.features);
  // console.log(value);
  const featureList = document.getElementById("feature");
  for (let i = 0; i < value.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerText = value[i].feature_name;
    featureList.appendChild(listItem);
  }
}

// intrigation List Dynamic
if (universes.integrations != null) {
  // console.log(universes.integrations);
  const intrigationList = document.getElementById("intrigation");
  for (let i = 0; i < universes.integrations.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerText = universes.integrations[i];
    intrigationList.appendChild(listItem);
  }
} else {
  const intrigationList = document.getElementById("intrigation");
  intrigationList.innerText = "No data Found";
}

// Modal Right Side
const universesModalDetails = document.getElementById("universesModalDetails");
universesModalDetails.innerHTML = `
      <div class="bg-light-subtle">
      <img src="${
        universes.image_link[0]
      }" class="card-img-top rounded-3" alt="...">
      <button id="accuracy-btn" class="rounded-3 btn btn-danger"> ${
        universes.accuracy.score * 100
      }% accuracy</button> 
      
      <div id="input-output-examples">  </div
      </div>
      `;

// Accuracy condition
if (!universes.accuracy.score) {
  const accuracyBtn = document.getElementById("accuracy-btn");
  accuracyBtn.classList.add("d-none");
}

// Input Output Description
if (universes.input_output_examples != null) {
  const inputOutput = document.getElementById("input-output-examples");
  inputOutput.innerHTML = `
  <h3 " class="card-title my-3 text-center">${universes.input_output_examples[0].input} </h3>
  <p class="text-center">${universes.input_output_examples[0].output}</p> 
  `;
} else {
  const inputOutput = document.getElementById("input-output-examples");
  inputOutput.innerHTML = `
  <h3 " class="card-title my-3 text-center">Can you give any example?</h3>
  <p class="text-center">No! Not Yet! Take a break!!!</p> 
  `;
}

loadUniverse(6);
