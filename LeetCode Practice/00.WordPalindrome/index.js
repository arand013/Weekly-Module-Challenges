/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and
 removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric 
 characters include letters and numbers.

*/ 

var isPalindrome = function(s) {
    // Define a function to filter out non-alphabetic characters from a string
    const filterNonAlphabet = (str) => {
        return str.replace(/[^0-9a-zA-Z]/g, '');
    };

    // Trim leading and trailing spaces from the input string
    s = s.trim();

    // Filter out non-alphabetic characters
    s = filterNonAlphabet(s);

    // Convert the string to lowercase for case-insensitive comparison
    s = s.toLowerCase();

    // Reverse the string using built-in methods
    let rev_s = s.split('').reverse().join('');

    // Check if the reversed string is equal to the original string
    return rev_s === s;
};