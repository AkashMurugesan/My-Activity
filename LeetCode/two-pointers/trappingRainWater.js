/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const formula = (leftBlock, rightBlock, currentBlock) => {
    const l = leftBlock.length ? Math.max(...leftBlock) : 0;
    const r = rightBlock.length ? Math.max(...rightBlock) : 0;
    const water = Math.min(l, r) - currentBlock;
    if (water < 0) {
      return 0;
    } else {
      return water;
    }
  };
  let result = 0;
  height.forEach((h, index) => {
    const left = height.slice(0, index);
    const right = height.slice(index + 1);
    result = result + formula(left, right, h);
  });
  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));


// by two pointers
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let result = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        result += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        result += rightMax - height[right];
      }
      right--;
    }
  }

  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
