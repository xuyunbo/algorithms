/**
 * @description
 * @param {*} arr 
 */
function find_smallest (arr) {
    var len = arr.length;
    var smallest = arr[0];
    var smallest_index = 0;
    for ( var i = 1; i < len; i++) {
        if ( smallest > arr[i]) {
            smallest = arr[i];
            smallest_index = i;
        }
    }

    return smallest_index;
}

/**
 * @description
 * @param {*} arr 
 */
function sort (arr) {
    var len = arr.length;
    var newArr = [];
    for ( var i = 0; i < len; i++) {
        var smallest_index = find_smallest(arr);
        newArr.push(arr.pop(smallest_index));
    }
}

console.log(sort([5,6,7,8,1,2,3,4]));