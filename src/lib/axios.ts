import axios from 'axios';
import { Constants } from '../constants';

export const httpClient = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: Constants.SERVICE_URL,
});
