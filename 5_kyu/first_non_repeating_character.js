/* DESCRIPTION: */
/* ==========================================================================
Write a function named first_non_repeating_letter† that takes a string 
input, and returns the first character that is not repeated anywhere in 
the string.

For example, if given the input 'stress', the function should return 't', 
since the letter t only occurs once in the string, and occurs first in 
the string.

As an added challenge, upper- and lowercase letters are considered the same 
character, but the function should return the correct case for the initial 
letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty 
string ("");

† Note: the function is called firstNonRepeatingLetter for historical 
reasons, but your function should handle any Unicode character.
========================================================================== */
/* My solution 
================================================ */
function firstNonRepeatingLetter(s) {
  const lowerS = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    const char = lowerS[i];
    if (lowerS.indexOf(char) === lowerS.lastIndexOf(char)) return s[i];
  }
  return '';
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
const firstNonRepeatingLetter = (s) =>
  s[
    [...s.toLowerCase()].findIndex(
      (c, _, s) => s.indexOf(c) === s.lastIndexOf(c)
    )
  ] || '';
