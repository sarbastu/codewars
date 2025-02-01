/* DESCRIPTION: */
/* ==========================================================================
Implement a pseudo-encryption algorithm which given a string S and an 
integer N concatenates all the odd-indexed characters of S with all the 
even-indexed characters of S, this process should be repeated N times.

Examples:
encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

Together with the encryption function, you should also implement a 
decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, 
return the first argument without changes.
========================================================================== */
/* My solution 
================================================ */
function encrypt(text, n) {
  if (text === null) return null;
  if (text === '') return '';

  let res = text;

  for (let i = 0; i < n; i++) {
    let odd = '';
    let even = '';
    for (let j = 0; j < res.length; j++) {
      if (j % 2 === 0) {
        even += res[j];
      } else {
        odd += res[j];
      }
    }
    res = odd + even;
  }

  return res;
}

function decrypt(encryptedText, n) {
  let res = encryptedText;

  for (let i = 0; i < n; i++) {
    let half = Math.floor(res.length / 2);
    let odd = res.slice(0, half);
    let even = res.slice(half);
    let decryptedText = '';

    for (let j = 0; j < res.length; j++) {
      if (j % 2 === 0) {
        decryptedText += even[~~(j / 2)];
      } else {
        decryptedText += odd[~~(j / 2)];
      }
    }
    res = decryptedText;
  }

  return res;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function encrypt(text, n) {
  for (let i = 0; i < n; i++) {
    text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1');
  }
  return text;
}

function decrypt(text, n) {
  let l = text && (text.length / 2) | 0;
  for (let i = 0; i < n; i++) {
    text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''));
  }
  return text;
}
