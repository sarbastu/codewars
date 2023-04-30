/* DESCRIPTION: */
/* ==========================================================================
Write a function that takes a string of braces, and determines if the order 
of the braces is valid. It should return true if the string is valid, and 
false if it's invalid.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the 
correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
========================================================================== */
/* My solution 
================================================ */
function validBraces(braces) {
  while (
    braces.indexOf('{}') + braces.indexOf('()') + braces.indexOf('[]') !=
    -3
  ) {
    braces = braces.replace('{}', '').replace('()', '').replace('[]', '')
  }
  return braces.length == 0
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
