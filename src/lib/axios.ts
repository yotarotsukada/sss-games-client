import axios from 'axios';

const { SERVICE_URL } = useConstants();

export const httpClient = axios.create({
  baseURL: SERVICE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
