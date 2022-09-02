// .includes() — Determine if string contains substring
// The includes() function determines if a substring is contained in a larger string and returns true or false. This has many applications, but one common use-case is for string matching for searching/parsing.

let author = 'George Orwell';
let userSearchTerm1 = 'George';
let userSearchTerm2 = 'Doublas';

console.log(author.includes(userSearchTerm1));  //this will return true
console.log(author.includes(userSearchTerm2)); //this will return false
