/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {

    // Check if str1 and str2 can be divided by the same string
       if (str1 + str2 !== str2 + str1) {
           return "";
       }
   
       // Calculate the GCD of the lengths of str1 and str2
       let gcd = getGCD(str1.length, str2.length);
   
       // Return the substring of str1 from index 0 to gcd
       return str1.substring(0, gcd);
   };
   
   // Helper function to calculate the GCD of two numbers
   function getGCD(a, b) {
       if (b === 0) {
           return a;
       }
       return getGCD(b, a % b);
   };