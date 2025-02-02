/* DESCRIPTION: */
/* ==========================================================================
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the 
order they are given.
========================================================================== */
/* My solution 
================================================ */
function noOdds(values) {
  return values.filter((e) => e % 2 === 0);
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function noOdds(values) {
  function isEven(number) {
    return number % 2 == 0;
  }

  return values.filter(isEven);
}

function noOdds(values) {
  return values.filter(function (n) {
    return (n & 1) == 0;
  });
}
