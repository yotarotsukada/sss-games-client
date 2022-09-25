<script setup lang="ts">
import { CardType } from '@/types';

const props = defineProps<{
  card: CardType;
}>();
</script>

<template>
  <div class="flex gap-2">
    <div v-for="row in props.card" class="flex flex-col gap-2">
      <div v-for="cell in row" class="w-12 rounded-sm p-3 outline">
        <p class="text-center">{{ cell }}</p>
      </div>
    </div>
  </div>
</template>
