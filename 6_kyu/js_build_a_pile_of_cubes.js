/* DESCRIPTION: */
/* ==========================================================================
Your task is to construct a building which will be a pile of n cubes. 
The cube at the bottom will have a volume of (n−1)^3 and so on until the 
top which will have a volume of 1^3.

Examples:
findNb(1071225) --> 45
findNb(91716553919377) --> -1
========================================================================== */
/* My solution 
================================================ */
function findNb(m) {
  let n = 0
  let totalVolume = 0

  while (totalVolume < m) {
    n++
    totalVolume += Math.pow(n, 3)
  }

  return totalVolume === m ? n : -1
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function findNb(m) {
  var n = 0
  while (m > 0) m -= (++n) ** 3
  return m ? -1 : n
}
