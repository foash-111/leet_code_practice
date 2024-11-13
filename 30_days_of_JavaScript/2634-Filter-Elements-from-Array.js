/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    newArray = [];
    for(let i = 0; i< arr.length; i++) {
        let flag = fn(arr[i], i);
        if (flag) {
        newArray.push(arr[i]);
        }
    }
    return newArray;
};