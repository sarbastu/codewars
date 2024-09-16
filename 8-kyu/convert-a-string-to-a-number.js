/* DESCRIPTION: */
/* ==========================================================================
We need a function that can transform a string into a number. What ways of 
achieving this do you know?

Examples
"1234" --> 1234
========================================================================== */
/* My solution 
================================================ */
function stringToNumber(str) {
  return parseInt(str)
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
var stringToNumber = function (str) {
  return +str
}
