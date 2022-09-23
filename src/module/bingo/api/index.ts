import { useQuery } from 'vue-query';
import { httpClient } from '../../../lib/axios';
import { CreateRoomDTO, RoomType } from '../../../types';
import { useMutation } from 'vue-query';

const fetcher = async (id: string): Promise<RoomType[]> => {
  const result = await httpClient.get(`/rooms/users/${id}`);
  console.log(result.data);
  return result.data;
};

export const useFetchRooms = (userId: string) => {
  return useQuery('rooms', () => fetcher(userId));
};

export const useCreateRoomMutation = () => {
  return useMutation((data) => httpClient.post('/rooms', data));
};
