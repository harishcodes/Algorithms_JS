/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

  nums.sort((a, b) => {
    return a - b;
  });
    
  console.log(nums);

  const result = [];
  for (let indexZ= 0; indexZ < nums.length - 3; indexZ++) {
      for (let indexA = indexZ+1; indexA < nums.length - 2; indexA++) {

        let indexB = indexA + 1;
        let indexC = nums.length - 1;

        while (indexB < indexC ) {

          let sum = nums[indexZ] + nums[indexA] + nums[indexB] + nums[indexC];

          console.log('Z :' + nums[indexZ] + ' A :' + nums[indexA] +' B :' + nums[indexB] +' C :' + nums[indexC])
          if (sum < target) {
            indexB++;
          } else if (sum > target) {
            indexC--;
          } else {
            result.push([nums[indexZ],nums[indexA], nums[indexB], nums[indexC]]);
            while (nums[indexB] === nums[indexB + 1]) indexB++;
            while (nums[indexC] === nums[indexC - 1]) indexC--
            indexB++;
            indexC--;
          }
        }
      }
  }

  var tempUnique = [];  
  var finalUniqueArr=[];
  finalUniqueArr = result.filter((v) => {
       if (tempUnique.indexOf(v.toString()) < 0) {
            tempUnique.push(v.toString());
            return v;
        } 
    });  
    
  console.log(finalUniqueArr)
    return finalUniqueArr;
    

};




//fourSum([1, 0, -1, 0, -2, 2],0);
fourSum([-1,0,1,2,-1,-4],-1);
