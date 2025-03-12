import { ColorType } from 'lightweight-charts';

export const chartOptions = (width: number) => ({
  width: width,
  height: 400,
  timeScale: {
    timeVisible: true,
    secondsVisible: false,
  },
  layout: {
    background: { type: ColorType.Solid, color: '#1f1e24' },
    textColor: '#FFFFF0',
  },
  grid: {
    vertLines: { color: '#444' },
    horzLines: { color: '#444' },
  },
});

export const candlesChartParams = {
  upColor: '#24b249',
  downColor: '#f94f38',
  borderVisible: false,
  wickUpColor: '#24b249',
  wickDownColor: '#f94f38',
};

export const lineChartParams = {
  color: '#fff635',
  lineWidth: 1 as const,
};
