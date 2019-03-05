/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    
    var pl1=[],pl2=[], st=1,end=nums.length-1,pl1ToPick = false
    pl1.push(nums[st-1])
    
    while(st !== end){
        
        if (pl1ToPick){
            pl1ToPick = false
            if (nums[st] >= nums[end]){
                pl1.push(nums[st])
                st++
            } else {
                pl1.push(nums[end])
                end --
            }
        } else {
            pl1ToPick = true
            if (nums[st] >= nums[end]){
                pl2.push(nums[st])
                st++
            } else {
                pl2.push(nums[end])
                end --
            }            
        }
    }
    
    if (st === end){
        if (pl1ToPick){
            pl1.push(nums[st])
        } else {
            pl2.push(nums[st])
        }
    }
    
    
    console.log(pl1,pl2)
    
    
    var pl1Sum = pl1.reduce((a,b) => a+b,0)
    var pl2Sum = pl2.reduce((a,b) => a+b,0)
    
    console.log(pl1Sum,pl2Sum)
    

    if (pl1Sum >= pl2Sum){
        return true
    } else {
        
        st=0
        end = nums.length-2
        pl1=[]
        pl2=[]
        pl1ToPick = false
        pl1.push(nums[end+1])
        console.log('pl1 sta',pl1)
        
        while(st !== end){

            if (pl1ToPick){
                pl1ToPick = false
                if (nums[st] >= nums[end]){
                    pl1.push(nums[st])
                    st++
                } else {
                    pl1.push(nums[end])
                    end --
                }
            } else {
                pl1ToPick = true
                if (nums[st] >= nums[end]){
                    pl2.push(nums[st])
                    st++
                } else {
                    pl2.push(nums[end])
                    end --
                }            
            }
        }        
        
        if (st === end){
            if (pl1ToPick){
                pl1.push(nums[st])
            } else {
                pl2.push(nums[st])
            }
        }
        
        console.log(pl1,pl2)


        var pl1Sum = pl1.reduce((a,b) => a+b,0)
        var pl2Sum = pl2.reduce((a,b) => a+b,0)

        console.log(pl1Sum,pl2Sum)      
        
         if (pl1Sum >= pl2Sum){
             return true
         } else {
             return false
         }
        
    }
    
};





PredictTheWinner([1,5,233,7])