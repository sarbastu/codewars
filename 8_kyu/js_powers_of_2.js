/* DESCRIPTION: */
/* ==========================================================================
Complete the function that takes a non-negative integer n as input, and 
returns a list of all the powers of 2 with the exponent ranging from 0 to n 
( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
========================================================================== */
/* My solution 
================================================ */
function powersOfTwo(n) {
  let powersOfTwoArr = []

  for (let i = 0; i <= n; i++) {
    powersOfTwoArr[i] = Math.pow(2, i)
  }

  return powersOfTwoArr
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function powersOfTwo(n) {
  var result = []
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i))
  }
  return result
}

function powersOfTwo(n) {
  return Array.from({ length: n + 1 }, (v, k) => 2 ** k)
}
