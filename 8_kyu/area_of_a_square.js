/* DESCRIPTION: */
/* ==========================================================================
Complete the function that calculates the area of the red square, when the 
length of the circular arc A is given as the input. Return the result 
rounded to two decimals.

Note: use the π value provided in your language.
========================================================================== */
/* My solution 
================================================ */
function squareArea(A) {
  let res = ((2 * A) / Math.PI) ** 2;
  return Math.round(res * 100) / 100;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
squareArea = (A) => +Math.pow((2 * A) / 3.1416, 2).toFixed(2);
