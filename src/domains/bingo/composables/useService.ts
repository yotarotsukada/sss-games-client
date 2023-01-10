import { httpClient } from '@/lib/axios';
import { useMutation } from 'vue-query';

export const useFetchOneCard = () => {
  const cardFetcher = async (args: CreateCardArgs) => {
    const result = await httpClient.post('/card', args);
    return result.data as CardType;
  };
  return useMutation(['card'], (args: CreateCardArgs) => cardFetcher(args));
};
