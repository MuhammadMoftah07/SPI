<template>
  <aside>
    <h5
      class="relative py-3 text-sm font-medium text-center text-white capitalize rounded-t-xl bg-theme-indigo"
      :class="titleClass"
    >
      {{ title }}
      <span
        v-if="icon"
        class="absolute left-0 right-0 grid w-12 h-12 p-8 text-black mx-auto bg-white rounded-full place-content-center -top-[53px]"
      >
        <Component :is="icon" class="w-9 h-9" :class="iconClass" />
      </span>
    </h5>
    <slot>
      <div
        :class="textClass"
        class="p-3 text-sm font-medium border-b-8 border-theme-aqua"
      >
        {{ text }}
      </div>
    </slot>
  </aside>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  text: String,
  icon: String,
  titleClass: String,
  iconClass: String,
  textClass: String,
});
</script>

<style></style>
