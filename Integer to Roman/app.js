/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

    var digCnt = num.toString().length;
    console.log(digCnt);
    var numArr=[];
    var intVal = 1000;
    var retVal;



    switch (digCnt) {
        case 1:
            retVal = (findSingleDigitRoman(num));
            break;
        case 2:
            retVal = (findDoubleDigitRoman(num));
            break;
        case 3:
            retVal = (findTripleDigitRoman(num));
            break;
        case 4:
            retVal = (findFourDigitRoman(num));
            break;
    }

    return retVal;
};


function findSingleDigitRoman(num){
    var retVal;
    var loopVal
    if (num < 4){
        loopVal = loopValue('I',num);
        retVal = loopVal;
    } else {
         if (num >= 4) {
             if (num == 4){
                 retVal = 'IV';
             } else {
                 if (num < 9){
                     retVal = 'V' + loopValue('I',(num-5));
                 } else {
                     retVal = 'IX';
                 }
             }
         }
    }
    return retVal;
}



function findDoubleDigitRoman(num){
    var retVal;
    var loopVal;
    if (num < 40){
        loopVal = loopValue('X',parseInt(num/10)) + findSingleDigitRoman(num%10);
        retVal = loopVal;
    } else {
         if (num >= 40) {
             if (num == 40){
                 retVal = 'XL';
             } else {
                 if (num < 90){
                     if (num < 50){
                        retVal = 'XL' + findSingleDigitRoman(num%10);
                     } else {
                        retVal = 'L' + loopValue('X',(parseInt(num/10)-5)) + findSingleDigitRoman(num%10);
                     }

                 } else {
                     if (num == 90){
                        retVal = 'XC';
                     } else {
                         retVal = 'XC' + findSingleDigitRoman(num%10);
                     }

                 }
             }
         }
    }
    return retVal;
}


function findTripleDigitRoman(num){
    var retVal;
    var loopVal;
    if (num < 400){
        loopVal = loopValue('C',parseInt(num/100)) + findDoubleDigitRoman(num%100);
        retVal = loopVal;
    } else {
         if (num >= 400) {
             if (num == 400){
                 retVal = 'CD';
             } else {
                 if (num < 900){
                     if (num < 500){
                        retVal = 'CD' + findDoubleDigitRoman(num%100);
                     } else {
                        retVal = 'D' + loopValue('C',(parseInt(num/100)-5)) + findDoubleDigitRoman(num%100);
                     }
                 } else {
                     if (num == 900){
                        retVal = 'CM';
                     } else {
                         retVal = 'CM' + findDoubleDigitRoman(num%100);
                     }

                 }
             }
         }
    }
    return retVal;
}


function findFourDigitRoman(num){
    var retVal;
    var loopVal;
    if (num < 4000){
        loopVal = loopValue('M',parseInt(num/1000)) + findTripleDigitRoman(num%1000);
        retVal = loopVal;
    }
    return retVal;
}





function loopValue(romanChar,num){

    var i = 1;
    var retVal='';
    while (i<=num){
        retVal = retVal + romanChar;
        i=i+1;
    }
    return retVal;
}
