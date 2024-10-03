/* DESCRIPTION: */
/* ==========================================================================
Consider an array/list of sheep where some sheep may be missing from their 
place. We need a function that counts the number of sheep present in the 
array (true means present).
========================================================================== */
/* My solution 
================================================ */
function countSheeps(sheep) {
  return sheep.reduce((c, e) => (c += e === true ? 1 : 0), 0)
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length
}
