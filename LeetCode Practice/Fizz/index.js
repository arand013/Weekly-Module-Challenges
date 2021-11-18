var fizzBuzz = function(n) {
    let results = [];
    for(let i=1; i <= n; i++) {
      let fizz = i % 3 === 0;
      let buzz = i % 5 === 0;
      if (!fizz && !buzz) {
      	results.push(`${i}`);
        continue;
      }
      if (fizz && buzz) {
      	results.push("FizzBuzz");
        continue;
      }
      if (fizz) {
      	results.push("Fizz");
        continue;
      }
      if (buzz) {
      	results.push("Buzz");
        continue;
      }
    }
    return results;
};