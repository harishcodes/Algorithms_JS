/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  
    var result =[]
    const permuteRec =(arr,memo=[])=> {
        
        if (arr.length === 0){
            console.log('pushing', memo)
            result.push(memo)
        } else {
            let prev
            for (let i=0;i<arr.length;i++){
                if (prev === arr[i]){
                    continue
                }
                prev = arr[i]
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

permuteUnique([1,1,2])