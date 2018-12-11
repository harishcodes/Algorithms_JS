/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    const mapping = {
        'I':1,
        'IV':4,
        'V':5,
        'IX':9,
        'X':10,
        'XL':40,
        'L':50,
        'XC':90,
        'C':100,
        'CD':400,
        'D':500,
        'CM':900,
        'M':1000
    }

    var arr = s.split('');
    var i = 0;
    var sum =0;
    while(i<arr.length){
        console.log(arr[i] + arr[i+1]);
        if (((arr[i] + arr[i+1]) in mapping)){
            console.log('key there '+arr[i] + arr[i+1])
            sum += mapping[arr[i]+arr[i+1]];
            i += 1;
        } else {
            console.log('key not there '+ arr[i]);
            sum += mapping[arr[i]];
        }
        i += 1;
    }    
    console.log(sum);
};


romanToInt('CMLVI');