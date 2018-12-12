/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    nums.sort((a,b)=> {
        return a-b;
    });
    
    var min = Infinity;
    var result;
    
    for (i=0;i< nums.length - 2; i++){
        
        var l = i+1;
        var r = nums.length -1;
        
        while (l < r){
            let sum = nums[i] + nums[l] + nums[r];
            console.log('i :' + nums[i]);
            console.log('l :' + nums[l]);
            console.log('r :' + nums[r]);
            console.log('sum :' + sum);
            var tmp = Math.abs(sum - target);
            if (tmp < min){
                min = tmp;
                result = sum;
            }
            
            if (sum == target){
                result = sum;
                break;
            } else if (sum < target){
                l++;
            } else {
                r--;
            }            
        }        
    }
        
    console.log(result);
};


/*

function threeSum2(arr) {

  arr.sort((a, b) => {
    return a - b;
  });

  const result = [];

  for (let indexA = 0; indexA < arr.length - 2; indexA++) {

    let indexB = indexA + 1;
    let indexC = arr.length - 1;

    if (indexA > 0 && arr[indexA] === arr[indexA - 1]) continue;

    while (indexB < indexC ) {

      let sum = arr[indexA] + arr[indexB] + arr[indexC];

      if (sum < 0) {
        indexB++;
      } else if (sum > 0) {
        indexC--;
      } else {
        result.push([arr[indexA], arr[indexB], arr[indexC]]);
        while (arr[indexB] === arr[indexB + 1]) indexB++;
        while (arr[indexC] === arr[indexC - 1]) indexC--
        indexB++;
        indexC--;
      }
    }
  }
  return result;
}

*/



threeSumClosest([-1, 2, 1, -4],1);

//threeSum2([-1, 0, 1, 2, -1, -4]);