/* DESCRIPTION: */
/* ==========================================================================
You need to write a function that reverses the words in a given string. 
Words are always separated by a single space.

As the input may have trailing spaces, you will also need to ignore 
unneccesary whitespace.

Example (Input --> Output)
"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
========================================================================== */
/* My solution 
================================================ */
function reverse(string) {
  return string.split(' ').reverse().join(' ');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function reverse(string) {
  var s = string;
  s = s.split(' ');
  s = s.reverse();
  s = s.join(' ');
  return s;
}
