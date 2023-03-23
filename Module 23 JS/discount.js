/* 
1.if tiket number is less then 100 ,per tiket price :100
2.if tiket number is more then 200 ,first 100 tikets will be 100/tickets.rest tikets will be 90 taka per price.
first 100=100tk
second 100=90tk
3.if you purchase more than 200 tickets 
    first 100--->100tk
    101-200---->90tk
    200+----->70tk 
*/
function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;
  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100Rate;
    const totalPrice = first100Price + restTicketPrice;
    return totalPrice;
  } else {
    const first100Price = 100 * first100Rate;
    const second100Price = 100 * second100Rate;
    const restTicketPrice = ticketQuantity * restTicketRate;
    const totalCost = first100Price + second100Price + restTicketPrice;
    return totalCost;
  }
}
const price = ticketPrice(220);
console.log(price);
