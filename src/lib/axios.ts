import axios from 'axios';
import { Constants } from '../constants';

export const httpClient = axios.create({
  baseURL: Constants.SERVICE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
