// shorting algorith.

// Bubble short
// selection short
// insertion short

// pattern programming nested looping

let nums = [1, 2, 3, 4];

var decompressRLElist = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i += 2) {
    let freq = nums[i]; //1  //3
    let val = nums[i + 1]; //2  //4
    for (let j = 0; j < freq; j++) {
      ans.push(val);
    }
  }
  return ans;
};
console.log(decompressRLElist(nums));
