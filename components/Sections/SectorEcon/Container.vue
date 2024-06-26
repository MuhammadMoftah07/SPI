<template>
  <section>
    <ThemeTitle :title="$t('sector_economics')" />
    <ThemeTabs
      class="my-6"
      :tabs="[
        $t('real_gdp_tab'),
        $t('annual_inflation_tab'),
        $t('household_spending_tab'),
        $t('unemployment_rate_tab'),
        $t('economic_indicators_tab'),
      ]"
      :activeTab="activeTab"
      @tabChosen="(e) => (activeTab = e)"
    />
    <p class="mb-6 text-sm font-medium 3xl:text-base text-theme-indigo">
      {{ activeP }}
    </p>

    <ThemeLoading v-if="useChartsData().loading" />
    <section class="charts-container" v-else>
      <SectionsSectorEconGDP v-if="activeTab == $t('real_gdp_tab')" />
      <SectionsSectorEconInflation
        v-if="activeTab == $t('annual_inflation_tab')"
      />
      <SectionsSectorEconHousehold
        v-if="activeTab == $t('household_spending_tab')"
      />
      <SectionsSectorEconUnemployment
        v-if="activeTab == $t('unemployment_rate_tab')"
      />
      <SectionsSectorEconIndicators
        v-if="activeTab == $t('economic_indicators_tab')"
      />
    </section>
  </section>
</template>

<script setup>
const t = useI18n().t;
const loading = ref(false);

const activeTab = ref(t("real_gdp_tab"));
const activeP = computed(() => {
  if (activeTab.value == t("real_gdp_tab")) {
    return t("real_gdp_p");
  }
  if (activeTab.value == t("annual_inflation_tab")) {
    return t("annual_inflation_p");
  }
  if (activeTab.value == t("household_spending_tab")) {
    return t("household_spending_p");
  }
  if (activeTab.value == t("unemployment_rate_tab")) {
    return t("unemployment_rate_p");
  }
  if (activeTab.value == t("economic_indicators_tab")) {
    return t("economic_indicators_p");
  }
});

let market_size_1 = ref(null);
let market_size_type = ref(null);
</script>
