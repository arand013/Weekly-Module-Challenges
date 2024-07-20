var lengthOfLastWord = function(s) {
    s = s.trim();
        
        let length = 0;
        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] !== ' ') {
                length++;
            }
            else if (length > 0) {
                break;
            }
        }
        
        return length;
    };

// This function takes a string s as input and returns the length of the last word in the string
var lengthOfLastWord = function(s) { 
    // Remove leading and trailing whitespace from the input string
    s = s.trim();         
    // Initialize a variable to store the length of the last word
    let length = 0;     
    // Iterate over the characters in the string from right to left
    for (let i = s.length - 1; i >= 0; i--) { 
        // If the current character is not a space, increment the length counter
        if (s[i] !== ' ') { 
            length++; 
        }
        // If we encounter a space and the length counter is greater than 0, break out of the loop
        else if (length > 0) { 
            break; 
        }
    }     
    // Return the length of the last word
    return length; 
};