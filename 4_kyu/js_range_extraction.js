/* Description: */
/* ==========================================================================
A format for expressing an ordered list of integers is to use a comma 
separated list of either

  - individual integers
  - or a range of integers denoted by the starting integer separated from the 
    end integer in the range by a dash, '-'. The range includes all integers 
    in the interval including both endpoints. It is not considered a range 
    unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order 
and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14]);
// returns "-10--8,-6,-3-1,3-5,7-11,14"
========================================================================== */
/* My solution 
================================================ */
function solution(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] + 1 === list[i + 1] && list[i] + 2 === list[i + 2]) {
      let x = i
      while (list[x] + 1 === list[x + 1]) {
        ++x
      }
      list[i] = `${list[i]}-${list[x]}`
      list.splice(i + 1, x - i)
    }
  }
  return list.join(',')
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function solution(list) {
  for (var i = 0; i < list.length; i++) {
    var j = i
    while (list[j] - list[j + 1] == -1) j++
    if (j != i && j - i > 1) list.splice(i, j - i + 1, list[i] + '-' + list[j])
  }
  return list.join()
}
