<template>
  <aside
    v-if="text != 'false'"
    class="w-full py-3 mt-1 text-xs font-medium text-center 3xl:text-sm text-slate-50 rounded-b-2xl bg-theme-celestial-blue"
    :class="myClass"
  >
    {{ text }}
  </aside>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "Text",
  },
  myClass: {},
});
</script>
