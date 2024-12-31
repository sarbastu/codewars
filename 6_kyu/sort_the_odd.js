/* DESCRIPTION: */
/* ==========================================================================
You will be given an array of numbers. You have to sort the odd numbers in 
ascending order while leaving the even numbers at their original positions.
========================================================================== */
/* My solution 
================================================ */
function sortArray(array) {
  let sortedOddNumbers = array.filter((e) => e % 2 !== 0).sort((a, b) => a - b);
  return array.map((e) => (e % 2 === 0 ? e : sortedOddNumbers.shift()));
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}
