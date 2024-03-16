import { ChartProps } from '../../types/types';

//this hook returns currentData from mockedData, can be modified for another data from api

const useCardState = (companyData: ChartProps) => {
  const currentDate = new Date(
    companyData.times[companyData.times.length - 1] * 1000
  ).toLocaleDateString(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return {
    currentDate,
  };
};

export default useCardState;
