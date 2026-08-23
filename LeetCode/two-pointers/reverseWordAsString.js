/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.split(' ').filter(word => word !== '');
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s.join(' ');;
};

console.time('reverseWords');
console.log(reverseWords('  the sky    is    blue  ')); // 'blue is sky the'
console.timeEnd('reverseWords');