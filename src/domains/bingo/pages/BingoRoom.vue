<script setup lang="ts">
const route = useRoute();
const roomId = route.params.id as string;

const { status: fetchStatus, data: room } = useFetchRoom(roomId);
const {
  status: cardFetchStatus,
  data: card,
  mutate: fetchCard,
} = useFetchCard();

const password = ref('');

const join = () => {
  const needsPassword = !!room.value?.password;
  if (needsPassword && password.value === '') {
    return alert('Need to enter password');
  }

  const args: CreateCardArgs = {
    password: needsPassword ? password.value : undefined,
  };
  fetchCard(args);
};
</script>

<template>
  <h2 class="text-lg underline">Bingo Room</h2>
  <p>room info</p>
  <div v-if="fetchStatus === 'loading'">Loading...</div>
  <div v-else-if="room">
    <ul>
      <li>ID: {{ room.id }}</li>
      <li>Room Name: {{ room.name }}</li>
      <li>Owner: {{ room.ownerId }}</li>
    </ul>
  </div>
  <div v-if="card">
    <BingoCard :card="card" />
  </div>
  <div v-else>
    <Button display="Join" @click="join" />
    <TextInput v-if="room?.password" v-model="password" />
    <p v-if="cardFetchStatus === 'error'">Wrong password. Try again.</p>
  </div>
</template>
