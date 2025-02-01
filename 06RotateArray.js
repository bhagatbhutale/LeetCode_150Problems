// Q.6 Rotate array in K Value position

var rotate = function (nums, k) {
  let n = nums.length;
  k = k % n; // Handle cases where k > n

  // Step 1: Reverse the entire array
  reverse(nums, 0, n - 1);
  // Step 2: Reverse the first k elements
  reverse(nums, 0, k - 1);
  // Step 3: Reverse the remaining elements
  reverse(nums, k, n - 1);
};

function reverse(nums, s, e) {
  while (s < e) {
    [nums[s], nums[e]] = [nums[e], nums[s]]; // Swap elements
    s++;
    e--;
  }
}

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotate(nums, k);
console.log(nums);
