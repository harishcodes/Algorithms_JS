/**
 * @param {number[]} nums
 * @return {number}
 */
var jump1 = function(nums) {
  
    var i=0
    var jumps =0
    var addVal=0
    
    if (nums.length === 1) {
        return 0
    }
    
/*    if (nums[0] >= nums.length -1){
        return jumps
    }  */  
    
    
    while (i < nums.length){
        console.log(nums[i],i+1,i+nums[i],nums)
        let {maxVal,maxIndex,jumpCnt} = addResult(nums[i],i+1,i+nums[i],nums)        
        if (addVal + nums[i] >= nums.length -1){
            jumps++
            break;
        }
        addVal = addVal + jumpCnt
        console.log(addVal,maxIndex,maxVal,jumpCnt)
        jumps ++
        
        if (addVal >= nums.length -1){
            break;
        }
        i=maxIndex
        //i++
    }
    
    console.log(jumps)
    return jumps
    
};



addResult = (value,start,end,arr) => {
    
    let maxVal = arr[start]
    let maxIndex =start
    let jumpCnt =0
    
    for (var i=start;i<=end;i++){
        if (arr[i]>=maxVal){
            maxVal = arr[i]
            maxIndex = i    
        }
    }
    
    if (maxVal < value){
        maxVal = value
        maxIndex = end
    }    
    
    jumpCnt = maxIndex-(start-1)
    
    
    
    return {maxVal,maxIndex,jumpCnt}
}

var jump = function (nums){
    
    var jumps = 0, curEnd = 0, curFarthest = 0;
	for (var i = 0; i < nums.length - 1; i++) {
		curFarthest = Math.max(curFarthest, i + nums[i]);
        console.log('farher :',curFarthest, (i+nums[i]),i)
		if (i == curEnd) {
			jumps++;
			curEnd = curFarthest;
            console.log('inside :', curEnd)
		}
	}
    console.log(jumps)
	return jumps;    
    
}





//jump([3,4,3,2,5,4,3])
jump([2,3,1,2,2,1,4,1,1])
//jump([2,3,1,1,4])
//jump([10,9,8,7,6,5,4,3,2,1,1,0])
//jump([4,1,1,3,1,1,1])