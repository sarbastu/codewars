/* DESCRIPTION: */
/* ==========================================================================
Given a string, you have to return a string in which each 
character (case-sensitive) is repeated once.

Examples
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
========================================================================== */
/* My solution 
================================================ */
function doubleChar(str) {
  return str
    .split('')
    .map((e) => [e] + [e])
    .join('')
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function doubleChar(str) {
  return str.replace(/(.)/g, '$1$1')
}
