/* DESCRIPTION: */
/* ==========================================================================
In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
========================================================================== */
/* My solution 
================================================ */
function highAndLow(numbers) {
  return `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number)

  var min = Math.min.apply(null, numbers)
  var max = Math.max.apply(null, numbers)

  return max + ' ' + min
}
