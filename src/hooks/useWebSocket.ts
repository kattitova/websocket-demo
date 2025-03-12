import { useEffect, useState } from 'react';
import { ITradeData } from '../types';

export const useWebSocket = (url: string): ITradeData | null => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Establishing a WebSocket connection
    const socket = new WebSocket(url);

    // Event listener for connection open
    socket.onopen = () => {
      console.log('WebSocket connection established.');
    };

    // Event listener for incoming messages
    socket.onmessage = (event) => {
      const response = JSON.parse(event.data);
      setData(response);
    };

    // Cleanup function to close the socket on component unmount
    return () => {
      socket.close();
    };
  }, [url]);

  return data;
};
