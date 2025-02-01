var jump = function (nums) {
  let curReach = 0;
  let curMax = 0;
  let jumps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (i + nums[i] > curMax) {
      curMax = i + nums[i];
    }
    if (i == curReach) {
      jumps++;
      curReach = curMax;
    }
  }
  return jumps;
};

let array = [2, 3, 1, 1, 4];
let result = jump(array);
console.log(result);
