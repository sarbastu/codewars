// DESCRIPTION:
/* ==========================================================================
The goal of this exercise is to convert a string to a new string where each 
character in the new string is "(" if that character appears only once in the 
original string, or ")" if that character appears more than once in the 
original string. 

Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
========================================================================== */
/* My solution 
================================================ */
function duplicateEncode(word) {
  const charCount = {};
  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    charCount[word[i]] ? charCount[word[i]]++ : (charCount[word[i]] = 1);
  }

  return word
    .split('')
    .map((e) => (charCount[e] > 1 ? ')' : '('))
    .join('');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}
