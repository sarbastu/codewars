/* DESCRIPTION: */
/* ==========================================================================
Implement the function unique_in_order which takes as argument a sequence 
and returns a list of items without any elements with the same value next to 
each other and preserving the original order of elements.

Example
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
========================================================================== */
/* My solution 
================================================ */
var uniqueInOrder = function (iterable) {
  let iterableArr = []
  let newArr = []

  for (let i = 0; i < iterable.length; i++) {
    iterable[i - 1] !== iterable[i] && newArr.push(iterable[i])
  }

  return newArr
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1])
}
