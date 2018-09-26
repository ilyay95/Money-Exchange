// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
     if (currency<=0){
        return { };
        }
        else if(currency>10000) {
            return {error: "You are rich, my friend! We don't have so much coins for exchange"};
        }
    
        let denomination=[50, 25, 10, 5, 1];
        let coins=['H', 'Q', 'D', 'N',  'P'];
        let sum={};
    
        for(let a=0;a < denomination.length;a++){
            let half = currency /  denomination[a];
            let cash  = Math.floor(half);
            currency -= cash * denomination[a];
         
    
            if (cash != 0) {
                sum[coins[a]] = Math.floor(half);
            }
        }
    return sum;
}
