/*
Triple Step : A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
steps at a time. Implement a method to count how many possible ways the child can run up the
stairs.
*/

var toi = function(n) {
    

    helper(n,'A','C','B')
    
    
    
}

function helper(n,src,des,mid){
    
    console.log(src,des,mid)
    if (n >= 1){
        helper(n-1,src,mid,des)

        console.log('Move disk from Tower ',src, ' to ', des)

        helper(n-1,mid,des,src)        
    }
    

    return 
}

toi(3)