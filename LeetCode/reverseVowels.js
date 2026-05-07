/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const sArr = s.split('');
    let left = 0;
    let right = sArr.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(sArr[left])) {
            left++;
        }
        while (left < right && !vowels.has(sArr[right])) {
            right--;
        }
        if (left < right) {
            const temp = sArr[left];
            sArr[left] = sArr[right];
            sArr[right] = temp;
            left++;
            right--;
        }
    }
    return sArr.join('');
};
console.time('reverseVowels');
console.log(reverseVowels('leetcode')); // 'holle'
console.timeEnd('reverseVowels');