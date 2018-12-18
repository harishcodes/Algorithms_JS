/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {

    var rtrimstr = str.trimLeft();
    var firstChar = rtrimstr.charAt(0);
    var signPresent = false;
    var checkArr = [];
    var numberArr =[];

    if (firstChar === '-' || firstChar === '+'){
        signPresent = true;
        firstChar = rtrimstr.charAt(1);
    }

    if (isNaN(parseInt(firstChar))){
        return 0;
    }

    if (signPresent){
        checkArr = rtrimstr.substr(1).split('');
    } else {
        checkArr = rtrimstr.substr(0).split('');
    }

 for (i=0;i<checkArr.length;i++) {
        if (!isNaN(parseInt(checkArr[i]))){
            numberArr.push(checkArr[i]);
        } else {
            break;
        }
    }

    if (parseInt(numberArr.join('')) >= Math.pow(2,31)){
        if (signPresent && rtrimstr.charAt(0) === '-'){
            return '-' + Math.pow(2,31);
        } else {
            return (Math.pow(2,31)-1);
        }
    }

    if (signPresent && rtrimstr.charAt(0) === '-'){
        return ('-' + numberArr.join(''));
    } else {
        return numberArr.join('');
    }

};