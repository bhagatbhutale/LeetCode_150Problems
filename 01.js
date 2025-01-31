let arr1 = [1, 2, 3, 0, 0, 0];
let arr2 = [2, 5, 6];

// Find the actual length of arr1 without trailing zeros
let m = 3; // Number of non-zero elements in arr1
let n = arr2.length; // Number of elements in arr2

// Merge arr2 into arr1 starting from the end
let i = m - 1;
let j = n - 1;
let k = m + n - 1;

while (j >= 0) {
  if (i >= 0 && arr1[i] > arr2[j]) {
    arr1[k] = arr1[i];
    i--;
  } else {
    arr1[k] = arr2[j];
    j--;
  }
  k--;
}

console.log(arr1); // Output: [1, 2, 2, 3, 5, 6]
