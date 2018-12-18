/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    var n=x;
    var rev =0;
    var dig;

    while (n > 0){
        dig = n%10;
        rev = (rev * 10) + dig;
        n=Math.floor(n/10);
        console.log(n);
    }


    if (x==rev){
        return true;
    } else {
        return false;
    }
};