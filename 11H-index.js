var hIndex = function (citations) {
  citations.sort((a, b) => b - a); // Step 1: Sort in descending order
  let h = 0; // Initialize H-index

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1; // Increase H-index if condition holds
    } else {
      break; // Stop when condition is not met
    }
  }

  return h;
};

// Example Usage:
console.log(hIndex([3, 0, 6, 1, 5])); // Output: 3
console.log(hIndex([1, 3, 1])); // Output: 1
console.log(hIndex([0, 1, 4, 5, 3])); // Output: 3
