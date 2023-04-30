/* DESCRIPTION: */
/* ==========================================================================
Complete the function that accepts a string parameter, and reverses each 
word in the string. All spaces in the string should be retained.
========================================================================== */
/* My solution 
================================================ */
function reverseWords(str) {
  return str
    .split(' ')
    .map((e) => e.split('').reverse().join(''))
    .join(' ')
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function reverseWords(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ')
}
