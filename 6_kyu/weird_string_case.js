/* DESCRIPTION: */
/* ==========================================================================
Write a function that accepts a string, and returns the same string with 
all even indexed characters in each word upper cased, and all odd indexed 
characters in each word lower cased. The indexing just explained is zero 
based, so the zero-ith index is even, therefore that character should be 
upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and 
spaces(' '). Spaces will only be present if there are multiple words. 
Words will be separated by a single space(' ').

Examples:
"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"
========================================================================== */
/* My solution 
================================================ */
function toWeirdCase(string) {
  return string
    .split(' ')
    .map((word) =>
      word.replace(/\w/g, (c, i) => (i % 2 ? c.toLowerCase() : c.toUpperCase()))
    )
    .join(' ');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
const toWeirdCase = (string) =>
  string
    .toUpperCase()
    .replace(/\w{2}/g, (val) => val[0] + val[1].toLowerCase());

function toWeirdCase(string) {
  return string
    .split(' ')
    .map(function (word) {
      return word
        .split('')
        .map(function (letter, index) {
          return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join('');
    })
    .join(' ');
}
