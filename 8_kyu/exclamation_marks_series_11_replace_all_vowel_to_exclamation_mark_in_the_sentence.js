/* DESCRIPTION: */
/* ==========================================================================
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
"Hi!" --> "H!!"
"!Hi! Hi!" --> "!H!! H!!"
"aeiou" --> "!!!!!"
"ABCDE" --> "!BCD!"
========================================================================== */
/* My solution 
================================================ */
function replace(s) {
  return s.replace(/[aeiou]/gi, '!');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
const replace = (w) =>
  w
    .split('')
    .map((e) => ('aeiou'.includes(e.toLowerCase()) ? '!' : e))
    .join('');
