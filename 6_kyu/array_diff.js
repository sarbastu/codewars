/* DESCRIPTION: */
/* ==========================================================================
Your goal in this kata is to implement a difference function, which subtracts 
one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping 
their order.

arrayDiff([1,2],[1]) == [2]
arrayDiff([1,2,2,2,3],[2]) == [1,3]
========================================================================== */
/* My solution 
================================================ */
function arrayDiff(a, b) {
  for (let i = 0, x = a.length; i < x; i++) {
    for (let j = 0, y = b.length; j < y; j++) {
      if (a[i] === b[j]) {
        a.splice(i, 1);
        i--;
      }
    }
  }
  return a;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}

function array_diff(a, b) {
  return a.filter(function (x) {
    return b.indexOf(x) == -1;
  });
}
