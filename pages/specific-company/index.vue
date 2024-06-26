<template>
  <section>
    <ThemeTitle :title="$t('specific_company')" />

    <ThemeCommingSoon class="h-[calc(100vh_-160px)]" />
  </section>
</template>

<script setup>
definePageMeta({
  middleware: "authenticated",
});
</script>
