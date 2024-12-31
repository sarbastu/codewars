/* DESCRIPTION: */
/* ==========================================================================
Given a random non-negative number, you have to return the digits of this 
number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
========================================================================== */
/* My solution 
================================================ */
function digitize(n) {
  return String(n).split('').reverse().map(Number);
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

function digitize(n) {
  let numArr = [];
  while (n > 0) {
    numArr.push(n % 10);
    n = Math.floor(n / 10);
  }
  return numArr;
}
