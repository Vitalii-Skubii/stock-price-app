import React from 'react';
import Chart from 'react-apexcharts';
import { ChartProps } from '../../types/types';
import useStockChartState from './StockChart.state';

export const StockChart: React.FC<ChartProps> = ({ times, prices }) => {
  const {options}=useStockChartState({times, prices})
  
  return (
    <Chart
      options={options as ApexCharts.ApexOptions}
      series={options.series}
      type="area"
      height={300}
    />
  );
};
