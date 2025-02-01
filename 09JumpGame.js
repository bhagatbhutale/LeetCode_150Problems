var canJump = function (nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false; //return false
    maxReach = Math.max(maxReach, i + nums[i]); // Update maxReach
    if (maxReach >= nums.length - 1) return true; // If we can reach the last index, return true
  }

  return false;
};

// Example usage:
console.log(canJump([4, 1, 5, 3, 2, 7, 9])); // Output: true
console.log(canJump([3, 2, 1, 0, 4])); // Output: false
