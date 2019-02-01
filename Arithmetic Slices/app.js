/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    
    var arr=[]
    
    for (let i=0;i<A.length;i++){
        console.log('call',i)
        createArr(i,A)
    }
    
    function createArr(j,A){
        var k = j+1
        var innerArr=[]
        var tempArr=[]
        var gap = A[j+1] - A[j]
        var count =1
        innerArr.push(A[j])
        while (k<A.length){
            
            if (A[k] - A[k-1] === gap) {
                
                count++
                innerArr.push(A[k])       
                if (count === 3){
                    arr.push(innerArr.slice())
                }
                
                if (count > 3){
                    arr.push(innerArr.slice())
                }         
            } else {
                break
            }
            k++            
        }        
    }
    
        console.log(arr)
    
};

numberOfArithmeticSlices([1, 2, 3, 4,5])

