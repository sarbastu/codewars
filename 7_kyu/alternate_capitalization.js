/* DESCRIPTION: */
/* ==========================================================================
Given a string, capitalize the letters that occupy even indexes and odd 
indexes separately, and return as shown below. Index 0 will be considered 
even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases 
for more examples.

The input will be a lowercase string with no spaces.
========================================================================== */
/* My solution 
================================================ */
function capitalize(s) {
  let even = '';
  let odd = '';

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      even += s[i].toUpperCase();
      odd += s[i];
    } else {
      even += s[i];
      odd += s[i].toUpperCase();
    }
  }

  return [even, odd];
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function capitalize(s) {
  return [0, 1].map((r) =>
    [...s].map((c, i) => (i % 2 === r ? c.toUpperCase() : c)).join('')
  );
}
