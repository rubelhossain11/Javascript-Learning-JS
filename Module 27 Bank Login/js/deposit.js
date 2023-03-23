// step 1 addEvenListener handler add
document.getElementById("btn-deposit").addEventListener("click", function () {
  //   console.log("btn-deposit clicked");
  //  step 2 add deposit input field
  const inputDepositTotal = document.getElementById("input-deposit-filed");
  // console.log(inputDepositTotal);
  const newDepositAmmountString = inputDepositTotal.value;
  //   console.log(inputDepositValue);
  // step 3 get the deposit total
  const depositTotalElement = document.getElementById("deposit-total");

  const newDepositAmmount = parseFloat(newDepositAmmountString);
  //   console.log(typeof newDepositAmmount);
  const previousdepositTotalString = depositTotalElement.innerText;
  const previousdepositTotal = parseFloat(previousdepositTotalString);
  //   console.log(typeof previousdepositTotal);
  //   step 4 total deposit set
  const currentTotalDiposit = newDepositAmmount + previousdepositTotal;
  depositTotalElement.innerText = currentTotalDiposit;
  //   deposit field value remove
  //   we clear that input field
  //   step 5 get current balance total
  const balanceTotalElememt = document.getElementById("balance-total");
  const priviousBalanceTotalString = balanceTotalElememt.innerText;
  const priviousBalanceTotal = parseFloat(priviousBalanceTotalString);

  //   step 6 calculate current total balance
  const currentBalanceTotal = priviousBalanceTotal + newDepositAmmount;
  //  set the balance total
  balanceTotalElememt.innerText = currentBalanceTotal;

  //   we clear that input field
  inputDepositTotal.value = "";
});
