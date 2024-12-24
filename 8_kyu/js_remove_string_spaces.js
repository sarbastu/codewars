/* DESCRIPTION: */
/* ==========================================================================
Write a function that removes the spaces from the string, then return the 
resultant string.

Examples (Input -> Output):
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8aaaaa dddd r     " -> "8aaaaaddddr"
========================================================================== */
/* My solution 
================================================ */
function noSpace(x) {
  return x?.match(/[^\s]/g).join('');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function noSpace(x) {
  return x.replace(/\s/g, '');
}
