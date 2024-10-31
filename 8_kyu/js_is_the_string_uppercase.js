/* DESCRIPTION: */
/* ==========================================================================
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
========================================================================== */
/* My solution 
================================================ */
String.prototype.isUpperCase = function () {
  let regex = /^[A-Z\s.,:;!?'"()\-#]*$/
  return regex.test(this)
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
String.prototype.isUpperCase = function () {
  return this == this.toUpperCase()
}
