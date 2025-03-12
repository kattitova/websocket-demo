import axios from 'axios';
import { IApiParams } from '../types';

export const api = axios.create({
  baseURL: 'https://api.binance.com/api/v3',
});

export const getData = async <T>(url: string, params: IApiParams<T>) =>
  await api.get(url, params);
