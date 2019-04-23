/**
 * @description
 * @param {@} num 
 */

function dec2bin(num) {
    var res = '';
    var i = 31;
    if (0 > num) {
        res += '1';
        i = 30;
    }

    for (; i >= 0; i--) {
        var tmp = num & (1 << i);

        if (0 == tmp) {
            res += '0';
        } else {
            res += '1';
        }

        if (0 == i % 4) res += ' ';
    }
    return res;
}

/**
 * @description
 * @param {*} num 
 */
function dec2bin(num) {
    var res = '';
    var i = 0;
    var v;
    while ((v = 1 << i++) <= num) { //
        if (0 < (num & v)) { // 大于0表示对应的二进制位值是1, 用 == 无效
            res = 1 + res;
        } else {
            res = 0 + res;
        }

        0 == i % 4 ? res = ' ' + res : true; // 空格分隔符
        console.log(i, v, 0 < (num & v), res);
    }

    return res;
}

console.log(dec2bin(65)); // 0100 0001
// console.log(dec2bin(-65)); // 1100 0001


// 1 依次和 1 做与运算，判断那个bit是 1 / 0。
// 2 结果不是0就是1
// 3 把结果以字符形式拼接为和对应二进制值相同的字符串内容