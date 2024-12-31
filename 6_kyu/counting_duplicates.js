/* DESCRIPTION: */
/* ==========================================================================
Write a function that will return the count of distinct case-insensitive 
alphabetic characters and numeric digits that occur more than once in the 
input string.

Example
"abcde" -> 0
"aabbcde" -> 2
"aA11" -> 2
========================================================================== */
/* My solution 
================================================ */
function duplicateCount(text) {
  let letterCount = {};
  let totalDupes = 0;

  text
    .toLowerCase()
    .split('')
    .forEach((e) => {
      letterCount[e] = letterCount[e] ? letterCount[e] + 1 : 1;
      letterCount[e] === 2 && totalDupes++;
    });

  return totalDupes;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([^])\1+/g) || []
  ).length;
}
