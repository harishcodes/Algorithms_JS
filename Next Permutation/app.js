/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var len = nums.length;
    var i = len-1;
    var decIndFound = false;
    var decIndex;
    var decVal;
    var swapIndex;
    var swapVal;
    
    while(i>0){
        if (nums[i-1] < nums[i] ){
            decIndFound = true;
            decIndex = i-1;
            decVal = nums[i-1];
            break;
        }
        i--;
    }
    
    console.log('Dec Index:' + decIndex + " - " + decVal);        
    console.log('AFTER WHILE :' + nums);        
    
    if (decIndFound) {
        var tempVal=Infinity;
        for (var l=decIndex+1;l<len;l++){
            if (nums[l]-decVal < tempVal){
                tempVal = nums[l]-decVal;
                console.log(tempVal);
                if (tempVal > 0){
                    swapVal = nums[l];
                    swapIndex = l;
                }
                
            }
        }
        
        if (typeof swapIndex === 'undefined') {
            swapIndex = len-1;
            swapVal = nums[len-1];
        }
        
        console.log('Swap Index:' + swapIndex + " - " + swapVal);  
        console.log('POS 1 :' + nums);        
        
        for (var k =0;k<decIndex;k++){
            nums.push(nums[k]);
        }
        
        console.log('POS 2 :' + nums);
        
        if (typeof swapIndex !== 'undefined'){
            nums.push(nums[swapIndex]);            
        }

        console.log('POS 3 :' + nums);
        
        if (typeof swapIndex !== 'undefined'){        
            nums.splice(swapIndex,1,decVal);
        }
        console.log('POS 4 :' + nums);
        

        console.log('POS 5 :' + nums);
        
        for (var z= decIndex+1;z<len;z++){
            nums.push(nums[z]);
        }                
        


        nums.splice(0,len)    
        console.log(nums[decIndex+1]);
        console.log(decIndex);
        console.log(len);
        console.log(nums[len]);
        console.log(nums.length);
        partialSort(nums, decIndex+1, len);
        console.log("final :::: " + nums);
    } else {
        nums.reverse();
        console.log(nums);
    }
    console.log(len);
    
    console.log(nums);
};


function partialSort(arr, start, end) {
    var preSorted = arr.slice(0, start), postSorted = arr.slice(end);
    var sorted = arr.slice(start, end).sort(function (a,b) { return a-b; });
    arr.length = 0;
    arr.push.apply(arr, preSorted.concat(sorted).concat(postSorted));
    return arr;
}

//nextPermutation([1,5,8,4,7,6,5,3,1]);
//nextPermutation([1,5,1]);
nextPermutation([11,12,0,27,3,11,21,9,0,15,26,27,17,24,0,16,4,17,14,8,15,8,2,16,10,6,6,24,16,2,18,19,6,10,17,10,21,0,11,13,7,7,2,16,24,25,2,20,12,9,20,19]);
