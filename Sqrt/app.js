/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  
    var cnt=0,tmp=0
    for (let i=1; i<= x; i+=2){
        
        tmp = tmp + i
        cnt++
        console.log(cnt,tmp)        
        if (tmp >= x) {
            if (tmp > x){
                cnt--
            }
            break
        }
        
    }
    return cnt
};

console.log(mySqrt(5))