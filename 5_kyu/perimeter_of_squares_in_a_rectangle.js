/* DESCRIPTION: */
/* ==========================================================================
The drawing shows 6 squares the sides of which have a length of 
1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of 
these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

Could you give the sum of the perimeters of all the squares in a 
rectangle when there are n + 1 squares disposed in the same manner 
as in the drawing:

Hint:
See Fibonacci sequence

The function perimeter has for parameter n where n + 1 is the number of 
squares (they are numbered from 0 to n) and returns the total perimeter 
of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216
========================================================================== */
/* My solution 
================================================ */
function perimeter(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n + 3; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return 4 * (b - 1);
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function perimeter(n) {
  function fib(n) {
    var a = 1,
      b = 1,
      tmp;
    while (n-- > 0) {
      tmp = a;
      a = b;
      b += tmp;
    }
    return a;
  }
  return 4 * (fib(n + 2) - 1);
}

const perimeter = (n) =>
  4 * Math.round(((1 + 5 ** 0.5) / 2) ** (n + 3) / 5 ** 0.5 - 1);
