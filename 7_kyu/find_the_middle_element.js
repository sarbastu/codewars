/* DESCRIPTION: */
/* ==========================================================================
As a part of this Kata, you need to create a function that when provided 
with a triplet, returns the index of the numerical element that lies between 
the other two elements.

The input to the function will be an array of three distinct numbers 
(Haskell: a tuple).

For example:
gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
========================================================================== */
/* My solution 
================================================ */
function gimme(triplet) {
  let s = triplet.slice().sort((a, b) => a - b);
  let m = s[~~(s.length - 1) / 2];
  return triplet.indexOf(m);
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function gimme(a) {
  return a.indexOf(
    a.concat().sort(function (a, b) {
      return a - b;
    })[1]
  );
}
