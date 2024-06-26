<template>
  <div class="flex items-center gap-2 text-sm font-medium">
    <p>
      {{ text }}
    </p>

    <button
      class="p-2 mx-3 font-medium border-slate-100 btn btn-ghost h-9"
      @click="goTo()"
    >
      {{ useNuxtApp().$i18n.t("login") }}
    </button>
  </div>
</template>

<script setup>
const text = computed(() => {
  return useNuxtApp().$i18n.t("login_to_access");
});

const goTo = () => {
  const path = useNuxtApp().$localePath("/login");
  navigateTo(path);
};
</script>

<style></style>
