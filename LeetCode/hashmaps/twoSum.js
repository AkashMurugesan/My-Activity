/**
 * Hash Map Approach - O(n) time, O(n) space
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  console.time('twoSum - Hash Map');
  
  const map = {};
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log(`Index: ${i}, Num: ${nums[i]}, Complement: ${complement}`);
    if (map[complement] !== undefined) {
      console.timeEnd('twoSum - Hash Map');
      return [map[complement], i];
    }
    
    map[nums[i]] = i;
  }
  
  console.timeEnd('twoSum - Hash Map');
  return [];
};

/**
 * Two Pointer Approach - O(n log n) time (due to sorting), O(1) space
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumTwoPointer = function (nums, target) {
  console.time('twoSum - Two Pointer');
  
  // Create array of [value, originalIndex] and sort by value
  const indexed = nums.map((num, idx) => [num, idx]);
  indexed.sort((a, b) => a[0] - b[0]);
  
  let left = 0;
  let right = indexed.length - 1;
  
  while (left < right) {
    const sum = indexed[left][0] + indexed[right][0];
    
    if (sum === target) {
      console.timeEnd('twoSum - Two Pointer');
      return [indexed[left][1], indexed[right][1]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
  console.timeEnd('twoSum - Two Pointer');
  return [];
};

// Test Hash Map approach
console.log('\n=== Hash Map Method ===');
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]

// Test Two Pointer approach
console.log('\n=== Two Pointer Method ===');
console.log(twoSumTwoPointer([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSumTwoPointer([3, 2, 4], 6)); // [1, 2]
console.log(twoSumTwoPointer([3, 3], 6)); // [0, 1]
