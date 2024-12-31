/* DESCRIPTION: */
/* ==========================================================================
ROT13 is a simple letter substitution cipher that replaces a letter with the 
letter 13 letters after it in the alphabet. ROT13 is an example of the 
Caesar cipher.

Create a function that takes a string and returns the string ciphered with 
Rot13. If there are numbers or special characters included in the string, 
they should be returned as they are. Only letters from the latin/english 
alphabet should be shifted, like in the original Rot13 "implementation".
========================================================================== */
/* My solution 
================================================ */
function rot13(message) {
  return message
    .split('')
    .map((e) => {
      if (!e.match(/[a-zA-Z]/)) return e;

      const codeValue = e.charCodeAt(0);
      if (codeValue > 90) {
        let changedValue = codeValue + 13;
        if (changedValue > 122) changedValue -= 26;
        return String.fromCodePoint(changedValue);
      } else {
        let changedValue = codeValue + 13;
        if (changedValue > 90) changedValue -= 26;
        return String.fromCodePoint(changedValue);
      }
    })
    .join('');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function rot13(message) {
  var a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
}
