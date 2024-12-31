/* DESCRIPTION: */
/* ==========================================================================
You are given an odd-length array of integers, in which all of them are the 
same, except for one single number.

Complete the method which accepts such an array, and returns that single 
different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
========================================================================== */
/* My solution 
================================================ */
function stray(numbers) {
  if (numbers.indexOf(numbers[0], 1) === -1) return numbers[0];
  return numbers.find((e) => e !== numbers[0]);
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function stray(numbers) {
  return numbers.reduce((x, y) => x ^ y);
}

function stray(numbers) {
  return numbers.find((e) => numbers.indexOf(e) === numbers.lastIndexOf(e));
}
