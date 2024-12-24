/* DESCRIPTION: */
/* ==========================================================================
Write a function that checks if a given string (case insensitive) is a 
palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that 
reads the same backwards as forwards, such as madam or racecar.
========================================================================== */
/* My solution 
================================================ */
function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function isPalindrome(x) {
  x = x.toLowerCase();
  let a = 0;
  let b = x.length;
  while (a < b) {
    if (x[a] != x[b - 1]) return false;
    a++;
    b--;
  }
  return true;
}
