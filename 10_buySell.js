var maxProfit = function(prices) {
    let minPrice = Math.min(...prices);
    const buyday=prices.indexOf(minPrice)
    let maxPrice=Math.max(...prices)
    let sellDay=prices.indexOf(maxPrice)
    console.log(maxPrice,minPrice)

    if((prices.length==2 && prices[0]===prices[1])|| minPrice===maxPrice){
        return 0
    }

    else if(sellDay>buyday){
        return profit=maxPrice-minPrice
        

    }
   
    else if(buyday===prices.length-1){
        console.log(sellDay)
        if(sellDay===0){
            return 0
        }
        minPrice=Math.min(...prices.slice(0,buyday));
            return  maxPrice-minPrice





    }
    
    else if(sellDay<buyday){
        maxPrice=Math.max(...prices.filter(price=>price!=maxPrice))
 
         return  maxPrice-minPrice
     }
    
};
console.log(maxProfit([3,2,6,5,0,3]))