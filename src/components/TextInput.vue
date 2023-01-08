<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  password?: boolean;
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
  <Text>{{ label }}<span v-if="required" class="text-red-400">*</span></Text>
  <el-input
    v-model="input"
    :show-password="password"
    :placeholder="placeholder"
  />
</template>
