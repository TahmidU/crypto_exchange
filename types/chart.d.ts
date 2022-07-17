export interface ILineChartData {
  id: string;
  color: string;
  data: [
    {
      x: string | number;
      y: string | number;
    }
  ];
}
