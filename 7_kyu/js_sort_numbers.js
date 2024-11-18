/* DESCRIPTION: */
/* ==========================================================================
Finish the solution so that it sorts the passed in array of numbers. If the 
function passes in an empty array or null/nil value then it should return an 
empty array.
========================================================================== */
/* My solution 
================================================ */
function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : []
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function solution(nums) {
  return (nums || []).sort(function (a, b) {
    return a - b
  })
}
