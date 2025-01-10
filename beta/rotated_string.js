/* DESCRIPTION: */
/* ==========================================================================
Write to function that takes as argument two strings and returns positive 
(True/true/1) if one string is a rotation of the other or else it returns 
False/false/0.

For example:

// ohell is left rotation of hello
isRotation('hello','ohell') => true

// elloh is right rotation of hello 
isRotation('hello','elloh') => true

// elolh is NOT a rotation of hello 
isRotation('hello','elolh') => false
========================================================================== */
/* My solution 
================================================ */
function isRotation(s1, s2) {
  return s1.length === s2.length && (s1 + s1).includes(s2);
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
const isRotation = (s1, s2) => {
  if (s1 === s2) return true;
  for (let i = 0, l = s1.length; i < l; i++) {
    s1 = s1.slice(-1) + s1.slice(0, -1);
    if (s1 === s2) return true;
  }
  return false;
};
