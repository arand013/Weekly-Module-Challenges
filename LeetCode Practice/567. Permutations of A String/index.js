// https://leetcode.com/problems/permutation-in-string/

// Q: 

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {

    let s1Count = s1.length
    let array = new Array(256).fill(0);

    for(let i = 0; i < s1Count; i++){
        array[s1.charCodeAt(i)] += 1; 
    }

    let permutation = false

    for(let i = 0; i <= s2.length - s1Count; i++){
        
        let freq_window = new Array(256).fill(0);

        for(let j = 0; j < s1Count; j++){
            freq_window[s2.charCodeAt(i+j)] += 1
        }

        if( freq_window.every((val,index) => val === array[index])){

            permutation = true
            break;
        }

    }
    return permutation; 


    // Hold a count to count to test if there is any letters from s2 to s1 that match
    // If that count is the same then return true. 



    // if s2 contains any letters of s1 then return true 
    
};