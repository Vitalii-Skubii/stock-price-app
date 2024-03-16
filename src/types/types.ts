export interface ChartProps {
  times: number[];
  prices: number[];
}

export interface DataProps {
  companyName:string;
  companyData: ChartProps
  }
  
 