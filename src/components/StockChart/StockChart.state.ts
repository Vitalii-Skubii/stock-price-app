import { ChartProps } from '../../types/types';

// this hook returns options for chart component, how it will be displayed

const useStockChartState = ({ times, prices }: ChartProps) => {

  const timesValues = times.map((time) =>
    new Date(time * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
  );  

  const formatedPrices = (value: number) => {
    return '$' + value.toFixed();
  };

  const options = {
    chart: {
      height: 300,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: 'Stock Price',
        data: prices,  //data to build chart
      },
    ],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    colors: ['#60d4a8'],
    xaxis: {
      categories: timesValues, //labels for xaxis
      tickAmount: 5,
    },
    yaxis: {
      labels: {
        formatter: formatedPrices, //labels for yaxis
      },
    },
  };

  return {
    options,
  };
};

export default useStockChartState;
