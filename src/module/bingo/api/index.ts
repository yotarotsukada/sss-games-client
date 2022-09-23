import { useMutation, useQuery } from 'vue-query';
import { httpClient } from '../../../lib/axios';
import { CreateRoomArgs, RoomType } from '../../../types';

const roomsFetcher = async (id: string): Promise<RoomType[]> => {
  const result = await httpClient.get(`/rooms/users/${id}`);
  return result.data;
};

export const useFetchRooms = (userId: string) => {
  return useQuery(['rooms'], () => roomsFetcher(userId));
};

export const useCreateRoomMutation = () => {
  return useMutation((data: CreateRoomArgs) => httpClient.post('/rooms', data));
};
