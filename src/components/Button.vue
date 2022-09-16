<script setup lang="ts">
const props = defineProps<{
  display: string;
}>();
const emits = defineEmits<{
  (e: 'onClick'): void;
}>();

const onClick = () => {
  emits('onClick');
};
</script>

<template>
  <button
    class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
    @click="onClick"
  >
    {{ props.display }}
  </button>
</template>
