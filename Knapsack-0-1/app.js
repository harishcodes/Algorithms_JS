/**
*Knapsack
 */
var knapSack = function(w,v,t) {
    
    //var board = new Array(n).fill().map(()=> new Array(n).fill('.'))
    var res=0
   var result = helper(w,v,t,0,0,0)  
    console.log(result)
    
}

function helper(w,v,t,ind,totwt,val) {
    
    if (totwt > t){
        return 0
    }
    
    if (totwt < t){
        if (totwt + w[ind+1] > t){
            console.log(val)
            return val
        }     
    }
    
    if (totwt === t){
            console.log(val)
            return val 
    }
    
    console.log(w,v,t,ind,totwt,val)
    var res =0
    for (var i=ind;i<w.length;i++){
                
        res = Math.max(res, helper(w,v,t,ind+1,totwt+w[i],val+v[i]))
    }
    console.log('he',res)
            return res

}

knapSack([10,40,20],[100,280,120],60)


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

knapSack2([10,40,20],[100,280,120],60)
knapSack2([24,10,10,7],[24,18,18,10],25)

