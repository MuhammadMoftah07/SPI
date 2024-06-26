<template>
  <section
    class="flex items-center gap-2 p-5 text-xs font-semibold 3xl:text-sm rounded-2xl bg-theme-aqua2"
  >
    <IconsIdeaLight class="mx-2 lg:mx-8 w-14 h-14 shrink-0" />
    <slot>
      <p class="leading-normal">
        {{ text }}
      </p>
    </slot>
  </section>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "Text",
  },
});
</script>
