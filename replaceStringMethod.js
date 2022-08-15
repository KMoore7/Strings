// .replace() — Replaces strings with new values
// The replace() function is called on a string and will return a string with a pattern replaced by a replacement string. It takes either a regex or a string as the pattern. With a regex you can globally replace all matches (using the g option), but with a string it will only replace the first occurrence. In the example below, you will notice that world is replaced only once in the first call since it uses a string pattern.

let str = 'Hello world! My name is also world. How funny.';
let stringPattern = 'world';
let regexPattern = /world/gi;
let replacement = 'gitconnected';

console.log(str.replace(stringPattern, replacement)); //should return "Hello gitconnected! My name is also world. How funny."
console.log(str.replace(regexPattern, replacement));  //should return "Hello gitconnected! My name is also gitconnected. How funny"
