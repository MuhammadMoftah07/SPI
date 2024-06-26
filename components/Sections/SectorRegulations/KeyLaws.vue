<template>
  <section class="grid items-start grid-cols-1 mt-10 xl:grid-cols-2 gap-7">
    <div class="grid gap-8 xl:ps-4">
      <aside class="flex items-center gap-6" v-for="item in keyLaws">
        <component :is="item.icon" class="w-10 shrink-0" />
        <article class="grid">
          <h5 class="text-sm font-semibold">{{ item.title }}</h5>
          <p class="text-xs 3xl:text-sm">
            {{ item.body }}
          </p>
        </article>
      </aside>
    </div>

    <div class="grid gap-2">
      <h5
        class="py-4 font-medium text-center text-white rounded-t-xl bg-theme-indigo"
      >
        {{ $t(`regulations_tab_key`) }}
      </h5>

      <article class="grid py-6 rounded-b-xl gap-7 bg-theme-aqua2">
        <aside class="flex items-center text-xs font-semibold" v-for="n in 6">
          <IconsCheck class="w-8 h-8 mx-4 shrink-0" />
          {{ $t(`key_takeaway_${n}`) }}
        </aside>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  IconsMoneyInvestment,
  IconsOnlineShop,
  IconsConsumer,
  IconsLaw,
  IconsFranchises,
  IconsRiyal,
} from "#components";
const t = useI18n().t;

const keyLaws = [
  {
    icon: IconsMoneyInvestment,
    title: t("key_laws_foreign_title"),
    body: t("key_laws_foreign_p"),
  },
  {
    icon: IconsOnlineShop,
    title: t("key_laws_ecommerce_title"),
    body: t("key_laws_ecommerce_p"),
  },
  {
    icon: IconsConsumer,
    title: t("key_laws_consumer_title"),
    body: t("key_laws_consumer_p"),
  },
  {
    icon: IconsLaw,
    title: t("key_laws_import_title"),
    body: t("key_laws_import_p"),
  },
  {
    icon: IconsFranchises,
    title: t("key_laws_franchise_title"),
    body: t("key_laws_franchise_p"),
  },
  {
    icon: IconsRiyal,
    title: t("key_laws_saudization_title"),
    body: t("key_laws_saudization_p"),
  },
];
</script>

<style></style>
