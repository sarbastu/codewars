/* DESCRIPTION: */
/* ==========================================================================
Write a function dirReduc which will take an array of strings and returns an 
array of strings with the needless directions removed (W<->E or S<->N side 
by side).
========================================================================== */
/* My solution 
================================================ */
function dirReduc(arr) {
  const opp = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  }
  const res = []
  for (const d of arr) {
    if (opp[d] === res.slice(-1)[0]) {
      res.pop()
    } else {
      res.push(d)
    }
  }
  return res
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function dirReduc(arr) {
  var str = arr.join(''),
    pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/
  while (pattern.test(str)) str = str.replace(pattern, '')
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || []
}
