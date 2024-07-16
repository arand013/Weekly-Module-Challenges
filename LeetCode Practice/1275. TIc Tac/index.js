class Solution {
    tictactoe(moves) {
        let a = new Array(8).fill(0);
        let b = new Array(8).fill(0);

        for(let i = 0; i < moves.length; i++){
            let p = i % 2 === 0 ? a : b;

            let r = moves[i][0],
            c = moves[i][1];

            p[r]++;
            p[3+c]++;
            if(r === c) {
                p[6]++;
            }

            if( r === 2-c){
                p[7]++;
            }
        }

        for( let i = 0; i < a.length; i++){
            if(a[i] === 3){
                return "A";
            }
            if(b[i] === 3){
                return "B";
            }
        }
        return moves.length === 9 ? "Draw" : "Pending";
    }
}


class Solution { 
    tictactoe(moves) { 
        // Initialize two arrays a and b with 8 elements each, all set to 0
        let a = new Array(8).fill(0); 
        let b = new Array(8).fill(0); 
        
        // Iterate through each move in the moves array
        for(let i = 0; i < moves.length; i++){ 
            // Determine which player's turn it is (a or b) based on the move index
            let p = i % 2 === 0 ? a : b; 
            
            // Extract the row and column of the current move
            let r = moves[i][0], 
                c = moves[i][1]; 
            
            // Increment the count for the current row and column in the player's array
            p[r]++; 
            p[3+c]++; 
            
            // If the move is on the main diagonal, increment the count for the diagonal
            if(r === c) { 
                p[6]++; 
            } 
            
            // If the move is on the anti-diagonal, increment the count for the anti-diagonal
            if( r === 2-c){ 
                p[7]++; 
            } 
        } 
        
        // Check if either player has won
        for( let i = 0; i < a.length; i++){ 
            // If player A has won, return "A"
            if(a[i] === 3){ 
                return "A"; 
            } 
            // If player B has won, return "B"
            if(b[i] === 3){ 
                return "B"; 
            } 
        } 
        
        // If all moves have been made and no one has won, return "Draw"
        // Otherwise, return "Pending"
        return moves.length === 9 ? "Draw" : "Pending"; 
    } 
}

/*  This code is a Tic-Tac-Toe game simulator.
It takes an array of moves as input, 
where each move is represented as a 2-element array `[row, column]`.
The code keeps track of the moves made by each player and
determines the outcome of the game.
 */ 