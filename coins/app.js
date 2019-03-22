var coinChange = function(coins, n) {
    
    
    coins.sort((a,b)=> a-b)
    
    var dp= new Array(n+1)
    dp.fill(Number.MAX_SAFE_INTEGER)
    dp[0] =0
    //console.log(coins)
    for (var i=1;i<=n;i++){        
        for (var j=0;j<coins.length;j++){
            if (coins[j] <= i){
                dp[i] = Math.min(dp[i], 1 + dp[i-coins[j]])
                //console.log(dp)
            }
        }


    }
    
    if (dp[n] === Number.MAX_SAFE_INTEGER){
        return -1
    }
    return dp[n]

}

//coinChange([186,419,83,408],6249)
//coinChange([1, 2, 5],11)
//coinChange([2],3)



var hammingDistance = function(x, y) {
    let diff = x ^ y;
    let result = 0;
    
    console.log(5..toString(2))
    // find number of ones in the XOR result
    while (diff > 0) {
        console.log (diff & 1)
        if (diff & 1 === 1) result += 1;
        diff >>= 1;
    }
    
    return result;
};

hammingDistance(1,4)