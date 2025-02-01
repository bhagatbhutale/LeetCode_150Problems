// Q7. Best Time To Buy and Sell a Stock

var maxProfit = function (prices) {
  let mini = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    let cost = prices[i] - mini;
    maxProfit = Math.max(maxProfit, cost);
    mini = Math.min(mini, prices[i]);
  }

  return maxProfit;
};
