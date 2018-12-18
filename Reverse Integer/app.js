/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var xstr = x.toString().split('');
    var tempxstr=[];

    var result;


    if (xstr[0] == '-') {
        tempxstr = xstr.slice(1,(xstr.length + 1));
        result = xstr[0] + tempxstr.reverse().join('')
    } else {
           result = xstr.reverse().join('')
    }

    if (Math.abs(parseInt(result)) > Math.pow(2,31)){
        return 0;
    }


    return result;
};