/**
*Given an array A of integers, return the number of (contiguous, non-empty) subarrays that have a sum divisible by K

Example :
Input: A = [4,5,0,-2,-3,1], K = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by K = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
 */
var subarraysDivByK = function(A,K) {
    var cnt=0
    for (var i=0;i<A.length;i++){
        var sum =0
        for (var j=i;j<A.length;j++){
            sum +=A[j]
            if (sum%K === 0){
                console.log('SUM:',sum)
                cnt++
            }
        }
    }
    
    console.log(cnt)
}



//subarraysDivByK([4,5,0,-2,-3,1],5)
subarraysDivByK([1,2,2],3)


var subarraysDivByKrecur = function(A,K) {
    

    var cnt =0
    var arr=[]
    var boolVal = false
    
    const helper = (index,sum,subset)=> {
        
        if (index >= A.length) {
            return
        }        
        

        
        if (sum%K === 0 && boolVal){
            arr.push(subset)
            cnt++
            console.log('cn',sum,subset.slice())
        }                     
        boolVal = true
        //var sum1=0
        for (var i=index;i<A.length;i++){            
            //console.log('Sum:',sum,'i:',i,'A[i]:',A[i])
            helper(i+1,sum + A[i],subset.concat(A[i]))           
        }
        
        
        return cnt
    }
    
    
    
    helper(0,0,[])
    console.log(cnt,arr)
    
    
}

subarraysDivByKrecur([4,5,0,-2,-3,1],5)
//subarraysDivByKrecur([1,2,7],3)





var knapSack2 = (w,v,t) => {
    
    
    const recurIt = (wt,v,t,i) => {
        
        if ((i===wt.length) || (t === 0)) {
            return 0
        }
        
        if (t < wt[i]) {
            return 0
        }
        
        
        var itmIncVal = v[i] + recurIt(wt,v,t-wt[i],i+1)
        var itmExlVal = recurIt(wt,v,t,i+1)
        
        var maxVal = Math.max(itmExlVal,itmIncVal)
        console.log(itmExlVal,itmIncVal)
        
        return maxVal
    }
    
    var max = recurIt(w.slice(),v,t,0)
    console.log(max)
    return max
        
}

//knapSack2([10,40,20],[100,280,120],60)
//knapSack2([24,10,10,7],[24,18,18,10],25)

