/**
 * @description n!
 * @param {*} n 
 */

function recursion(n) {
    return 0 == n ? 1 : n * recursion(n-1);
}

console.log(recursion(3));

