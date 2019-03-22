/*
Triple Step : A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
steps at a time. Implement a method to count how many possible ways the child can run up the
stairs.
*/

var coin = function(n,coins) {
    
    var res=0
    var ways = helper(n,n,coins,0)
    
    console.log('ss',ways)
    
    
    
}

function helper(n,val,coins,index){
    
    
    if (val === 0) return 1
    
    if (index >= coins.length) {
        return 0;
    }
    
    
    var cnt = helper(n,val,coins,index+1)
    if (val  >=coins[index]){
        cnt += helper(n,val-coins[index],coins,index)
    }
    
    return cnt
}

coin(25,[1,5,10,25])



var coindp = function(n,coins){
    
    var dp= new Array(n+1)
    dp.fill(0)
    dp[0] =1
    console.log(dp)
    for (var i=0;i<coins.length;i++){        
        for (var j=1;j<=n;j++){
            if (j-coins[i] >= 0 ){
                dp[j] += dp[j-coins[i]]
            }

        }
    }
    
    console.log(dp)
}

//coindp(25,[1,5,10,25])