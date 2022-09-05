// .trim() — Removing white space
// The trim() function removes white space from the beginning and end of a string. You will find yourself using this one most often when processing the string of a user input field. It is easy to accidentally add spaces, and this ensures you handle the relevant characters.

let str = '        the quick brown fox ran as fast as he could     '
console.log(str.trim())  //should return 'the quick brown fox ran as fast as he could' without the leading and ending spaces
