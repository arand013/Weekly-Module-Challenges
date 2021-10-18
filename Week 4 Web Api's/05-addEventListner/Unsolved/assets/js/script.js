// TODO: Create a variable to hold the count
var count = 0;
// TODO: Create variables to select the increment button, decrement button and count heading by their respective ids.
var countEl = document.querySelector('#count');
var decrementEl = document.querySelector('#decrement');
var incremenntEl = document.querySelector('#increment');
// TODO: Create a function that displays the current count on the page
function setCounterText() {
    countEl.textContent = count;
}
// TODO: Create an addEventListener that will increment the count on click
// and calls the function to display the current count
incremenntEl.addEventListener('click', function () {
    count++;
    setCounterText();
})

// TODO: Create an addEventListener that will decrement the count on click
// and calls the function to display the current count
decrementEl.addEventListener('click', function () {
   if (count > 0 ){
    count--
    setCounterText();
   }
})