function plusOne(digits) {
    let num = '';
    for (let i = 0; i < digits.length; i++) {
      num += digits[i].toString();
    }
    let result = parseInt(num) + 1;
    console.log(result);
    let resultString = result.toString();
    let numArray = [];
    for (let i = 0; i < resultString.length; i++) {
      numArray.push(parseInt(resultString[i]));
    }
    return numArray;
  }


function plusOne(digits) { 
  // Initialize an empty string to store the concatenated digits
  let num = ''; 
  // Loop through each digit in the input array and concatenate them into a single string
  for (let i = 0; i < digits.length; i++) { 
    num += digits[i].toString(); 
  }
  // Convert the concatenated string to an integer and add 1 to it
  let result = parseInt(num) + 1; 
  // Log the result to the console
  console.log(result); 
  // Convert the result back to a string
  let resultString = result.toString(); 
  // Initialize an empty array to store the individual digits of the result
  let numArray = []; 
  // Loop through each character in the result string and convert it back to an integer, then add it to the array
  for (let i = 0; i < resultString.length; i++) { 
    numArray.push(parseInt(resultString[i])); 
  }
  // Return the array of individual digits
  return numArray; 
}