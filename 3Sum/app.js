/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    var temp = [];
    var tempUnique = [];
    var finalArr=[];
    var finalUniqueArr=[];
    

    for (var i = 0 ; i < nums.length; i ++){
        temp = [];
        for (var j= i+1; j< nums.length; j++){
            temp=[];
            for (var k= j+1; k< nums.length; k++){
                temp.push(nums[i]); 
                temp.push(nums[j]);
                temp.push(nums[k]);
//                console.log('i:' + i + 'j:' + j + 'k:' +k)
                if (temp.reduce((a, b) => a + b, 0) == 0) {
                    finalArr.push(temp.sort((a,b) => a-b));
                }
                
                temp=[];
            }
            if (temp.length >0){                
                if (temp.reduce((a, b) => a + b, 0) == 0) {
                    finalArr.push(temp.sort((a,b) => a-b));
                }                
            }
            
        }
        if (temp.length >0){
            if (temp.reduce((a, b) => a + b, 0) == 0) {
                finalArr.push(temp.sort((a,b) => a-b));
            }
        }
    }
    
    console.log(finalArr);
    
    
    finalUniqueArr = finalArr.filter((v) => {
       if (tempUnique.indexOf(v.toString()) < 0) {
            tempUnique.push(v.toString());
            return v;
        } 
    });
    
    console.log(finalUniqueArr);
    
};



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




threeSum([-1, 0, 1, 2, -1, -4]);

threeSum2([-1, 0, 1, 2, -1, -4]);