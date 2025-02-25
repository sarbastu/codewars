/* DESCRIPTION: */
/* ==========================================================================
The drawing below gives an idea of how to cut a given "true" rectangle into 
squares ("true" rectangle meaning that the two dimensions are different).

Can you translate this drawing into an algorithm?

You will be given two dimensions

a positive integer length
a positive integer width
You will return a collection or a string (depending on the language; Shell 
bash, PowerShell, Pascal and Fortran return a string) with the size of each 
of the squares.

Examples in general form:
  sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]
========================================================================== */
/* My solution 
================================================ */
function sqInRect(lng, wdth) {
  if (lng === wdth) return null;

  let res = [];

  while (lng > 0 && wdth > 0) {
    let squareSize = Math.min(lng, wdth);
    res.push(squareSize);

    if (lng > wdth) {
      lng -= squareSize;
    } else {
      wdth -= squareSize;
    }
  }

  return res;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function sqInRect(a, b, initial = true) {
  if (a === b) {
    return initial ? null : [a];
  }
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return [min, ...sqInRect(max - min, min, false)];
}
