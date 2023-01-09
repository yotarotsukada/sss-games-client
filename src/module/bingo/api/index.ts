import { httpClient } from '@/lib/axios';
import { useMutation, useQuery } from 'vue-query';

const roomsFetcher = async (id: string): Promise<RoomType[]> => {
  const result = await httpClient.get(`/rooms/users/${id}`);
  return result.data;
};

const roomFetcher = async (id: string): Promise<RoomType> => {
  const result = await httpClient.get(`/rooms/${id}`);
  return result.data;
};

const cardFetcher = async (args: CreateCardArgs): Promise<CardType> => {
  const result = await httpClient.post('/card', args);
  return result.data;
};

export const useFetchRooms = (userId: string) => {
  return useQuery(['rooms'], () => roomsFetcher(userId));
};

export const useCreateRoomMutation = () => {
  return useMutation((args: CreateRoomArgs) => httpClient.post('/rooms', args));
};

export const useFetchRoom = (roomId: string) => {
  return useQuery(['room', roomId], () => roomFetcher(roomId));
};

export const useFetchCard = () => {
  return useMutation(['card'], (args: CreateCardArgs) => cardFetcher(args));
};
