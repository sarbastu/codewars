/* DESCRIPTION: */
/* ==========================================================================
Given an n x n array, return the array elements arranged from outermost 
elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

For better understanding, follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
========================================================================== */
/* My solution 
================================================ */
snail = function (array) {
  const res = [];

  while (array.length) {
    res.push(...array.shift());

    for (const row of array) {
      if (row.length) res.push(row.pop());
    }

    if (array.length) res.push(...array.pop().reverse());

    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i].length) res.push(array[i].shift());
    }
  }

  return res;
};

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function snail(array) {
  var vector = [];
  while (array.length) {
    vector.push(...array.shift());
    array.map((row) => vector.push(row.pop()));
    array.reverse().map((row) => row.reverse());
  }
  return vector;
}

snail = function (array) {
  var size = array.length;

  if (size == 0) return [];

  if (size == 1) return array[0];

  var top = array[0].slice(0, -1);
  var right = array.slice(0, -1).map((a) => a[size - 1]);
  var bottom = array[size - 1].slice(1).reverse();
  var left = array
    .slice(1)
    .map((a) => a[0])
    .reverse();
  var inner = array.slice(1, -1).map((a) => a.slice(1, -1));

  return [].concat(top, right, bottom, left, snail(inner));
};
