<template>
  <main id="main">
    <section class="grid grid-cols-12">
      <LayoutSidebar class="col-span-3 px-3 xl:col-span-2" />

      <div
        class="relative w-full h-screen col-span-9 overflow-auto px-7 xl:col-span-10"
      >
        <LayoutHeader class="mb-7" />
        <slot />
      </div>
    </section>
  </main>
</template>

<script setup>
  const i18n = useI18n();
  // const nuxtApp = useNuxtApp()

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
    globalThis.$fetch = $fetch.create({
      baseURL: useRuntimeConfig().public.baseURL,
      headers: {
        language: newL,
      },
    });
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
