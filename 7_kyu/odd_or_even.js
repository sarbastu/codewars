/* DESCRIPTION: */
/* ==========================================================================
Given a list of integers, determine whether the sum of its elements is odd or 
even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
========================================================================== */
/* My solution 
================================================ */
function oddOrEven(array) {
  return array.reduce((a, e) => (a += e), 0) % 2 === 0 ? 'even' : 'odd';
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
const oddOrEven = (arr) =>
  ['even', 'odd'][Math.abs(arr.reduce((a, b) => a + b, 0)) % 2];
