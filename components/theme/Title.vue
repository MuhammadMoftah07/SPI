<template>
  <section
    class="flex items-center gap-2 text-2xl font-semibold capitalize text-theme-indigo"
  >
    <IconsBarChart v-if="!noIcon" class="w-5 h-5" />

    <h2>{{ title }}</h2>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    default: "Title here",
  },
  noIcon: { type: Boolean },
});
</script>
