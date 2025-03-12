import { AppDispatch, RootState } from '../store';
import {
  updateCandles,
  webSocketConnected,
  webSocketDataReceived,
  webSocketDisconnected,
} from './actions';

export const getTradeData = (url: string) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const prevSocket = getState().trades.socket;
    if (prevSocket) {
      prevSocket.onmessage = null;
      prevSocket.onclose = null;
      prevSocket.close();
      dispatch(webSocketDisconnected());
    }

    const socket = new WebSocket(url);

    // Event listener for connection open
    socket.onopen = () => {
      console.log(`WebSocket connection established ${url}`);
      dispatch(webSocketConnected(socket));
    };

    // Event listener for incoming messages
    socket.onmessage = (event) => {
      if (socket.readyState !== WebSocket.OPEN) return;

      const response = JSON.parse(event.data);
      dispatch(webSocketDataReceived(response));
      dispatch(updateCandles(response));
    };

    socket.onclose = () => {
      console.log(`WebSocket connection closed ${url}`);
      dispatch(webSocketDisconnected());
    };

    // Cleanup function to close the socket on component unmount
    return () => {
      socket.onmessage = null;
      socket.onclose = null;
      socket.close();
      dispatch(webSocketDisconnected());
    };
  };
};
