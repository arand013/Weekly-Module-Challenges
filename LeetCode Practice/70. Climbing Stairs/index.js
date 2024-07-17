function climbStairs(n) {
    if (n === 1) {
      return 1;
    }
    let oneStep = 1;
    let noStep = 1;
    let totalSteps = 0;
    for (let i = 2; i <= n; i++) {
      totalSteps = oneStep + noStep;
      noStep = oneStep;
      oneStep = totalSteps;
    }
    return totalSteps;
  }



  function climbStairs(n) { 
    // Base case: if there's only 1 stair, there's only 1 way to climb it
    if (n === 1) { 
      return 1;
    } 
    // Initialize variables to store the number of ways to climb the stairs
    let oneStep = 1; 
    // Number of ways to climb the stairs with 1 step
    let noStep = 1; 
    // Number of ways to climb the stairs with no steps (initially 1, since we can always not take a step)
    let totalSteps = 0; 
    // Iterate from 2 to n (since we've already handled the base case of 1 stair)
    for (let i = 2; i <= n; i++) { 
      // Calculate the total number of ways to climb i stairs by adding the number of ways to climb with 1 step and no steps
      totalSteps = oneStep + noStep; 
      // Update the number of ways to climb with no steps to be the previous number of ways to climb with 1 step
      noStep = oneStep; 
      // Update the number of ways to climb with 1 step to be the total number of ways to climb
      oneStep = totalSteps;
    } 
    // Return the total number of ways to climb n stairs
    return totalSteps; 
  }