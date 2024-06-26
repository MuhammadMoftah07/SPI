<template>
  <section class="h-full">
    <ThemeTitle :title="$t('market_size')" />
    <ThemeTabs
      class="my-6"
      :tabs="[
        $t('market_size'),
        $t('turnover_cost_profitability'),
        $t('companies_employees_salaries'),
      ]"
      :activeTab="activeTab"
      @tabChosen="(e) => (activeTab = e)"
    />
    <ThemeLoading v-if="useChartsData().loading" />
    <section class="charts-container" v-else>
      <SectionsMarketSizeMS v-if="activeTab == $t('market_size')" />
      <SectionsMarketSizeTurnover
        v-if="activeTab == $t('turnover_cost_profitability')"
      />

      <SectionsMarketSizeCompanies
        v-if="activeTab == $t('companies_employees_salaries')"
      />
    </section>
    <ThemeLowerIdea class="mt-7" :text="activeText" />
  </section>
</template>

<script setup>
const t = useI18n().t;
const loading = ref(false);
const activeTab = ref(t("market_size"));

const activeText = computed(() => {
  if (activeTab.value == t("market_size")) {
    return t("marcket_size_idea");
  }
  if (activeTab.value == t("turnover_cost_profitability")) {
    return t("turnover_idea");
  }
  if (activeTab.value == t("companies_employees_salaries")) {
    return t("companies_idea");
  }
});
</script>
