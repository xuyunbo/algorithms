/**
 * @description
 * @param {*} arr 
 */

function sort(arr) {
    var len = arr.length;
    var tmp;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
            console.log(i, j, arr, len);
        }
    }
    return arr;
}

console.log(sort([1, 3, 2, 4, 7, 5]));
console.log(sort([5,7,4,2,3,1]));