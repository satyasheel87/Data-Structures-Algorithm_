// Practice

// let prompt = require("prompt-sync")();
// let k = Number(prompt("enter a number: "));

// Trapping rain water - problem solution
// let height = [4, 2, 0, 3, 2, 5]

// let left = new Array(height.length)
// let right = new Array(height.length)

// let maxLeft = height[0]
// let maxRight = height[height.length - 1]

// for (let i = 0; i < height.length; i++) {
//   maxLeft = Math.max(maxLeft, height[i])
//   left[i] = maxLeft
// }

// for (let i = height.length - 1; i >= 0; i--) {
//   maxRight = Math.max(maxRight, height[i])
//   right[i] = maxRight
// }

// let ans = 0;
// for (let i = 0; i < height.length; i++) {
//   let minimum = Math.min(left[i], right[i])
//   ans += minimum - height[i]
// }
// console.log(ans)

let nums = [0, 1, 0, 3, 12];
const moveZeros = (nums) => {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }
  while (j < nums.length) {
    nums[j] = 0;
    j++;
  }
  return nums;
};
console.log(moveZeros(nums));
