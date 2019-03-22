/*
Triple Step : A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
steps at a time. Implement a method to count how many possible ways the child can run up the
stairs.
*/

var recurMultiply = function(n,m) {
    
    var res=0
    res = helper(n,m,res)
    
    console.log(res)
    
}

function helper(i,j,res){
    
    if (j === 0){
        return 0
    }
    


    var val = i+ helper(i,j-1,res)
    res += val
    
    return res
}


//recurMultiply(12,3)


var pascalTriangle = function (n) {
    
    var list =[], var1 =[1]
    list.push(var1)
    
    pascalrecur(n,list)
    console.log(list)
}


function pascalrecur (n,list){
    
    if (n<2){
        return list
    }
    
    prevRow = list[list.length-1]
    var currRow = [1]
    
    for (var i=1;i<prevRow.length;i++){
        currRow[i] = prevRow[i]+ prevRow[i-1]
    }
    currRow.push(1)
    list.push(currRow)
    
    pascalrecur(n-1,list)
    
}


pascalTriangle(5)

