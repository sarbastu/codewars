/* DESCRIPTION: */
/* ==========================================================================
Take 2 strings s1 and s2 including only letters from a to z. Return a new 
sorted string (alphabetical ascending), the longest possible, containing 
distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
========================================================================== */
/* My solution 
================================================ */
function longest(s1, s2) {
  let uniqueChars = {};

  (s1 + s2).split('').forEach((e, i) => {
    uniqueChars[e] = 1;
  });

  return Object.keys(uniqueChars).sort().join('');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join('');
}
