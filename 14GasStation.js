var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0,
    totalCost = 0;
  let startIndex = 0,
    fuel = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];

    fuel += gas[i] - cost[i]; // Current station balance

    if (fuel < 0) {
      startIndex = i + 1; // Reset start index
      fuel = 0; // Reset fuel count
    }
  }

  return totalGas < totalCost ? -1 : startIndex;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // Output: 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); // Output: -1
