<script setup lang="ts">
import { RoomType } from '@/types';
import { computed } from 'vue';
import stc from 'string-to-color';
import fontColorContrast from 'font-color-contrast';
import Text from '@/components/Text.vue';

const props = defineProps<{
  room: RoomType;
}>();
const createdDate = computed(() => {
  const date = new Date(props.room.createdAt);
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    .map((num) => num + '')
    .map((num) => num.padStart(2, '0'))
    .join('/');
});

const style = computed(() => {
  const backgroundColor = stc(props.room.id);
  const color = fontColorContrast(backgroundColor);
  return color === '#ffffff' ? { backgroundColor, color } : { backgroundColor };
});
</script>

<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="header" :style="style">
      <div class="title">
        <Text :level="3">{{ room.name }}</Text>
        <Text :level="5">ID: {{ room.id }}</Text>
      </div>
    </div>
    <div class="date-text">
      <Text :level="5">作成日：{{ createdDate }}</Text>
    </div>
  </el-card>
</template>

<style>
.header {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
}
.date-text {
  /* margin-top: 20px; */
  padding: 24px;
  text-align: right;
}
</style>
