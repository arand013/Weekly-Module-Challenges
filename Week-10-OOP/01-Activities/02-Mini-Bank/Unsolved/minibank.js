// =============================================================
// PART 1

function MiniBank(balance) {
  this.balance = balance;
  this.getBalance = function() {
    return this.balance;
  };
    // Add a `setBalance()` function
   this.setBalance = function(value){
    this.balance = value;
   };

    // Add a `deposit()` function
    this.deposit = function(value){

      //Error Message 
      if (typeof value !== 'number' || value <= 0) {
        throw new Error(
          "'value' must be a positive number!"
        );
      }
 

      // function begins
      let newBalance = this.getBalance() + value;
      this.setBalance(newBalance);
      console.log(`Depsited ${value}!`)
   };

    // Add a `withdraw()` function
    this. withdraw = function (value){

        //Error Message 
        if (typeof value !== 'number' || value <= 0) {
          throw new Error(
            "'value' must be a positive number!"
          );
        }

        let newBalance = this.getBalance() - value;
        
        if(newBalance < 0) {
          throw new Error('Insufficient funds for this transaction');
        }

        this.setBalance(newBalance);
        console.log(`Withdrew ${value}!`);
      value - balance;
    };

    this.printBalance = function() {
      console.log(`Balance: ${this.getBalance()}`);
    };
}

// =============================================================
// PART 2

// Create a new `bank` object
let bank = new MiniBank(1000);

// Print the `bank` balance
bank.printBalance();

// Deposit some money and then print the `bank` balance
bank.deposit(85);
bank.printBalance();

// Withdraw some money and then print the `bank` balance
bank.withdraw(20);
bank.printBalance();
