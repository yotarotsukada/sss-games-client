import { httpClient } from '@/lib/axios';
import { useMutation, useQuery } from 'vue-query';

export const useFetchRoomsByUserId = (userId: string) => {
  const roomsFetcher = async (id: string) => {
    const result = await httpClient.get(`/rooms/users/${id}`);
    return result.data as RoomType[];
  };
  return useQuery(['rooms'], () => roomsFetcher(userId));
};

export const useFetchOneRoom = (roomId: string) => {
  const roomFetcher = async (id: string) => {
    const result = await httpClient.get(`/rooms/${id}`);
    return result.data as RoomType;
  };
  return useQuery(['room', roomId], () => roomFetcher(roomId));
};

export const useCreateRoom = () => {
  return useMutation((args: CreateRoomArgs) => httpClient.post('/rooms', args));
};
