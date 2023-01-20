<script setup lang="ts">
import { match } from 'ts-pattern';

const props = withDefaults(
  defineProps<{
    level?: number;
    bold?: boolean;
  }>(),
  {
    level: 4,
  }
);
const fontStyle = computed(() =>
  match(props.level)
    .with(1, () => ['text-3xl', 'font-bold'])
    .with(2, () => ['text-2xl', 'font-bold'])
    .with(3, () => ['text-lg', 'font-bold'])
    .with(4, () => ['text-base'])
    .with(5, () => ['text-sm'])
    .otherwise(() => {
      throw new Error('Invalid props: text level must be inside 1-5');
    })
);
</script>

<template>
  <p :class="fontStyle"><slot /></p>
</template>
