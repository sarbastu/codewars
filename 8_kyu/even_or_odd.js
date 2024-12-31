/* DESCRIPTION: */
/* ==========================================================================
Create a function that takes an integer as an argument and returns "Even" 
for even numbers or "Odd" for odd numbers.
========================================================================== */
/* My solution 
================================================ */
function evenOrOdd(number) {
  return number % 2 ? 'Odd' : 'Even';
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}
