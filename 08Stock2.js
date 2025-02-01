function sell2Maxprofit(arr) {
  let profit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      profit += arr[i] - arr[i - 1];
    }
  }
  return profit;
}

let array = [3, 7, 1, 4, 2, 5, 11, 6, 2];
console.log(sell2Maxprofit(array));
