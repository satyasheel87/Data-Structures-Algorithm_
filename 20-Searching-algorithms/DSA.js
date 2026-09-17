// Searching Algorithm ,

// Linear search in array
// line by line chalta hai
let linear = [56, 86, 23, 47, 29, 35, 16, 18, 73];
let lTarget = 18;
let lIndex = -1;
for (let i = 0; i < linear.length; i++) {
  console.log(i);
  if (linear[i] === lTarget) {
    lIndex = i;
    break;
  }
}
console.log(lIndex == -1 ? "Not found" : `${lTarget} found at ${lIndex} index`);

// this is binary search
let prompt = require("prompt-sync")();
let arr = [12, 56, 32, 89, 92];
let target = Number(prompt("Enter search element: "));
let index = -1;
let st = 0;
let en = arr.length - 1;

for (let i = 0; i < arr.length; i++) {
  let mid = Math.floor((st + en) / 2);
  console.log(mid);
  if (arr[mid] === target) {
    index = mid;
    break;
  } else if (arr[mid] < target) {
    st = mid + 1;
  } else {
    en = mid - 1;
  }
}
console.log(index == -1 ? "not found" : `${target} found at ${index} index`);
