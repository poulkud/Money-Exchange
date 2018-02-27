// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let H = 0;
    let Q = 0;
    let D = 0;
    let N = 0;
    let P = 0;
    const halfDollars = 50;
    const quarters = 25;
    const dimes = 10;
    const nickels = 5;
    const pennies = 1;
    if(currency >= 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }  
    else {
        if(currency % halfDollars != 0 || currency % halfDollars == 0 && currency > 0){
            H = Math.floor(currency / halfDollars);
            currency = currency % halfDollars;
            if(currency % quarters != 0 || currency % quarters == 0){
                Q = Math.floor(currency / quarters);
                currency = currency % quarters;
                if(currency % dimes != 0 || currency % dimes == 0){
                    D = Math.floor(currency / dimes);
                    currency = currency % dimes;
                    if(currency % nickels != 0 || currency % nickels == 0){
                        N = Math.floor(currency / nickels);
                        currency = currency % nickels;
                        P = currency;
                }
            }
        }
    }
    let mainResult = {};
    let result = {"H":H,"Q":Q,"D":D, "N":N, "P":P};
    for (key in result){
        if(result[key] != 0){
            mainResult[key] = result[key];
        }
    }
    return mainResult;
}
    
}

