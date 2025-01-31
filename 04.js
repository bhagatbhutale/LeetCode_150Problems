// Q.3:- Remove Duplicates from array
function removeDuplicate(nums) {
  let index = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] != nums[i - 2]) {
      nums[index] = nums[i];
      index++;
    }
  }
  nums.length = index;
  return nums;
}

let nums = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3];

console.log(nums);
console.log(removeDuplicate(nums));
