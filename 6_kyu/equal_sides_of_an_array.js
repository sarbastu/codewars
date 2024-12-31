/* DESCRIPTION: */
/* ==========================================================================
You are going to be given an array of integers. Your job is to take that 
array and find an index N where the sum of the integers to the left of N is 
equal to the sum of the integers to the right of N.

If there is no index that would make this happen, return -1.

For example:
Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the 
array, the sum of left side of the index ({1,2,3}) and the sum of the right 
side of the index ({3,2,1}) both equal 6.
========================================================================== */
/* My solution 
================================================ */
function findEvenIndex(arr) {
  let rSum = arr.reduce((c, e) => (c += e), 0);
  let lSum = 0;
  for (let i = 0; i < arr.length; i++) {
    lSum += arr[i - 1] || 0;
    rSum -= arr[i];
    if (lSum == rSum) return i;
  }
  return -1;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0);
const findEvenIndex = (a) =>
  a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));
