import { IApiChartParams, IApiParams, IApiPricesParams } from '../types';

export const candlesParams = (
  symbol: string,
  interval: string,
  startTime: number,
  endTime: number
): IApiParams<IApiChartParams> => ({
  params: {
    symbol: symbol,
    interval: interval,
    limit: 100,
    startTime: startTime,
    endTime: endTime,
  },
});

export const prisesParams = (
  symbols: string[]
): IApiParams<IApiPricesParams> => ({
  params: {
    symbols: JSON.stringify(symbols),
  },
});
