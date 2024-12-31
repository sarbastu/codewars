/* DESCRIPTION: */
/* ==========================================================================
Create a function that returns the sum of the two lowest positive numbers 
given an array of minimum 4 positive integers. No floats or non-positive 
integers will be passed.

Example 
sumTwoSmallestNumbers([19, 5, 42, 2, 77]) === 7
========================================================================== */
/* My solution 
================================================ */
function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function sumTwoSmallestNumbers(numbers) {
  var [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}
