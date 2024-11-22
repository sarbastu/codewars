/* DESCRIPTION: */
/* ==========================================================================
Create a function

hasTwoCubeSums(n) 

which checks if a given number n can be written as the sum of two cubes in 
two different ways: n = a³+b³ = c³+d³. All the numbers a, b, c and d should 
be different and greater than 0.

E.g. 1729 = 9³+10³ = 1³+12³.

hasTwoCubeSums(1729); // true
hasTwoCubeSums(42);   // false
========================================================================== */
/* My solution 
================================================ */
function hasTwoCubeSums(n) {
  let res = []
  for (let i = 1; Math.pow(i, 3) < n; i++) {
    for (let j = i + 1; Math.pow(j, 3) < n; j++) {
      let sum = Math.pow(i, 3) + Math.pow(j, 3)
      if (sum > n) break
      if (sum === n) res.push(true)
    }
  }
  return res[1] || false
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function hasTwoCubeSums(n) {
  var cnt = 0
  var l = Math.cbrt(n / 2)
  for (let i = 1; i < l; i++) {
    let cbr = Math.cbrt(n - i * i * i)
    if (cbr == Math.floor(cbr)) cnt++
  }
  return cnt >= 2
}
