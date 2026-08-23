/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) {
        return false;
    }
    const arr = [];
    const dict = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            arr.push(char);
        }
        else {
            if (arr.pop() !== dict[char]) {
                return false;
            }
        }
    }
    return arr.length === 0;
};
