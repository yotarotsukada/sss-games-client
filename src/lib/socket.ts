import { Manager } from 'socket.io-client';
import { Constants } from '../constants';

export const socketManager = new Manager(Constants.SERVICE_URL, {
  withCredentials: true,
  transports: ['websocket'],
});
