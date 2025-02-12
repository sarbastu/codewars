/* DESCRIPTION: */
/* ==========================================================================
Create a function named divisors/Divisors that takes an integer n > 1 and 
returns an array with all of the integer's divisors(except for 1 and the 
number itself), from smallest to largest. If the number is prime return 
the string '(integer) is prime' (null in C#, empty table in COBOL) 
(use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Examples:
divisors(12) --> [2, 3, 4, 6]
divisors(25) --> [5]
divisors(13) --> "13 is prime"
========================================================================== */
/* My solution 
================================================ */
function divisors(integer) {
  let foundDivisors = [];
  for (let i = 2; i <= integer / 2; i++) {
    if (integer % i === 0) foundDivisors.push(i);
  }
  return foundDivisors.length > 0 ? foundDivisors : `${integer} is prime`;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function divisors(int) {
  const arr = Array.from({ length: int - 1 }, (_, i) => i + 1)
    .slice(1)
    .filter((el) => int % el === 0);
  return arr.length ? arr : `${int} is prime`;
}
