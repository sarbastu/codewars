/* DESCRIPTION:
Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.
*/

// My solution
function reverseWords(str) {
  return str
    .split(" ")
    .map((e) => e.split("").reverse().join(""))
    .join(" ");
}

// Most voted solution
function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
