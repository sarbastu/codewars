/* DESCRIPTION: */
/* ==========================================================================
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
========================================================================== */
/* My solution 
================================================ */
function factorial(n) {
  return new Array(n)
    .fill('_')
    .map((e, i) => i + 1)
    .reduce((a, e) => (a *= e), 1);
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function factorial(n) {
  let answer = 1;
  while (n > 0) {
    answer *= n;
    n--;
  }
  return answer;
}

const factorial = (n) => (n ? factorial(n - 1) * n : 1);
