/* DESCRIPTION: */
/* ==========================================================================
Check to see if a string has the same amount of 'x's and 'o's. The method 
must return a boolean and be case insensitive. The string can contain any 
char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
========================================================================== */
/* My solution 
================================================ */
function XO(str) {
  return str.match(/o/gi)?.length === str.match(/x/gi)?.length;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

function XO(str) {
  return (
    str.toLowerCase().split('x').length === str.toLowerCase().split('o').length
  );
}
