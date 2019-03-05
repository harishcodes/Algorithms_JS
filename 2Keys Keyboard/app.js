/**
 * @param {number} n
 * @return {number}
 
 Question 
 ---------
 
 Initially on a notepad only one character 'A' is present. You can perform two operations on this notepad for each step:

Copy All: You can copy all the characters present on the notepad (partial copy is not allowed).
Paste: You can paste the characters which are copied last time.
 

Given a number n. You have to get exactly n 'A' on the notepad by performing the minimum number of steps permitted. Output the minimum number of steps to get n 'A'.

Example 1:

Input: 3
Output: 3
Explanation:
Intitally, we have one character 'A'.
In step 1, we use Copy All operation.
In step 2, we use Paste operation to get 'AA'.
In step 3, we use Paste operation to get 'AAA'.
 

Note:

The n will be in the range [1, 1000].
 
 */
var minSteps = function(n) {
    
    if (n===1) return 0
    
   return 1+ helper(1,1,n)
    
};


function helper(inPad,inClip,n){

    if (inPad ===n){
        return 0    
    }
    
    if (inPad > n){
        return n
    }
    
    var copyAndPaste = 2 + helper(inPad*2,inPad,n)
    var justPaste = 1 + helper(inPad+inClip,inClip,n)
    
    var res=Math.min(justPaste,copyAndPaste)
    //console.log(res,'res',justPaste,copyAndPaste)
    return Math.min(justPaste,copyAndPaste)
    
    
}

console.log(minSteps(10))



var minStepsdp = function(n) {
    
    if (n===1) return 0
    var dp = [...Array(n)].map(e=> Array(n))
    
    for (var i=0;i<n;i++){
        for (var j=0;j<n;j++){
            dp[i][j] = -1
        }
    }
   return 1+ helper(1,1,n,dp)
    
};


function helperdp(inPad,inClip,n,dp){

    if (inPad ===n){
        return 0    
    }
    
    if (inPad > n){
        return n
    }
    if(dp[inPad][inClip] !== -1){
        console.log(dp)
        return dp[inPad][inClip]
    }
    
    var copyAndPaste = 2 + helper(inPad*2,inPad,n,dp)
    var justPaste = 1 + helper(inPad+inClip,inClip,n,dp)
    
    dp[inPad][inClip]=Math.min(justPaste,copyAndPaste)
    //console.log(res,'res',justPaste,copyAndPaste,dp)
    return dp[inPad][inClip]
    
    
}

console.log(minStepsdp(10))

