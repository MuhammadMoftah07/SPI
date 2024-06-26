<template>
  <main class="bg-slate-200">
    <div class="relative z-50 flex items-center justify-center gap-20">
      <img src="@/assets/imgs/black-logo.png" class="h-10 mt-2" alt="" />
      <LayoutHeader class="!w-auto" />
    </div>

    <div>
      <slot />
      <LayoutFooterCopyWrite />
    </div>
  </main>
</template>

<script setup>
const i18n = useI18n();

const setFont = (code) => {
  if (code == "ar") {
    document.documentElement.style.setProperty(
      "--appFont",
      "'Tajawal', sans-serif"
    );
  } else {
    document.documentElement.style.setProperty(
      "--appFont",
      "'Poppins', sans-serif"
    );
  }
};
i18n.onLanguageSwitched = (oldL, newL) => {
  // globalThis.$fetch = $fetch.create({
  //   baseURL: useRuntimeConfig().public.baseURL,
  //   headers: {
  //     Testttttt: newL,
  //   },
  // });
  console.log("Language Switchinggggggg ... ");
  setFont(newL);
};
onBeforeMount(() => {
  setFont(i18n.localeProperties.value.code);
});

const dir = computed(() => {
  return i18n.localeProperties.value.dir;
});

useHead({
  title: "My SPI",
  meta: [{ name: "description", content: "SPI Dashboard app." }],
  bodyAttrs: {
    dir,
  },
});

// import { $fetch } from "ofetch";
globalThis.$fetch = $fetch.create({
  baseURL: useRuntimeConfig().public.baseURL,
  // headers: {},
});
</script>
