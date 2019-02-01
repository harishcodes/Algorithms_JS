/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    
    let result =[]
    for (let i=0;i<=num;i++){
        if (i === 0){
            result.push(0)
            continue
        }
        if (i === 1 || i===2){
            result.push(1)
            continue
        }                

        if (i%2 === 0){
            result.push(result[Math.floor(i/2)])
        } else {
            result.push(result[Math.floor(i/2)]+1)
        }                
        
    }
    
    return result
};

countBits(5)