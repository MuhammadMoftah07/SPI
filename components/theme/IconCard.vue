<template>
  <aside>
    <h5 class="mb-4 text-xl font-bold text-center capitalize text-theme-indigo">
      {{ title }}
    </h5>
    <div
      class="relative p-6 text-sm font-medium 3xl:text-base bg-theme-aqua2 rounded-2xl"
    >
      <span
        class="absolute left-0 right-0 grid w-10 h-10 mx-auto bg-white rounded-full place-content-center -top-5"
      >
        <Component :is="icon" :class="iconClass" />
      </span>
      {{ text }}
    </div>
  </aside>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  text: String,
  icon: String,
  iconClass: {
    default: "w-7 h-7",
  },
});
</script>

<style></style>
