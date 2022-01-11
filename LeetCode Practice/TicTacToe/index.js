/// JavaScript
/*

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askName() {
    rl.question('Please input your name\n', (answer) => {
        console.log(`Hello ${answer}!`);
        rl.close();
    });
}
* */
// askName();

/*
// Tic Tac Toe

// Two players 
// Board
// X = 1 player 
// 0 = 1 player

// Tallyboard

// Game

Start a New Game.
Display the Empty Board.
Begin new round()

// Below is what we loop
Announce current player is X. // Who's turn it is
Prompt user to place a piece. // 
updateBoard()
checkGameResult();

Ask next user for an input
updateBoard()
checkGameResult();
Display the board after piece is placed. 
// Did the last move win

//BeginNewRound 
//*if there's no winners or board has space


// Board
// printBoard()
// checkGameResult()
// Check rows
// Check columns 
// Check diagonals
// Check is board is full (tie)
// announceWinner()
* add Tally to game score 



// Game is over:
 when board is full (no winners)
 Or when somebody wins

/* 

*/ 
// Overall 
class game {

    constructor() {
      this.player = "X";
      this.board = new Board([
     ["_", "_", "_"],
     ["_", "_", "_"],
     ["_", "_", "_"],
     ]);
    }
    
    
    // Other functions encapsulated
    // printBoard() 
    
    switchPlayer() {
      if (this.player === "X"){
        this.player = "O";
      } else {
        this.player = "X";
      }
    }
    /**
     * [
     * ["_", "_", "_"],
     * ["_", "_", "_"],
     * ["_", "_", "_"],
     * ]
     */
    
    newRound() {
      this.board.printBoard();
      console.log("Place your spot on the board");
      
      
    
    }
    
     
      //first round is X 
    
      // askUserInput();
        //1st player can mark spot on the 
        // board
    
    
    // updateBoard()
    
    // checkGameResult()
    
    // End round repeat 
    // switchPlayer()
    // return.this.player2()
    
    // 2nd player can mark spot on board
    
    
    
    
    };
    
    class Board {
      printBoard() {
        console.log("board");
      }
    };
    
    game();
    board();