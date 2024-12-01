/* DESCRIPTION: */
/* ==========================================================================
Make a function that returns the value multiplied by 50 and increased by 6. 
If the value entered is a string it should return "Error".
========================================================================== */
/* My solution 
================================================ */
function problem(x) {
  return typeof x !== 'number' ? 'Error' : x * 50 + 6
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
const problem = (x) => (Number.isFinite(x) ? x * 50 + 6 : `Error`)
