/* DESCRIPTION: */
/* ==========================================================================
Take an array and remove every second element from the array. Always keep 
the first element and start removing with the next element.
========================================================================== */
/* My solution 
================================================ */
function removeEveryOther(arr) {
  return arr.filter((e, i) => i % 2 === 0)
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function removeEveryOther(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0
  })
}
