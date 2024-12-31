/* DESCRIPTION: */
/* ==========================================================================
Write a function that takes a single non-empty string of only lowercase and 
uppercase ascii letters (word) as its argument, and returns an ordered list 
containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
========================================================================== */
/* My solution 
================================================ */
var capitals = function (word) {
  return [...word.matchAll(/[A-Z]/g)].map((e) => e.index);
};

var capitals = function (word) {
  let res = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].match(/[A-Z]/)) res.push(i);
  }
  return res;
};

var capitals = function (word, i = 0) {
  if (!word) return [];
  return [word[0].match(/[A-Z]/) && i, ...capitals(word.slice(1), ++i)].filter(
    (e) => e !== null
  );
};

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
var capitals = function (word) {
  return word.split('').reduce(function (memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};

var capitals = function (word) {
  return word
    .split('')
    .map(function (l, i) {
      if (l.toUpperCase() === l) return i;
    })
    .filter(function (i) {
      return i != null;
    });
};
