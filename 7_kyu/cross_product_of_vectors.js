/* DESCRIPTION: */
/* ==========================================================================
Make a function called crossProduct that takes two 3 dimensional vectors 
(in the form of two arrays) and returns their cross product. You need to 
check if the passed arguments are of the expected format, otherwise throw 
the message: "Arguments are not 3D vectors!".

crossProduct([1,0,0],[0,1,0]) //should return [0,0,1]
========================================================================== */
/* My solution 
================================================ */
function crossProduct(vec1, vec2) {
  if (
    !Array.isArray(vec1) ||
    !Array.isArray(vec2) ||
    !(vec1.length === 3) ||
    !(vec2.length === 3)
  )
    throw 'Arguments are not 3D vectors!';

  return [
    vec1[1] * vec2[2] - vec1[2] * vec2[1],
    vec1[2] * vec2[0] - vec1[0] * vec2[2],
    vec1[0] * vec2[1] - vec1[1] * vec2[0],
  ];
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function crossProduct(vector1, vector2) {
  if (
    !(vector1 instanceof Array) ||
    !(vector2 instanceof Array) ||
    vector1.length !== 3 ||
    vector2.length !== 3
  ) {
    throw 'Arguments are not 3D vectors!';
  }

  return [
    vector1[1] * vector2[2] - vector2[1] * vector1[2],
    vector1[2] * vector2[0] - vector2[2] * vector1[0],
    vector1[0] * vector2[1] - vector2[0] * vector1[1],
  ];
}
