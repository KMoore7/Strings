// .indexOf() — Finding the index of a substring
// Before includes() was introduced to the JavaScript spec, indexOf() was the primary way you would check if a substring existed in a string. It is likely you will still see code that uses indexOf, so understanding how it works is important. The function returns the index of the substring within the string. If the substring is not contained in the original string, it will return -1

let principal = 'Dr. Armstrong';
let searchOne = 'Armstrong';
let searchTwo = 'Doctor.';

console.log(principal.indexOf(searchOne)); //this should return 4 because the string 'Armstrong' begins at index of 4
console.log(principal.indexOf(searchTwo)); //this should return -1 because the substring Doctor is not in principal
