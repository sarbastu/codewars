/* DESCRIPTION: */
/* ==========================================================================
Write a program that will calculate the number of trailing zeros in a 
factorial of a given number.

N! = 1 * 2 * 3 *  ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
N	  Product	                       N factorial	   Trailing zeros
6	  1*2*3*4*5*6	                   720	           1
12	1*2*3*4*5*6*7*8*9*10*11*12	   479001600	     2

Hint: You're not meant to calculate the factorial. Find another way to 
find the number of zeros.
========================================================================== */
/* My solution 
================================================ */
// -- Numbers get too large to work --
// function zeros(n) {
//   let res = 0;
//   let product = 1;
//   for (let i = 1; i <= n; i++) {
//     product *= i;
//   }
//   res = product.toString().match(/0+$/)?.[0].length || 0;
//   return res;
// }

// -- Too slow --
// function trailingZeros(n) {
//   const multiply = (arr, x) => {
//     let carry = 0;
//     for (let i = 0; i < arr.length; i++) {
//       let product = arr[i] * x + carry;
//       arr[i] = product % 10;
//       carry = Math.floor(product / 10);
//     }
//     while (carry > 0) {
//       arr.push(carry % 10);
//       carry = Math.floor(carry / 10);
//     }
//   }

//   let factorial = [1];

//   for (let i = 2; i <= n; i++) {
//     multiply(factorial, i);
//   }

//   let count = 0;
//   for (let i = 0; i < factorial.length; i++) {
//     if (factorial[i] === 0) {
//       count++;
//     } else {
//       break;
//     }
//   }

//   return count;
// }

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function zeros(n) {
  let count = 0;
  let divisor = 5;
  while (divisor <= n) {
    count += Math.floor(n / divisor);
    divisor *= 5;
  }
  return count;
}
