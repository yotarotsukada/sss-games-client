<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/Button.vue';
import TextInput from '@/components/TextInput.vue';
import Text from '@/components/Text.vue';
import RoomCard from '@/module/room/RoomCard.vue';
import { Constants } from '@/constants';
import { CreateRoomArgs } from '@/types';
import { useFetchRooms, useCreateRoomMutation } from '../api';
import { useQueryClient } from 'vue-query';

const queryClient = useQueryClient();
const { status: fetchStatus, data: rooms } = useFetchRooms(
  Constants.CURRENT_USER_ID
);
const { status: createStatus, mutate: create } = useCreateRoomMutation();

const roomName = ref('');
const roomPassword = ref('');

const createRoom = async () => {
  const name = roomName.value.trim();
  if (name === '') {
    return alert('You need to enter room name!');
  }

  const args: CreateRoomArgs = {
    ownerId: Constants.CURRENT_USER_ID,
    name,
    password:
      roomPassword.value.trim() === '' ? undefined : roomPassword.value.trim(),
  };
  create(args, {
    onSuccess: () => queryClient.fetchQuery(['rooms']),
  });
  roomName.value = '';
  roomPassword.value = '';
};
</script>

<template>
  <div class="screen">
    <Text :level="2">ビンゴゲーム</Text>
    <div class="content">
      <Text :level="3">ルーム一覧</Text>
      <span>作成者 - {{ Constants.CURRENT_USER_ID }}</span>
      <div v-if="fetchStatus === 'loading'">Loading...</div>
      <div v-else-if="fetchStatus === 'error'">Error occurred.</div>
      <div v-else-if="rooms">
        <el-row :gutter="24">
          <el-col
            v-for="room in rooms"
            :key="room.id"
            :xs="24"
            :sm="12"
            :md="6"
            class="room-card"
          >
            <RouterLink :to="{ path: `bingo/${room.id}` }">
              <RoomCard :room="room" />
            </RouterLink>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="content">
      <Text :level="3">新規ルーム作成</Text>
      <div class="form">
        <TextInput v-model="roomName" label="ルーム名" :required="true" />
        <TextInput v-model="roomPassword" password label="パスワード" />
      </div>
      <Button
        v-if="createStatus === 'idle' || createStatus === 'success'"
        display="Create Room"
        @click="createRoom"
      />
      <Button v-if="createStatus === 'loading'" display="Creating..." />
    </div>
  </div>
</template>

<style>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.screen {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.el-col {
  margin-bottom: 24px;
}
.form {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
