/* DESCRIPTION: */
/* ==========================================================================
A pangram is a sentence that contains every single letter of the alphabet at 
least once. For example, the sentence "The quick brown fox jumps over the 
lazy dog" is a pangram, because it uses the letters A-Z at least once.

Given a string, detect whether or not it is a pangram. Return True if it is, 
False if not. Ignore numbers and punctuation.
========================================================================== */
/* My solution 
================================================ */
function isPangram(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  string
    .toLowerCase()
    .split('')
    .forEach((e) => {
      alphabet = alphabet.replace(e, '')
    })
  return !alphabet.length
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function isPangram(string) {
  string = string.toLowerCase()
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(function (x) {
    return string.indexOf(x) !== -1
  })
}
