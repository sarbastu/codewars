/* DESCRIPTION: */
/* ==========================================================================
Given an array of ones and zeroes, convert the equivalent binary value to an 
integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
========================================================================== */
/* My solution 
================================================ */
function binaryArrayToNumber(arr) {
  return arr.length === 0
    ? 0
    : arr[0] * Math.pow(2, arr.length - 1) + binaryArrayToNumber(arr.slice(1))
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function binaryArrayToNumber(arr) {
  return parseInt(arr.join(''), 2)
}
