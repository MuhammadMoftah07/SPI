<template>
  <section
    class="grid items-start grid-cols-1 col-span-12 gap-6 mt-16 lg:col-span-9 gap-y-8 xl:grid-cols-3"
  >
    <ThemeIconCard2
      :title="$t('regulations_anti_head1')"
      :text="$t('regulations_anti_p1')"
      :icon="IconsSystemSetting"
      textClass="min-h-[150px] xl:min-h-[320px]"
    />

    <ThemeIconCard2
      :title="$t('regulations_anti_head2')"
      :text="$t('regulations_anti_p2')"
      :icon="IconsLaw"
      textClass="min-h-[150px] xl:min-h-[320px]"
      iconClass="text-theme-indigo"
    />

    <ThemeIconCard2
      :title="$t('regulations_anti_head3')"
      :text="$t('regulations_anti_p3')"
      :icon="IconsOldResult"
      textClass="min-h-[150px] xl:min-h-[320px]"
    />
  </section>
</template>

<script setup>
import { IconsOldResult, IconsSystemSetting, IconsLaw } from "#components";
</script>

<style scoped></style>
