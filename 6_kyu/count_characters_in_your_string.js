/* DESCRIPTION: */
/* ==========================================================================
The main idea is to count all the occurring characters in a string. If you 
have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be an empty object 
literal, {}.
========================================================================== */
/* My solution 
================================================ */
function count(string) {
  let res = {};
  string.split('').forEach((e) => (res[e] = (res[e] || 0) + 1));
  return res;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function count(string) {
  return string.split('').reduce(function (counts, char) {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
}
