/* DESCRIPTION: */
/* ==========================================================================
Write a function which calculates the average of the numbers in an array.

Note: Empty arrays should return 0.
========================================================================== */
/* My solution 
================================================ */
function findAverage(array) {
  return array.reduce((a, e) => (a += e), 0) / (array.length || 1);
}

function findAverage(array) {
  return array.reduce((a, e) => (a += e / array.length), 0);
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
var find_average = (array) => {
  return array.length === 0
    ? 0
    : array.reduce((acc, ind) => acc + ind, 0) / array.length;
};
