/* DESCRIPTION: */
/* ==========================================================================
The maximum sum subarray problem consists in finding the maximum sum of a 
contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
========================================================================== */
/* My solution 
================================================ */
var maxSequence = function (arr) {
  let maxSum = 0
  let currSum = 0

  for (let i = 0; i < arr.length; i++) {
    for (let x = i; x < arr.length; x++) {
      ;(currSum += arr[x]) > maxSum && (maxSum = currSum)
    }
    ;(currSum = arr[i]) > maxSum && (maxSum = currSum)
  }
  return maxSum
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
var maxSequence = function (arr) {
  var min = 0,
    ans = 0,
    i,
    sum = 0
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i]
    min = Math.min(sum, min)
    ans = Math.max(ans, sum - min)
  }
  return ans
}
