export const WS_URL = (symbol: string) => {
  const URL = `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@trade`;
  return URL;
};

export const symbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT'];

export const API_URL = 'https://api.binance.com/api/v3';
export const GET_PRICE_URL = '/ticker/24hr';
export const GET_CANDLES_HISTORY = '/klines';
