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

// let myMap = new Map();

// myMap.set(9, 0);
// myMap.set(5, 1);
// myMap.set(6, 2);
// myMap.set(4, 3);

// myMap.set(9, 5);

// console.log(myMap);

let nums = [2, 7, 11, 15],
  target = 9;

var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {

    let required = target - nums[i];

    if (map.has(required)) {
      return [map.get(required), i];
    }
    
    map.set(nums[i], i);
  }
};

console.log(twoSum(nums, target));
