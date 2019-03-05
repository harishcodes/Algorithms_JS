/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    
    var limit = Math.pow(10,n)
    
    var count =0;
    for (let i=0;i<limit;i++){
        
        var str = i.toString().split('')
        var uniqArr = [...new Set(str)]
        if (i.toString().length === uniqArr.length ) {
            count++
        }
        
    }
    
    console.log(count)
    
};

countNumbersWithUniqueDigits(10)