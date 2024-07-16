class Solution {
    public String tictactoe(int[][] moves) {

        int[] a = new int[8];
        int[] b = new int[8];

        for(int i = 0; i < moves.length; i++){
            int[] p = (i%2 == 0)? a: b;

            int r = moves[i][0],
            c = moves[i][1];

            p[r]++;
            p[3+c]++;
            if(r == c) {
                p[6]++;
            }

            if( r == 2-c){
                p[7]++;
            }
        }

        for( int i = 0; i < a.length; i++){
            if(a[i] == 3){
                return "A";
            }
            if(b[i] == 3){
                return "B";
            }
        }
        return moves.length == 9? "Draw" : "Pending";
        
    }
}



class Solution2 {
    public String tictactoe(int[][] moves) {
        // Initialize two arrays to keep track of moves for player A and B
        int[] a = new int[8];
        int[] b = new int[8];

        // Iterate through each move
        for(int i = 0; i < moves.length; i++){
            // Alternate between player A and B's moves
            int[] p = (i%2 == 0)? a: b;
            // Get the row and column of the current move
            int r = moves[i][0], c = moves[i][1];
            // Increment the row and column counts
            p[r]++;
            p[3+c]++;
            // Check for diagonal wins
            if(r == c) {
                p[6]++;
            }
            // Check for anti-diagonal wins
            if( r == 2-c){
                p[7]++;
            }
        }

        // Check for wins
        for( int i = 0; i < a.length; i++){
            // If player A has won
            if(a[i] == 3){
                return "A";
            }
            // If player B has won
            if(b[i] == 3){
                return "B";
            }
        }

        // If the game is a draw or still pending
        return moves.length == 9? "Draw" : "Pending";
    }
}

// This code is implementing a Tic-Tac-Toe game, where `moves` 
// is a 2D array representing the moves made by both players. 
// The code keeps track of the moves using two arrays `a` and `b` for player A and B respectively. 
// It then checks for wins, draws, or pending games based on the moves made.