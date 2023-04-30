/* DESCRIPTION: */
/* ==========================================================================
Given an integral number, determine if it's a square number:
========================================================================== */
/* My solution 
================================================ */
var isSquare = function (n) {
  for (let i = 0; i <= n; i++) {
    if (i * i === n) return true
  }
  return false
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0
}

const isSquare = (n) => Number.isInteger(Math.sqrt(n))
