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

let strs = ["dog", "racecar", "car"];

var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";
  strs.sort();
  let first = strs[0];
  let last = strs[strs.length - 1];
  let result = "";

  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      result += first[i];
    } else {
      break;
    }
  }
  return result;
};
console.log(longestCommonPrefix(strs));
