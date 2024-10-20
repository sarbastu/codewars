/* DESCRIPTION: */
/* ==========================================================================
Given an array (arr) as an argument complete the function countSmileys that 
should return the total number of smiling faces.

 - Each smiley face must contain a valid pair of eyes as : or ;
 - A smiley face can have a nose but it does not have to. Nose are - or ~
 - Every smiling face must have a smiling mouth with either ) or D

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
========================================================================== */
/* My solution 
================================================ */
function countSmileys(arr) {
  let smileyRegex = /^[:;][-~]?[\)D]$/
  return arr.reduce((c, e) => (c += smileyRegex.test(e) ? 1 : 0), 0)
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function countSmileys(arr) {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length
}
