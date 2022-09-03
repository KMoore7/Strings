// .split() — Converts string into an array of strings
// The split() method takes a separator which you want to split apart the string on, and it returns an array of strings. This is useful when you know your string uses a certain character to separate data, or if you want to operate on specific substrings individually.

const str = 'The quick brown fox jumped over the lazy dog.';
const words = str.split( ' ');
const wordCount = words.length;

console.log(words); 
console.log(wordCount);

const strColumns = 'username:firstName:lastName:email';
const columnIds = strColumns.split(':');
