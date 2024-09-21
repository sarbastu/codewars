/* DESCRIPTION: */
/* ==========================================================================
Simple, given a string of words, return the length of the shortest word(s).
========================================================================== */
/* My solution 
================================================ */
function findShort(s) {
  return s.split(' ').sort((a, b) => a.length - b.length)[0].length
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function findShort(s) {
  return Math.min(...s.split(' ').map((s) => s.length))
}
