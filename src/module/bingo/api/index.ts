import { httpClient } from '@/lib/axios';
import { CreateCardArgs, CreateRoomArgs, RoomType } from '@/types';
import { useMutation, useQuery } from 'vue-query';

const roomsFetcher = async (id: string): Promise<RoomType[]> => {
  const result = await httpClient.get(`/rooms/users/${id}`);
  return result.data;
};

const roomFetcher = async (id: string): Promise<RoomType> => {
  const result = await httpClient.get(`/rooms/${id}`);
  return result.data;
};

const cardFetcher = async (data: CreateCardArgs): Promise<string> => {
  const result = await httpClient.post('/card', data);
  return result.data;
};

export const useFetchRooms = (userId: string) => {
  return useQuery(['rooms'], () => roomsFetcher(userId));
};

export const useCreateRoomMutation = () => {
  return useMutation((data: CreateRoomArgs) => httpClient.post('/rooms', data));
};

export const useFetchOneRoom = (roomId: string) => {
  return useQuery(['room', roomId], () => roomFetcher(roomId));
};

export const useCreateCard = () => {
  return useMutation((data: CreateCardArgs) => httpClient.post('/card', data));
};
