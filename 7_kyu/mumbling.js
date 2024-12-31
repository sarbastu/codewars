/* DESCRIPTION: */
/* ==========================================================================
This time no story, no theory. The examples below show you how to write 
function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters.
========================================================================== */
/* My solution 
================================================ */
function accum(s) {
  return s
    .split('')
    .map((e, i) =>
      [e.toUpperCase(), ...Array(i).fill(e.toLowerCase())].join('')
    )
    .join('-');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function accum(s) {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}
