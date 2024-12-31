/* DESCRIPTION: */
/* ==========================================================================
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"=>"#HelloThereThanksForTryingMyKata"
"    Hello     World   "                =>"#HelloWorld"
""                                      =>false
========================================================================== */
/* My solution 
================================================ */
function generateHashtag(str) {
  if (!str.trim() || str.replace(/\s/g, '').length >= 140) return false;
  return (
    '#' +
    str
      .match(/\w+/g)
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join('')
  );
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function generateHashtag(str) {
  var hashtag = str.split(' ').reduce(function (tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');

  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}
