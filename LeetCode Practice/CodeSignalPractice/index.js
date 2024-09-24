function solution(numbers) {
    
    // create a empty array 
    let result = [];

    // create a loop to iterate through the triplet of the numbers array 
    for(let i = 0; i < numbers.length -2; i++ ){
        
        // simplify triplet variables 
        let a = numbers[i];
        let b = numbers[i+1];
        let c = numbers[i+2];
        
        // if statement to check conditions
        if (a < b && b > c || a > b && b < c ){
        result.push(1)
        } else {result.push(0)}
    }
    
    
    // return result
    return result; 

}