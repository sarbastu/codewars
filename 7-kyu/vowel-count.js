/* DESCRIPTION: */
/* ==========================================================================
Return the number (count) of vowels in the given string.
========================================================================== */
/* My solution 
================================================ */
function getCount(str) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  }

  return str.split('').reduce((a, v) => (isVowel[v] ? (a += 1) : a), 0)
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length
}

function getCount(str) {
  return str.split('').filter((c) => 'aeiouAEIOU'.includes(c)).length
}
