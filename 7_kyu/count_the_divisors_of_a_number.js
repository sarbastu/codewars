/* DESCRIPTION: */
/* ==========================================================================
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000, but fixed tests go higher.

Examples
4 --> 3 // we have 3 divisors - 1, 2 and 4
========================================================================== */
/* My solution 
================================================ */
function getDivisorsCnt(n) {
  let count = 0;
  let sqrtN = Math.sqrt(n);

  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      count++;
      if (i !== n / i) {
        count++;
      }
    }
  }

  return count;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function getDivisorsCnt(n) {
  var num = 0;
  if (n == 1) return 1;
  if (n % Math.sqrt(n) == 0) num++;
  for (var i = 1; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      num += 2;
    }
  }
  return num;
}
