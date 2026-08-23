/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const checkPalindrome = (left, right) => {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    };

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return (
                checkPalindrome(left + 1, right) ||
                checkPalindrome(left, right - 1)
            );
        }

        left++;
        right--;
    }

    return true;
};