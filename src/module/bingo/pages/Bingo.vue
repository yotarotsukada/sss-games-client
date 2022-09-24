<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/Button.vue';
import TextInput from '@/components/TextInput.vue';
import { Constants } from '@/constants';
import { CreateRoomArgs } from '@/types';
import { useFetchRooms, useCreateRoomMutation } from '../api';

const {
  isLoading: isRoomsLoading,
  isError: isRoomsError,
  data: rooms,
  refetch: { value: refetch },
} = useFetchRooms(Constants.CURRENT_USER_ID);
const {
  isLoading: isCreateRoomLoading,
  isIdle: isCreateRoomIdle,
  isSuccess: isCreateRoomSuccess,
  mutate: create,
} = useCreateRoomMutation();

const roomName = ref('');
const roomPassword = ref('');

const createRoom = async () => {
  const args: CreateRoomArgs = {
    ownerId: Constants.CURRENT_USER_ID,
    name: roomName.value.trim() === '' ? 'no-name' : roomName.value.trim(),
    password:
      roomPassword.value.trim() === '' ? undefined : roomPassword.value.trim(),
  };
  create(args, {
    onSuccess: () => refetch({ queryKey: ['rooms'] }),
  });
  roomName.value = '';
  roomPassword.value = '';
};
</script>

<template>
  <h2 class="text-lg underline">Bingo</h2>
  <h3>My Rooms - {{ Constants.CURRENT_USER_ID }}</h3>
  <div v-if="isRoomsLoading">Loading...</div>
  <div v-else-if="isRoomsError">Error occured.</div>
  <div v-else-if="rooms">
    <ul>
      <li v-for="room in rooms" class="text-blue-500 underline">
        <RouterLink :to="{ path: `bingo/${room.id}` }">
          #{{ room.id }} {{ room.name }} {{ room.createdAt }}
        </RouterLink>
      </li>
    </ul>
  </div>
  <Button
    v-if="isCreateRoomIdle || isCreateRoomSuccess"
    display="Create Room"
    @click="createRoom"
  />
  <Button v-if="isCreateRoomLoading" display="Create Room..." />
  <h3>Room Name (Required)</h3>
  <TextInput v-model="roomName" />
  <h3>Room Password (Optional)</h3>
  <TextInput v-model="roomPassword" />
</template>
