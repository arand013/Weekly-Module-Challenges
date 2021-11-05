//Given an integer x, return true if iis palindrome integer.

//An integer is a palindrome when it reads the same backward as forward.
//For example, 121 is palindrome while 123 is not.

//------------------------------
//Example 1:

// Input: x = 121
// Output: true

//------------------------------


//Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left,
// it becomes 121-. Therefore it is not a palindrome.


//---------------------------------

var isPalindrome = function(i) {
    
    if(i < 0 || (i!==0 && i % 10 == 0))
        return false;
    
    let reverse = 0;
    
    while (i > reverse) {
        
        reverse = reverse * 10 + i % 10;
    
    i= ~~(i/10);
    }
    
    return i=== reverse || i=== ~~(reverse/10); 
};

isPalindrome(41); 

console.log(isPalindrome)