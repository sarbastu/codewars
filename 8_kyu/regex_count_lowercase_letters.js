/* DESCRIPTION: */
/* ==========================================================================
Your task is simply to count the total number of 
lowercase letters in a string.

Examples
"abc" ===> 3
"abcABC123" ===> 3
"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
"" ===> 0;
"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
"abcdefghijklmnopqrstuvwxyz" ===> 26
========================================================================== */
/* My solution 
================================================ */
function lowercaseCount(str) {
  return str.match(/[a-z]/g)?.length || 0;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function lowercaseCount(str) {
  return (str.match(/[a-z]/g) || []).length;
}

function lowercaseCount(str) {
  return str.replace(/[^a-z]/g, '').length;
}
