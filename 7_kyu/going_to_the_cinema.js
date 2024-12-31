/* DESCRIPTION: */
/* ==========================================================================
System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times 
           the ticket price, then for each additional ticket he pays 0.90 
           times the price paid for the previous ticket.

John wants to know how many times he must go to the cinema so that the final 
result of System B, when rounded up to the next dollar, will be cheaper than 
System A.

The function movie has 3 parameters: card (price of the card), ticket 
(normal price of a ticket), perc (fraction of what he paid for the 
previous ticket) and returns the first n such that
========================================================================== */
/* My solution 
================================================ */
function movie(card, ticket, perc) {
  let aTotal = ticket;
  let bTotal = card + ticket * perc;
  for (let i = 2; true; i++) {
    aTotal += ticket;
    bTotal += ticket * perc ** i;
    if (Math.ceil(bTotal) < aTotal) return i;
  }
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function movie(card, ticket, perc) {
  var costA = (n = 0),
    costB = card;
  while (Math.ceil(costB) >= costA) {
    costA += ticket;
    costB += ticket * Math.pow(perc, ++n);
  }
  return n;
}
