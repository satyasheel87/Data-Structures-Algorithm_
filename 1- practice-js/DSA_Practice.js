// Practice

// let prompt = require("prompt-sync")();
// let k = Number(prompt("enter a number: "));


// Trapping rain water 
let height = [4, 2, 0, 3, 2, 5];

let left = new Array(height.length);
let right = new Array(height.length);
let maxLeft = height[0]; //4
let maxRight = height[height.length - 1]; //5

left[0] = maxLeft;
right[right.length - 1] = maxRight;

for (let i = 1; i < height.length; i++) {
  maxLeft = Math.max(height[i], maxLeft);
  left[i] = maxLeft;
}
for (let i = height.length - 2; i >= 0; i--) {
  maxRight = Math.max(height[i], maxRight);
  right[i] = maxRight;
}
console.log(left); // [4, 4, 4, 4, 4, 5];
console.log(right); // [5, 5, 5, 5, 5, 5];

let ans = 0;
for (let i = 0; i < height.length; i++) {
  ans += Math.min(left[i], right[i]) - height[i];
}

console.log(ans);

