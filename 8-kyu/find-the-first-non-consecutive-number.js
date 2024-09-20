/* DESCRIPTION: */
/* ==========================================================================
Your task is to find the first element of an array that is not consecutive.

If the whole array is consecutive then return null.
========================================================================== */
/* My solution 
================================================ */
function firstNonConsecutive(arr) {
  let nonConsecutiveNums = arr.filter((e, i) => i !== 0 && e !== arr[i - 1] + 1)

  return nonConsecutiveNums[0] === undefined ? null : nonConsecutiveNums[0]
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}
