/* DESCRIPTION: */
/* ==========================================================================
In this simple Kata your task is to create a function that turns a string 
into a Mexican Wave. You will be passed a string and you must return that 
string in an array where an uppercase letter is a person standing up. 

Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
========================================================================== */
/* My solution 
================================================ */
function wave(str) {
  let mexicanWave = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != ' ') {
      mexicanWave.push(
        `${str.slice(0, i)}${str[i].toUpperCase()}${str.slice(i + 1)}`
      );
    }
  }
  return mexicanWave;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function wave(str) {
  let result = [];

  str.split('').forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(
        str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
      );
    }
  });

  return result;
}

var wave = (w) =>
  [...w]
    .map((a, i) => w.slice(0, i) + a.toUpperCase() + w.slice(i + 1))
    .filter((a) => a != w);
