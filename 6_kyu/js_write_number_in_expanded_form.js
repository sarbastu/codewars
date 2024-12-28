/* DESCRIPTION: */
/* ==========================================================================
You will be given a number and you will need to return it as a string in 
Expanded Form. 

For example:
   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"

NOTE: All numbers will be whole numbers greater than 0.
========================================================================== */
/* My solution 
================================================ */
function expandedForm(num) {
  return String(num)
    .split('')
    .map((e, i, a) => e.padEnd(a.length - i, '0'))
    .filter((e) => Number(e) > 0)
    .join(' + ');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
const expandedForm = (n) =>
  n
    .toString()
    .split('')
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(' + ');
