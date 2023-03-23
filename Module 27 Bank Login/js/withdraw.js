// step 1 addEvenListener handler add
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //   console.log("btn-deposit clicked");
  //  step 2 add deposit input field
  const inputWithdrawTotal = document.getElementById("input-withdraw-filed");
  // console.log(inputDepositTotal);
  const newWithdrawAmmountString = inputWithdrawTotal.value;
  //   console.log(inputDepositValue);
  // step 3 get the deposit total
  const withdrawTotalElement = document.getElementById("withdraw-total");

  const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);
  //   console.log(typeof newDepositAmmount);
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawtTotal = parseFloat(previousWithdrawTotalString);
  //   console.log(typeof previousdepositTotal);
  //   step 4 total deposit set
  const currentTotalWithdraw = newWithdrawAmmount + previousWithdrawtTotal;
  withdrawTotalElement.innerText = currentTotalWithdraw;
  //   deposit field value remove
  //   we clear that input field
  //   step 5 get current balance total
  const balanceTotalElememt = document.getElementById("balance-total");
  const priviousBalanceTotalString = balanceTotalElememt.innerText;
  const priviousBalanceTotal = parseFloat(priviousBalanceTotalString);

  //   step 6 calculate current total balance
  const currentBalanceTotal = priviousBalanceTotal - newWithdrawAmmount;
  //  set the balance total
  balanceTotalElememt.innerText = currentBalanceTotal;

  //   we clear that input field
  inputWithdrawTotal.value = "";
});
