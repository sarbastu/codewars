/* DESCRIPTION: */
/* ==========================================================================
You are given an array(list) strarr of strings and an integer k. Your task is 
to return the first longest string consisting of k consecutive strings taken 
in the array.
========================================================================== */
/* My solution 
================================================ */
function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k <= 0) return ''

  let longest = ''
  for (let i = 0; i < strarr.length; i++) {
    let temp = strarr.slice(i, i + k).join('')
    if (longest.length < temp.length) {
      longest = temp
    }
  }

  return longest
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
