import { AppDispatch } from '../store';
import { getDataFailure, getDataRequest, getDataSuccess } from './actions';
import * as api from '../../api';
import { IApiParams, IHistoricalTradesStore } from '../../types/interfaces';

export const getData = <T>(
  url: string,
  key: keyof IHistoricalTradesStore,
  params: IApiParams<T>
) => {
  return async (dispatch: AppDispatch) => {
    dispatch(getDataRequest(key));
    try {
      const response = await api.getData(url, params);
      dispatch(getDataSuccess({ data: response.data, key: key }));
    } catch (error) {
      dispatch(getDataFailure(`Error loading data ${error}`, key));
    }
  };
};
