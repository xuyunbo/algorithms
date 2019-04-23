/**
 * @description [1,1,2,3,5,8] 
 * @param {*} n 
 */

function recursion(n) {
    if ( 1 == n ) {
        return 1;
    } else if ( 2 == n) {
        return 1;
    }
    return recursion(n-1) + recursion(n-2);
}

console.log(recursion(3));