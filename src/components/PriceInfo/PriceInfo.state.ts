const usePriceInfoState = (prices: number[]) => {
  const currentPrice: number = prices[prices.length - 1]; 
  const firstPrice: number = prices[0];
  const percentageChange: number =
    ((currentPrice - firstPrice) / firstPrice) * 100; 

  const stringifiedCurrentPrice = currentPrice.toFixed(2);
  const stringifiedPercentage = percentageChange.toFixed(2);

  return {
    stringifiedCurrentPrice,
    stringifiedPercentage,
    percentageChange
  };
};

export default usePriceInfoState;
