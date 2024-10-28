function reverseInt(nums){

    // .toString = turns and intergers into a string EX: 1 = "1"
    let stringify = nums.toString();
    
    // .split('') = turns consecutive characters into a individual strings | directed through parenthesis
    // .reverse() = reverse the order of the strings
    // .join('') = looks for the directed characteristics and combines them back together into 1 
    let split = stringify.split('')
    let reverse = split.reverse()
    let join = reverse.join('')

    // parseInt() = turns a string into a integer 
    let parseInteger = parseInt(join)

    return parseInteger;
}


console.log(reverseInt(12345));


