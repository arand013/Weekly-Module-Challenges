// Write code to add all the numbers in `array` and return the total

var arrayAdder = function (array) {

  var result = 0;

  for (var i = 0; i < array.length; i++) {
    var currentNumber = array[i];
    result += currentNumber;
  }

  return result;
};

