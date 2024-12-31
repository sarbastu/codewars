/* DESCRIPTION: */
/* ==========================================================================
The Fibonacci numbers are the numbers in the following integer sequence 
(Fn): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such that:
F(0) = 1
F(1) = 1
F(n) = F(n − 1) + F(n − 2)

Given a number, say prod (for product), we search two Fibonacci numbers 
F(n) and F(n + 1) verifying:

F(n) ∗ F(n + 1) = prod
Your function takes an integer (prod) and returns an array/tuple (check the 
function signature/sample tests for the return type in your language):

if F(n) * F(n+1) = prod:
(F(n), F(n+1), true)

If you do not find two consecutive F(n) verifying F(n) * F(n+1) = prod:
(F(n), F(n+1), false)

where F(n) is the smallest one such as F(n) * F(n+1) > prod.

Examples:
714 ---> (21, 34, true)
========================================================================== */
/* My solution 
================================================ */
function productFib(prod) {
  let fib = [0, 1];
  let temp = 0;
  let product = 0;

  while (true) {
    product = fib[0] * fib[1];

    if (product === prod) return [...fib, true];
    if (product > prod) return [...fib, false];

    temp = fib[0] + fib[1];
    fib[0] = fib[1];
    fib[1] = temp;
  }
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function productFib(prod) {
  var n = 0;
  var nPlus = 1;
  while (n * nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n * nPlus === prod];
}
