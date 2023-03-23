// step-1 hadler added
document.getElementById("btn-deposit").addEventListener("click", function () {
  // console.log("btn clicked");

  // step-2 input field added
  const inputFieldElement = document.getElementById("deposit-field");
  // console.log(inputFieldElement);
  const inputFieldAmmountString = inputFieldElement.value;
  // console.log(inputFieldAmmountString);
  const newTotalDeposit = parseFloat(inputFieldAmmountString);
  inputFieldElement.value = "";
  inputFieldElement.value = "";
  // console.log(newTotalDeposit);

  // step-3 added deposit
  // const depositTotalElement = document.getElementById("deposit-total");
  // console.log(depositTotalElement.innerText);
  
  // console.log(depositTotalElementString);
  
  // step 4 totalDeposit
  // const totalDeposit = previousDepositTotal + newTotalDeposit;
  // depositTotalElement.innerText = newTotalDeposit;
});
