/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  
    var buy =[], sell=[]
    
    buy[0] = -prices[0]-fee
    sell[0] = 0
    
    for (let i=1;i<prices.length;i++){
        
        buy[i] = Math.max(buy[i-1], sell[i-1]-prices[i]-fee)
        sell[i] = Math.max(sell[i-1],buy[i-1]+prices[i])
                
    }
    
    console.log(sell[prices.length -1])
    return (sell[prices.length -1])
    
};

maxProfit( [1, 3, 2, 8, 4, 9],2)