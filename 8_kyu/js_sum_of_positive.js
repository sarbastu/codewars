/* DESCRIPTION: */
/* ==========================================================================
You get an array of numbers, return the sum of all of the positives ones.

Example 
[1,-4,7,12] => 1 + 7 + 12 = 20
========================================================================== */
/* My solution 
================================================ */
function positiveSum(arr) {
  return arr.reduce((a, e) => (a += Math.max(e, 0)), 0)
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function positiveSum(arr) {
  var total = 0
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i]
    }
  }
  return total
}
