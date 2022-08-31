// .includes() — Determine if string contains substring
// The includes() function determines if a substring is contained in a larger string and returns true or false. This has many applications, but one common use-case is for string matching for searching/parsing.
// Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character. The function should return true if the first string includes the character, otherwise it should return false. Do not use the built in String.includes() function.

function stringIncludes(awesome, e) {
    for (let i = 0; i < awesome.length; i++) {
      if (awesome[i] === e) {
        return true
      }else{
            }
    return false; 
  }
}
