<script setup lang="ts">
const props = defineProps<{
  display?: string;
}>();
const emits = defineEmits<{
  (e: 'click'): void;
}>();

const onClick = () => {
  emits('click');
};
</script>

<template>
  <el-button type="primary" @click="onClick">
    {{ props.display }}
  </el-button>
</template>
