var candy = function (ratings) {
  let n = ratings.length;
  let candies = new Array(n).fill(1); // Initialize all children with 1 candy

  // Left to Right
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // Right to Left
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }
  return candies.reduce((sum, num) => sum + num, 0);
};

// Example Usage:
console.log(candy([1, 0, 2])); // Output: 5
console.log(candy([1, 2, 2])); // Output: 4
