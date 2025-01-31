// Q.3:- Remove Duplicates from array
function removeDuplicate(nums) {
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  nums.length = index;
  return nums;
}

let nums = [1, 2, 2, 3, 4, 5, 6, , 7, 7, 8];

console.log(nums);
console.log(removeDuplicate(nums));
