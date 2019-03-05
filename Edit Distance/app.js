/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 
 
 Question
 --------
 Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character
Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
 
 */
var minDistance = function(word1, word2) {
 
    var memo = [...Array(word1.length)].map(e=> Array(word2.length))
    
    for (var i=0;i<word1.length;i++){
        for (var j=0;j<word2.length;j++){
            memo[i][j] = -1
        }
    }
    
    
    console.log(memo)
    return calcDist(word1,word2,0,0,memo)
    
    
};


function calcDist(s1,s2,i,j,memo){
    
    
    if (s1.length === i) return s2.length -j
    if (s2.length === j) return s1.length -i
    
    if (memo[i][j] !== -1){
        return memo[i][j]
    }
    
        
    if (s1.charAt(i) === s2.charAt(j)){
        memo[i][j] = calcDist(s1,s2,i+1,j+1,memo)
    } else {
        var ins = calcDist(s1,s2,i,j+1,memo)
        var del = calcDist(s1,s2,i+1,j,memo)
        var rep = calcDist(s1,s2,i+1,j+1,memo)
        memo[i][j] = Math.min(Math.min(ins,del),rep) + 1
        
    }
    return memo[i][j]        
}


console.log(minDistance('horse','ros'))