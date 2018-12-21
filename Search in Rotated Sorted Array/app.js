/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  
    var leftArr=[];
    var rightArr=[];
    temp=nums[0];
    var result;
    pivotReached = false;
    for (var i=0;i<nums.length;i++){
        
        if (!pivotReached){
            if (nums[i] >= temp) {
                leftArr.push(nums[i]);
            } else {
                pivotReached = true;
                rightArr.push(nums[i]);
            }            
        } else {
            rightArr.push(nums[i])
        }
        
        temp = nums[i];
    }
    
    
    if (target >= leftArr[0]){
        result = leftArr.indexOf(target);
    } else {
        result = rightArr.indexOf(target);
        if (result !== -1){
            result = leftArr.length+result;
        }
        
    }

    console.log(leftArr);
    console.log(rightArr);
    console.log(result);
    return result;

    
};

search([4,5,6,7,0,1,2],3)