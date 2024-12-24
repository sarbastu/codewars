/* DESCRIPTION: */
/* ==========================================================================
An isogram is a word that has no repeating letters, consecutive or 
non-consecutive. Implement a function that determines whether a string that 
contains only letters is an isogram. Assume the empty string is an isogram. 
Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
========================================================================== */
/* My solution 
================================================ */
function isIsogram(str) {
  let res = true;
  str
    .toLowerCase()
    .split('')
    .forEach((e, i, a) => {
      if (a.slice(i + 1).indexOf(e) > -1) res = false;
    });
  return res;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str) {
  return !str.match(/([a-z]).*\1/i);
}
