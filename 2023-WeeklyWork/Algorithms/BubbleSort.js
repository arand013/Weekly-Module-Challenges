// Bubble sort Implementation using Javascript

   // This is our unsorted array
   var arr = [234, 43, 55, 63,  5, 6, 235, 547];





   // Create a function that takes an unsorted array and sort the array

   function theBubbleSort(arr){

  // Create a loop within a for loop to iterate the array and 
  // compare two index value positions until the array reaches the end of its legnths 

    // 0 1 2 3 4
   // [5,6,7,8,9]
  for(let i = 0; i < arr.length; i++) {
                    // 5     -   0  - 1 = 4
                    // 5     -   1  - 1 = 3                        
                    // 0 < 4 (yes)(keep iterating)
                    // 0 < 3 (yes)(keep iterating)                        
                    // 0 < 2 (yes)(keep iterating)                           
                    // 0 < 1 (yes)(keep iterating)   
                    // 0 < 0 (no)(STOP iterating)   
                    // 1 < 4 (yes)(keep iterating)
                    // 1 < 3 (yes)(keep iterating)                        
                    // 1 < 2 (yes)(keep iterating)                           
                    // 1 < 1 (no)(STOP iterating)                          

    for(let j = 0; j < (arr.length - i - 1); j++ ){
        if(arr[j] > arr[i]) {

            // variable for indice item in iterarion (algorithm is comparing the number contained in the indice number) 
            let temp = arr[j];

            // if condition is
            arr[j] + arr[j + 1];
            arr[j + 1] = temp; 




        }
    }

  }




   // return the array in a console log 
   console.log(arr)

   }