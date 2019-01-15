/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  
    var left = 0
    var right =height.length -1
    var leftHeight =0
    var rightHeight=0
    var units=0
    
    
    while (left <= right){
        
        if (leftHeight <= rightHeight){
            
            leftHeight = Math.max(leftHeight,height[left])
            units += leftHeight - height[left]
            left++
            
        } else {
            rightHeight = Math.max(rightHeight,height[right])
            units += rightHeight - height[right]
            right --
        }
        
        
    }
    
    console.log(units)
    return units
    
};

trap([0,1,0,2,1,0,1,3,2,1,2,1])
//trap([1,0,4,2,1,1,1,3,3,2])
//trap([1,0,4,2,1,1,1,3,3,5])
//trap([2,0,2])
//trap([4,2,3])
//trap([5,4,3,2,1,2])
//trap([5,4,1,2])