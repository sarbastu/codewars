/* DESCRIPTION: */
/* ==========================================================================
Write a method that takes an array of consecutive (increasing) letters as 
input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter 
be missing. The length of the array will always be at least 2.

The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
========================================================================== */
/* My solution 
================================================ */
function findMissingLetter(array) {
  let c = array[0].charCodeAt(0);
  let s = array.join('');

  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) !== c) return String.fromCharCode(c);
    c++;
  }
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
    ''
  );
  const start = alphabet.indexOf(array[0]);
  return alphabet
    .slice(start, start + array.length)
    .find((el) => !array.includes(el));
};
