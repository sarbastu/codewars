/* DESCRIPTION: */
/* ==========================================================================
In this example you have to validate if a user input string is alphanumeric. 
The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:
- At least one character ("" is not valid)
- Allowed characters are uppercase / lowercase latin letters and 
  digits from 0 to 9
- No whitespaces / underscore
========================================================================== */
/* My solution 
================================================ */
function alphanumeric(string) {
  let regex = /^[a-zA-Z0-9]{1,}$/;
  return regex.test(string);
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
let alphanumeric = (s) => /^[a-z\d]+$/i.test(s);

const alphanumeric = (str) => {
  if (!str.length) return false;
  const ALLOWED_CHARS =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (let char of str) {
    if (!ALLOWED_CHARS.includes(char)) return false;
  }
  return true;
};
