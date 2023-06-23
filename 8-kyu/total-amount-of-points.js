/* DESCRIPTION: */
/* ==========================================================================
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match 
is represented by a string in the format "x:y", where x is our team's score 
and y is our opponents score.

Points are awarded for each match as follows:
if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)

We need to write a function that takes this collection and returns the 
number of points our team got in the championship by the rules given above.
========================================================================== */
/* My solution 
================================================ */
function points(games) {
  return games.reduce(
    (a, v) => (a += v[0] > v[2] ? 3 : v[0] === v[2] ? 1 : 0),
    0
  )
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function points(games) {
  let total = 0
  games.map((game) => {
    if (game[0] === game[2]) {
      total += 1
    } else if (game[0] > game[2]) {
      total += 3
    }
  })
  return total
}
