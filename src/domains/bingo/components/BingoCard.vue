<script setup lang="ts">
const props = defineProps<{
  card: CardType;
}>();
</script>

<template>
  <div class="flex gap-2">
    <div
      v-for="(row, key) in props.card"
      :key="key"
      class="flex flex-col gap-2"
    >
      <div
        v-for="(cell, key) in row"
        :key="key"
        class="w-12 rounded-sm p-3 outline"
      >
        <p class="text-center">{{ cell }}</p>
      </div>
    </div>
  </div>
</template>
