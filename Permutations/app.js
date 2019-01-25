/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  
    var result =[]
    const permuteRec =(arr,memo=[])=> {
        
        if (arr.length === 0){
            console.log('pushing', memo)
            result.push(memo)
        } else {
            for (let i=0;i<arr.length;i++){
                let curr = arr.slice();
                let next = curr.splice(i, 1);    
                console.log(memo.concat(next), 'ivalue :', i)
                permuteRec(curr,memo.concat(next))
            }            
        }
        
    }
    
    
    permuteRec(nums)
    
    console.log(result)
    return result
    
};

permute([1,2,3])