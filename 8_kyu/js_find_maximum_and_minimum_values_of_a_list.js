// DESCRIPTION:
/* ==========================================================================
Your task is to make two functions ( max and min) that receive a list of 
integers as input, and return the largest and lowest number in that list, 
respectively.
========================================================================== */
/* My solution 
================================================ */
var min = function (list) {
  return Math.min(...list)
}

var max = function (list) {
  return Math.max(...list)
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
var min = function (list) {
  list.sort((a, b) => a - b)
  return list[0]
}

var max = function (list) {
  list.sort((a, b) => b - a)
  return list[0]
}
