/*
Triple Step : A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
steps at a time. Implement a method to count how many possible ways the child can run up the
stairs.
*/

var tripleStep = function(n) {
    
    var ways = helper(n,0)
    console.log(ways)
    
}

function helper(n,i){
    
    if (i===n) {
        return 1
    }
    
    if (i > n){
        return 0
    }
    
    
    var step1 = helper(n,i+1)
    var step2 = helper(n,i+2)
    var step3 = helper(n,i+3)
    
    return step1 + step2 + step3
}


tripleStep(6)