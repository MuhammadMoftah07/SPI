<template>
  <h5
    class="flex gap-3 ps-4 items-center w-full h-12 overflow-hidden text-sm font-semibold x`x`capitalize rounded-b-2xl bg-theme-aqua text-slate-800"
  >
    <IconsBackArrow
      v-if="backButton"
      @click="$emit('back')"
      class="w-6 h-6 cursor-pointer hover:opacity-80 rtl:rotate-180"
    />
    {{ title }}
  </h5>
</template>

<script setup>
const props = defineProps({
  title: {},
  backButton: { type: Boolean },
});
</script>
