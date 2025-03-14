import { CandlestickSeries, createChart, LineSeries } from 'lightweight-charts';
import { useEffect, useRef, useState } from 'react';
import { AppDispatch } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../store/historicalTrades/thunks';
import { IApiChartParams, ITradeCandle } from '../../types';
import { GET_CANDLES_HISTORY } from '../../constants';
import { candlesParams } from '../../api/params';
import {
  selectCandles,
  selectSelectedSymbol,
} from '../../store/historicalTrades/selectors';
import {
  candlesChartParams,
  chartOptions,
  getTimeRange,
  ICandlesChartPeriod,
  lineChartParams,
} from '../../utils';
import { useLocation } from 'react-router';
import { selectCandlesNow } from '../../store/trades/selectors';

interface IProps {
  period: ICandlesChartPeriod;
  interval: string;
}

export const CandlesChart: React.FC<IProps> = ({ period, interval }) => {
  const dispatch: AppDispatch = useDispatch();
  const candlesDataHistorical = useSelector(selectCandles);
  const candlesDataNow: ITradeCandle[] = useSelector(selectCandlesNow);
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);
  const location = useLocation();
  const candlesData =
    location.pathname === '/' ? candlesDataNow : candlesDataHistorical;

  useEffect(() => {
    if (chartRef.current) setWidth(chartRef.current.offsetWidth);
  }, []);

  const symbol = useSelector(selectSelectedSymbol);

  const { startTime, endTime } = getTimeRange(period);

  useEffect(() => {
    dispatch(
      getData<IApiChartParams>(
        GET_CANDLES_HISTORY,
        'candles',
        candlesParams(symbol, interval, startTime, endTime)
      )
    );
  }, [symbol, period, interval]);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = createChart(chartRef.current, chartOptions(width));
    const candlestickSeries = chart.addSeries(
      CandlestickSeries,
      candlesChartParams
    );

    candlestickSeries.setData(candlesData);
    chart.timeScale().fitContent();

    const averagePrices = candlesData.map((candle) => ({
      time: candle.time,
      value: (candle.high + candle.low + candle.close + candle.open) / 4,
    }));

    // Add the line series for the average price
    const lineSeries = chart.addSeries(LineSeries, lineChartParams);

    lineSeries.setData(averagePrices);

    return () => chart.remove();
  }, [candlesData]);

  return <div ref={chartRef} style={{ width: '100%' }} />;
};
