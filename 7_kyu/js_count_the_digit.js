/* DESCRIPTION: */
/* ==========================================================================
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
========================================================================== */
/* My solution 
================================================ */
function nbDig(n, d) {
  let count = 0

  for (let i = 0; i <= n; i++) {
    String(i ** 2)
      .split('')
      .forEach((e) => e == d && count++)
  }

  return count
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function nbDig(n, d) {
  var o = ''
  for (var i = 0; i <= n; i++) {
    o += Math.pow(i, 2)
  }
  return o.split(d).length - 1
}
