/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let first = Infinity;
    let second = Infinity;
    for (let num of nums) {
      if (num <= first) {
        first = num; // Update the smallest number
      } else if (num <= second) {
        second = num; // Update the second smallest number
      } else {
        return true; // Found a number greater than both
      }
    }
    return false;
  };

console.log(increasingTriplet([1, 2, 3, 4, 5])); // true
increasingTriplet([1, 2, 3, 4, 5]); // true
increasingTriplet([5, 4, 3, 2, 1]); // false
increasingTriplet([2, 1, 5, 0, 4, 6]); // true
