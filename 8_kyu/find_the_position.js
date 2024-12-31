/* DESCRIPTION: */
/* ==========================================================================
When provided with a letter, return its position in the alphabet.

Input :: "a"
Output :: "Position of alphabet: 1"

Note: Only lowercased English letters are tested
========================================================================== */
/* My solution 
================================================ */
function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function position(letter) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}
