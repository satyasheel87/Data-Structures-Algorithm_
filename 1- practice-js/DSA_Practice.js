// Practice

// let prompt = require("prompt-sync")();
// let k = Number(prompt("enter a number: "));
//
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

// let wealth = 0;
// for (let i = 0; i < height.length; i++) {
//   let minimum = Math.min(left[i], right[i])
//   wealth += minimum - height[i]
// }
// console.log(wealth)

// let myMap = new Map();

// myMap.set(9, 0);
// myMap.set(5, 1);
// myMap.set(6, 2);
// myMap.set(4, 3);

// myMap.set(9, 5);

// console.log(myMap);

let nums1 = [1, 2, 3, 3],
  nums2 = [1, 1, 2, 2];

var findDifference = function (nums1, nums2) {
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i]) && !arr1.includes(nums1[i])) {
      arr1.push(nums1[i]);
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i]) && !arr2.includes(nums2[i])) {
      arr2.push(nums2[i]);
    } else {
      arr2.push([]);
    }
  }

  return [arr1, arr2];
};

console.log(findDifference(nums1, nums2));
