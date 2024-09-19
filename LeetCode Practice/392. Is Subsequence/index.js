/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    // init varaibleo of 0 i & j
    let i = 0; let j = 0; 

  //  While loop. for length of both strings
    while(i < s.length && j < t.length){


        // if to compare if letter from both strings are equal 
        if(s[i] == t[j]){
            // if so increment i & j
            i++ 
            j++ 

            // else increment j only
        } else {j++}
    }

    // After looping check if i = to length of string S (if true return 
    // true else return false)
    if(i == s.length) {return true  }
    else return false    
};