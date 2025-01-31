function removeElement(nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
}

let nums = [1, 2, 3, 2, 2, 4, 5];
let val = 2;
console.log(removeElement(nums, val));
