/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    var sArr = s.split('');
    var goingDown = true;
    var finalArr =[];
    var arrIndex = 0;

    if (s.length === 1) {
        return s;
    }

    var newArr = sArr.map((item,index,sArr) => {


        if (arrIndex === numRows){
            goingDown = false;
        }

        if (arrIndex === 1){
            goingDown = true;
        }

        if (goingDown) {
            arrIndex = arrIndex + 1;
        } else {
            arrIndex = arrIndex - 1;
        }

        if (typeof finalArr[arrIndex] === 'undefined'){
            finalArr[arrIndex] = item;
        } else {
            finalArr[arrIndex] +=  item;
        }



    });

    return finalArr.join('');

};