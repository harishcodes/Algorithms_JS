/*
Triple Step : A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
steps at a time. Implement a method to count how many possible ways the child can run up the
stairs.
*/

var powerSet = function(n) {
    
    var subset=[], res =[]
    helper(n.split(''),subset,res)
    
    console.log(res)
    
}

function helper(n,subset,res){
    console.log(n,subset)

     res.push(subset)

    
    if (n.length === 0){
        return
    }
        
    console.log('ncpy',n,subset,n.length) 
    for (var i=0;i<n.length;i++){        
        helper(n.slice(i+1) ,subset.concat(n[i]),res)
    }
    
    return res
}


powerSet('123')


function permute(s){
    
    var arr = s.split('')
    var list=[]
    const permLoop = (arr,sub=[]) => {
        
        if (arr.length === 0){
            console.log('RETURNING :', sub, list)
            return list.push(sub)            
        }
        
        for (var i=0;i<arr.length;i++){
            
            let curr = arr.slice()            
            let rem = curr.splice(i,1)
            console.log('ARR:',arr)
            console.log('CURR:',curr)
            console.log('REM:',rem)
            console.log('***********')
            
            permLoop(curr,sub.concat(rem))
        }
        
    }
    permLoop(arr)
    console.log(list)
}


permute('abc')


var permuteUnique = function(nums) {
  
    var list =[]
    const permuteLoop = (nums,sub=[])=> {
        
        if (nums.length === 0){
            return list.push(sub)
        }
        
        let prev
        for (var i=0;i<nums.length;i++){
            if (nums[i] === prev){
                continue
            }
            prev = nums[i]
            let curr = nums.slice()
            let rem = curr.splice(i,1)
            permuteLoop(curr,sub.concat(rem))
        }
        
    }
    
    permuteLoop(nums.sort((a,b)=>a-b))
    return list
};


permuteUnique([1,1,2])