/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let left = 1;
    let right = 1;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        result[i] = left;
        left *= nums[i];
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }
    return result.map((num, index) => num ? num : 0);
};


var productExceptSelf1 = function (nums) {
    const n = nums.length;
    const answer = new Array(n);
    answer[0] = 1;
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] = answer[i] * rightProduct;
        rightProduct *= nums[i]
    }
    return answer
};


console.time('productExceptSelf');
console.log(productExceptSelf([-1, 1, 1, -3, 3])); // [-9, 3, 3, 1, -1]
console.timeEnd('productExceptSelf');
