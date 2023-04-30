/* DESCRIPTION: */
/* ==========================================================================
Write a function, persistence, that takes in a positive parameter num and 
returns its multiplicative persistence, which is the number of times you must 
multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
========================================================================== */
/* My solution 
================================================ */
function persistence(num) {
  let accumulator = 0
  num = num.toString().split('').map(Number)

  while (num.length > 1) {
    num = num.reduce((a, v) => a * v)
    num = num.toString().split('').map(Number)
    accumulator++
  }
  return accumulator
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
const persistence = (num) => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
    : 0
}

function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split('')
      .reduce((t, c) => c * t)
  }
  return i
}
