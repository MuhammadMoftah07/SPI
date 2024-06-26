<template>
  <section>
    <ThemeTitle :title="$t('sector_demographic')" />
    <ThemeTabs
      class="my-6"
      :tabs="[
        $t('population'),
        $t('household_income'),
        $t('urbanization'),
        $t('tourism'),
        $t('summary_on_demographics'),
      ]"
      :activeTab="activeTab"
      @tabChosen="(e) => (activeTab = e)"
    />
    <p class="mb-6 text-sm font-medium 3xl:text-base text-theme-indigo">
      {{ activeP }}
    </p>

    <ThemeLoading v-if="useChartsData().loading" />
    <section class="charts-container" v-else>
      <SectionsSectorDemoTourism v-if="activeTab == $t('tourism')" />
      <SectionsSectorDemoSummary
        v-if="activeTab == $t('summary_on_demographics')"
      />
      <SectionsSectorDemoUrbanization v-if="activeTab == $t('urbanization')" />
      <SectionsSectorDemoHouseholdIncome
        v-if="activeTab == $t('household_income')"
      />
      <SectionsSectorDemoPopulation v-if="activeTab == $t('population')" />
    </section>
  </section>
</template>

<script setup>
const t = useI18n().t;
const loading = ref(false);

const activeTab = ref(t("population"));
const activeP = computed(() => {
  if (activeTab.value == t("population")) {
    return t("population_p");
  }
  if (activeTab.value == t("household_income")) {
    return t("household_income_p");
  }
  if (activeTab.value == t("urbanization")) {
    return t("urbanization_p");
  }
  if (activeTab.value == t("tourism")) {
    return t("tourism_p");
  }
  if (activeTab.value == t("summary_on_demographics")) {
    return t("summary_on_demographics_p");
  }
});

let market_size_1 = ref(null);
let market_size_type = ref(null);
</script>
