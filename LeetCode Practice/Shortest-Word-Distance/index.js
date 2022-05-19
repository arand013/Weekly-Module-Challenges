// QUESTION Shortest Word Distance 

/*
Given a list of words and two wordsword1_and_word2, 
return the shortest distance between these two words in the list.

Example 1:
Assume that words =["practice", "makes", "perfect", "coding", "makes"].



*/

//UNDERSTAND
/* 
1) create a function w/ parameters (WORD, WORD1, WORD2) 
2) create variables,
3) write a loop 
4) return, all the triplets 
*/
//DIAGRAM
/* 
*/
//PSUEDOCODE
//CODE





// ANSWER

function shortestWodrDistance(words, word1, word2) {
    
    var pos = {};

    for( let i = 0; i < words.lengt; i++) {
        var w = words[i];

        if(!pos[w]) {
            pos[w] = [i];
        } else {
            pos[w].push(i);
        }
    }

    var i = 0, j = 0, pos1=pos[word1], pos2 = pos[word2];
    var res = words.length-1;

    while(i < pos1.length && j < pos2.length) {
        
        if (pos1[i] < pos2[j]) {
            res = Math.min(res, pos2[j] - pos1[i]);
            i++; 

        } else if (pos1[i] > pos2[j]) { 
            res = Math.min(res, pos1[i] - pos2[j]);
            j++
        } else { 
            return 0; 
        }
    }

    return res; 
};