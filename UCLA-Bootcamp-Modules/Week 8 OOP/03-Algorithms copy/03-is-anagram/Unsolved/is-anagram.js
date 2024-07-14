// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {;
// Variables 
strA = strA.split(' ').sort().join(' ');
strB = strB.split(' ').sort().join(' ');

let result =  strA === strB;
return result 
};
