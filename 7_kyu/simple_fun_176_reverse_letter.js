/* DESCRIPTION: */
/* ==========================================================================
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
- [input] string str
A string consists of lowercase latin letters, digits and symbols.
- [output] a string
========================================================================== */
/* My solution 
================================================ */
function reverseLetter(str) {
  return str
    .replace(/[^a-zA-Z]/g, '')
    .split('')
    .reverse()
    .join('');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function reverseLetter(str) {
  return str
    .split('')
    .reverse()
    .filter((val) => /[a-zA-Z]/.test(val))
    .join('');
}

const reverseLetter = (str) => str.match(/[a-z]/g).reverse().join('');
