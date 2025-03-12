import { Time } from 'lightweight-charts';
import { IApiChartData } from '../types';
import moment from 'moment';

export const parseChartData = (data: Array<number>[]): IApiChartData[] => {
  return data.map((candle) => ({
    time: (Number(candle[0]) / 1000) as Time,
    open: Number(candle[1]),
    high: Number(candle[2]),
    low: Number(candle[3]),
    close: Number(candle[4]),
    volume: Number(candle[5]),
    closeTime: Number(candle[6]),
    quoteAssetVolume: candle[7],
    numberOfTrades: Number(candle[8]),
    takerBuyBaseVolume: Number(candle[9]),
    takerBuyQuoteVolume: Number(candle[10]),
  }));
};

export type ICandlesChartPeriod = '1d' | '1w' | '1m' | '3m' | '6m';

export const getTimeRange = (period: ICandlesChartPeriod) => {
  const now = moment().utc().startOf('hour');
  let from;

  switch (period) {
    case '1d':
      from = now.clone().subtract(1, 'day');
      break;
    case '1w':
      from = now.clone().subtract(1, 'week');
      break;
    case '1m':
      from = now.clone().subtract(1, 'month');
      break;
    case '3m':
      from = now.clone().subtract(3, 'months');
      break;
    case '6m':
      from = now.clone().subtract(6, 'months');
      break;
    default:
      throw new Error('Unsupported period');
  }

  return {
    startTime: from.unix() * 1000,
    endTime: now.unix() * 1000,
  };
};
