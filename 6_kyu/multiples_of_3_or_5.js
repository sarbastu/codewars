/* DESCRIPTION: */
/* ==========================================================================
If we list all the natural numbers below 10 that are multiples of 3 or 5, we 
get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 
5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
========================================================================== */
/* My solution 
================================================ */
function solution(number) {
  let res = new Set();
  for (let i = 1; i < number; i++) {
    if (i * 3 >= number) break;
    if (i * 5 < number) res.add(i * 5);
    res.add(i * 3);
  }
  return Array.from(res).reduce((a, v) => a + v, 0);
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
