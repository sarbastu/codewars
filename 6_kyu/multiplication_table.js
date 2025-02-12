/* DESCRIPTION: */
/* ==========================================================================
Your task, is to create N×N multiplication table, of size provided.

For example, when given size is 3:
1 2 3
2 4 6
3 6 9

For the given example, the return value should be:
[[1,2,3],[2,4,6],[3,6,9]]
========================================================================== */
/* My solution 
================================================ */
function multiplicationTable(size) {
  const res = [];
  for (let i = 1; i <= size; i++) {
    const index = i - 1;
    res[index] = [];
    for (let j = 1; j <= size; j++) {
      res[index].push(i * j);
    }
  }
  return res;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
multiplicationTable = function (size) {
  var result = [];
  for (var i = 0; i < size; i++) {
    result[i] = [];
    for (var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }
  return result;
};

multiplicationTable = function (size) {
  return Array.apply(null, new Array(size)).map(function (val, i) {
    return Array.apply(null, new Array(size)).map(function (val, j) {
      return (i + 1) * (j + 1);
    });
  });
};
