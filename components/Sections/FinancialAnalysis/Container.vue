<template>
  <section>
    <ThemeTitle :title="$t('financial_analysis_and_benchmarking')" />

    <ThemeLoading v-if="useChartsData().loading" />
    <template v-else>
      <SectionsFinancialAnalysisMain
        v-if="activeSection == 'main'"
        @germanyClicked="activeSection = 'germany'"
        @usaClicked="activeSection = 'usa'"
        @chinaClicked="activeSection = 'china'"
      />

      <SectionsFinancialAnalysisGermany
        v-if="activeSection == 'germany'"
        @back="activeSection = 'main'"
      />

      <SectionsFinancialAnalysisUSA
        v-if="activeSection == 'usa'"
        @back="activeSection = 'main'"
      />

      <SectionsFinancialAnalysisChina
        v-if="activeSection == 'china'"
        @back="activeSection = 'main'"
      />
      <button
        v-if="activeSection != 'main'"
        type="button"
        @click="activeSection = 'main'"
        class="fixed btn btn-circle btn-primary group end-8 bottom-8"
      >
        <IconsBackArrow
          class="w-5 h-5 cursor-pointer rtl:rotate-180 duration-0"
        />
      </button>
    </template>
  </section>
</template>

<script setup>
const activeSection = ref("main");
</script>
