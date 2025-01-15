/* DESCRIPTION: */
/* ==========================================================================
Given a sequence of numbers, find the largest pair sum in the sequence.

Example
[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
========================================================================== */
/* My solution 
================================================ */
function largestPairSum(numbers) {
  let sortedNumbers = numbers.sort((a, b) => b - a);
  return sortedNumbers[0] + sortedNumbers[1];
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function largestPairSum(numbers) {
  var [a, b] = numbers.sort((a, b) => b - a);
  return a + b;
}
