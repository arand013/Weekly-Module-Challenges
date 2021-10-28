//Given an integer x, return true if x is palindrome integer.

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

var isPalindrome = function(x) {
    
    if(x < 0 || (x !==0 && x % 10 == 0))
        return false;
    
    let reverse = 0; 
    
    while (x > reverse) {
        
        reverse = reverse * 10 + x % 10;
    
    x = ~~(x/10);
    }
    
    return x === reverse || x === ~~(reverse/10); 
};

isPalindrome(); 

console.log(isPalindrome)