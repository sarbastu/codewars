/* DESCRIPTION: */
/* ==========================================================================
In this Kata, you will be given a string that may have mixed uppercase and 
lowercase letters and your task is to convert that string to either 
lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, 
convert the string to lowercase.

For example:
solve("coDe") = "code". Lowercase characters > uppercase. 
solve("CODe") = "CODE". Uppercase characters > lowecase. 
solve("coDE") = "code". Upper == lowercase.
========================================================================== */
/* My solution 
================================================ */
function solve(s) {
  return (s.match(/[A-Z]/g)?.length || 0) > s.length / 2
    ? s.toUpperCase()
    : s.toLowerCase();
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function solve(s) {
  let lowerC = 0;
  let upperC = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      upperC++;
    } else {
      lowerC++;
    }
  }
  return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase();
}
