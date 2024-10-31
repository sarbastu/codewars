/* DESCRIPTION: */
/* ==========================================================================
You receive an array with your peers' test scores. 
Now calculate the average and compare your score!

Return True if you're better, else False!
========================================================================== */
/* My solution 
================================================ */
function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((a, e) => (a += e)) / classPoints.length < yourPoints
  )
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  )
}
