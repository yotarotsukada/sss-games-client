import { Manager } from 'socket.io-client';

const { SERVICE_URL } = useConstants();

export const socketManager = new Manager(SERVICE_URL, {
  withCredentials: true,
  transports: ['websocket'],
  autoConnect: false,
});
