<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue: string;
}>();
const emits = defineEmits<{
  (e: 'update:modelValue', input: string): void;
}>();
const input = computed({
  get: () => props.modelValue,
  set: (value) => {
    emits('update:modelValue', value);
  },
});
</script>

<template>
  <el-input v-model="input" placeholder="Please input" />
</template>
