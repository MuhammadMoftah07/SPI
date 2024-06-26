<template>
  <div class="grid items-start grid-cols-1 gap-8 mt-16 gap-y-16 xl:grid-cols-3">
    <ThemeIconCard2
      :title="$t('regulations_ecommerce_title1')"
      :text="$t('regulations_ecommerce_p1')"
      :icon="Icons2Cupes"
      iconClass="!h-10 !w-10"
      textClass="min-h-[130px]"
    />

    <ThemeIconCard2
      :title="$t('regulations_ecommerce_title2')"
      :text="$t('regulations_ecommerce_p2')"
      :icon="IconsGlobalAdver"
      iconClass="!h-12 !w-12"
      textClass="min-h-[130px]"
    />

    <ThemeIconCard2
      :title="$t('regulations_ecommerce_title3')"
      :text="$t('regulations_ecommerce_p3')"
      :icon="IconsDataProtection"
      iconClass="!h-10 !w-10"
      textClass="min-h-[130px]"
    />

    <ThemeIconCard2
      :title="$t('regulations_ecommerce_title4')"
      :text="$t('regulations_ecommerce_p4')"
      :icon="IconsConsumer"
      iconClass="!h-10 !w-10 text-theme-indigo"
      textClass="min-h-[130px]"
    />

    <ThemeIconCard2
      :title="$t('regulations_ecommerce_title5')"
      :text="$t('regulations_ecommerce_p5')"
      :icon="IconsTruck"
      iconClass="!h-10 !w-10"
      textClass="min-h-[130px]"
    />

    <ThemeIconCard2
      :title="$t('regulations_ecommerce_title6')"
      :text="$t('regulations_ecommerce_p6')"
      :icon="IconsBan"
      iconClass="!h-10 !w-10"
      textClass="min-h-[130px]"
    />

    <ChartsFooter
      class="xl:col-span-3 -mt-9"
      :text="$t('regulations_ecommerce_lower_p')"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  Icons2Cupes,
  IconsGlobalAdver,
  IconsDataProtection,
  IconsConsumer,
  IconsTruck,
  IconsBan,
} from "#components";
</script>

<style scoped></style>
