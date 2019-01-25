/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    
    var maxVal = nums[0]
    
    if (nums.length === 1){
        return true
    }
    
    
    
    for (var i=0;i < nums.length-1;i++){
        
        maxVal = Math.max(maxVal, i+nums[i])
        console.log('max:',maxVal)
        
        if (maxVal >= nums.length-1){
            console.log('true')
            return true
        }
        
        if (maxVal <= i){
            if (nums[i] === 0) {
                    console.log('false11')
                return false
            }                    
        }

    }
    console.log('false')
    return false
};

canJump([3,0,8,2,0,0,1])