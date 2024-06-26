<template>
  <main>
    <SectionsMarketSizeContainer v-if="activeSideTab.id == 1" />
    <SectionsSectorEconContainer v-if="activeSideTab.id == 2" />
    <SectionsSectorDemoContainer v-if="activeSideTab.id == 3" />
    <SectionsSectorTechContainer v-if="activeSideTab.id == 4" />
    <SectionsSectorRegulationsContainer v-if="activeSideTab.id == 5" />
    <SectionsGovernmentContainer v-if="activeSideTab.id == 6" />
    <SectionsEconomicZonesContainer v-if="activeSideTab.id == 7" />
    <SectionsPoliticalContainer v-if="activeSideTab.id == 9" />
    <SectionsFinancialAnalysisContainer
      v-if="activeSideTab.id == 'financial_analysis'"
    />
    <SectionsGlobalIndicesContainer
      v-if="activeSideTab.id == 'global_indices'"
    />
    <SectionsCapitalMarketContainer
      v-if="activeSideTab.id == 'capital_market'"
    />
    <SectionsCostOfBusinessContainer
      v-if="activeSideTab.id == 'cost_of_business'"
    />
    <SectionsIndicesGII v-if="activeSideTab.id == 'GII'" />
  </main>
</template>
<script setup>
  definePageMeta({
    middleware: "authenticated",
  });

  const activeSideTab = computed(() => {
    return useGlobalStore().activeSideTab;
  });
</script>

<style>
  .charts-container {
    @apply min-h-[250px] relative;
  }
</style>
