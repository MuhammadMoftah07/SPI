<template>
  <section>
    <ThemeTitle :title="$t('political_analysis')" />
    <ThemeTabs
      class="my-6"
      :tabs="[$t('political_tab1'), $t('political_tab2'), $t('political_tab3')]"
      :activeTab="activeTab"
      @tabChosen="(e) => (activeTab = e)"
    />
    <p class="mb-6 text-sm font-medium 3xl:text-base text-theme-indigo">
      {{ activeP }}
    </p>

    <ThemeLoading v-if="useChartsData().loading" />
    <section class="charts-container" v-else>
      <SectionsPoliticalImport v-if="activeTab == $t('political_tab1')" />
      <SectionsPoliticalExport v-if="activeTab == $t('political_tab2')" />
      <SectionsPoliticalSummary v-if="activeTab == $t('political_tab3')" />
    </section>
  </section>
</template>

<script setup>
const t = useI18n().t;

const activeTab = ref(t("political_tab1"));
const activeP = computed(() => {
  if (activeTab.value == t("political_tab1")) {
    return t("political_tab1_p");
  }
  if (activeTab.value == t("political_tab2")) {
    return t("political_tab2_p");
  }
  if (activeTab.value == t("political_tab3")) {
    return t("political_tab2_p");
  }
});
</script>
