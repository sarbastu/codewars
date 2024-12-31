/* DESCRIPTION: */
/* ==========================================================================
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: 
a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the 
original string.

All letters will be lowercase and all inputs will be valid.
========================================================================== */
/* My solution 
================================================ */
function high(x) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let longestWord = '';
  let longestLength = 0;
  let words = x.split(' ');

  for (let i = 0; i < words.length; i++) {
    let wordLength = words[i].split('').reduce((a, v) => {
      return (a += alphabet.indexOf(v) + 1);
    }, 0);

    if (wordLength > longestLength) {
      longestLength = wordLength;
      longestWord = words[i];
    }
  }

  return longestWord;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function high(s) {
  let as = s
    .split(' ')
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
