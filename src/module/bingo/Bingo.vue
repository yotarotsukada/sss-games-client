<script setup lang="ts">
import { ref } from 'vue';
import Button from '../../components/Button.vue';
import TextInput from '../../components/TextInput.vue';
import { Constants } from '../../constants';
import { httpClient } from '../../lib/axios';
import { useFetchRooms } from './api';

const { isLoading, isError, data } = useFetchRooms(Constants.CURRENT_USER_ID);

const roomName = ref('');
const roomPassword = ref('');

const send = async () => {
  const result = await httpClient.post('/rooms', {
    ownerId: Constants.CURRENT_USER_ID,
    name: roomName.value.trim() === '' ? 'no-name' : roomName.value.trim(),
    password:
      roomPassword.value.trim() === '' ? undefined : roomPassword.value.trim(),
  });
  roomName.value = '';
  roomPassword.value = '';
  console.log('created:', result.data, data.value);
};
</script>

<template>
  <h2 class="text-lg underline">Bingo</h2>
  <h3>My Rooms - {{ Constants.CURRENT_USER_ID }}</h3>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="isError">Error occured.</div>
  <div v-else-if="data">
    <ul>
      <li v-for="item in data" class="text-blue-500 underline">
        <RouterLink :to="{ path: `bingo/${item.id}` }">
          #{{ item.id }} {{ item.name }} {{ item.createdAt }}
        </RouterLink>
      </li>
    </ul>
  </div>
  <Button display="Create Room" @on-click="send" />
  <h3>Room Name (Required)</h3>
  <TextInput v-model="roomName" />
  <h3>Room Password (Optional)</h3>
  <TextInput v-model="roomPassword" />
</template>
