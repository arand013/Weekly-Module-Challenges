// TODO: Create a variable to hold the count
let count = 0;



// TODO: Create variables to select the increment button, decrement button and count heading by their respective ids.
let countSum = document.querySelector('#count')

let decrementButton = document.querySelector('#decrement');
let incrementButton = document.querySelector('#increment');

// TODO: Create a function that displays the current count on the page
function setCountText() {
    countSum.textContent = count; 
}

// TODO: Create an addEventListener that will increment the count on click
// and calls the function to display the current count
incrementButton.addEventListener('click', function(){
    count++;
    setCountText();
}); 



// TODO: Create an addEventListener that will decrement the count on click
// and calls the function to display the current count
decrementButton.addEventListener('click', function(){
    if( count > -10){ 
        count--;
        setCountText();
    }
}); 
