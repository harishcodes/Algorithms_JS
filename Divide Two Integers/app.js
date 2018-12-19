/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var result = 0;
    var j = 0;
    var unSignedDividend;
    var unSignedDivisor;

    
    if (dividend < 0 ){
        unSignedDividend = Math.abs(dividend);
    } else {
        unSignedDividend = dividend;
    }
    console.log(unSignedDividend);


    if (divisor < 0 ){
        unSignedDivisor = Math.abs(divisor);
    } else {
        unSignedDivisor = divisor;
    }
    console.log(unSignedDivisor);
    
    /*for (var i= 1; i <= unSignedDividend; i++){
        j++;
        if (j == unSignedDivisor) {
            result++;
            j=0;
        }
    }*/
    
    while(unSignedDividend >= unSignedDivisor){
        
         if (unSignedDividend > 0) {
            result ++;
        }
        
        console.log('bef :' +unSignedDividend);
        unSignedDividend = unSignedDividend - unSignedDivisor;
        console.log('aft :' +unSignedDividend);
        
    
    }
    
    console.log(result);
    
    if (dividend < 0 && divisor < 0){
        if (result >= Math.pow(2,31)){
            result = Math.pow(2,31) -1
        }       
    } else {
        if (dividend < 0 || divisor < 0){
            if (result >= Math.pow(2,31)){
                result = Math.pow(2,31)
            }
            result = '-' + result
        } else {
            if (result >= Math.pow(2,31)){
                result = Math.pow(2,31) -1
            }
        }
    }
    
    
    
    
    

    
    console.log(result);
};

divide(16,4);