/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    // Create variable to hold bit limitation (2 ^ exp. 31 -1  & negative version)
    let bit = Math.pow(2,31)

    // Variable to step by step convert to string, split() 
    // by letter, reverste each letter & combine all letters
    let result = x.toString()
    let reverse = result.split('').reverse().join('')
    let convert = parseInt(reverse)

    // if statement to check if x is (-) integer
    if( result < 0 ){
        let negative = -1
        convert = convert * negative
    }


    // If statement to check if follow 32 bit limitations 
    if(convert < -(bit) || convert > bit) {
        return 0
    } else return convert 

};