<template>
  <section>
    <ThemeTitle :title="$t('sector_demographic')" />
    <ThemeTabs
      class="my-6"
      :tabs="[
        $t('regulations_tab_key'),
        $t('regulations_tab_laws'),
        $t('regulations_tab_ecommerce'),
        $t('regulations_tab_consumer'),
        $t('regulations_tab_import'),
        $t('regulations_tab_franchise'),
        $t('regulations_tab_saudization'),
        $t('regulations_tab_anti'),
        $t('regulations_tab_summary'),
      ]"
      :activeTab="activeTab"
      @tabChosen="(e) => (activeTab = e)"
    />
    <p class="mb-6 text-sm font-medium 3xl:text-base text-theme-indigo">
      {{ activeP }}
    </p>

    <ThemeLoading v-if="useChartsData().loading" />
    <section class="charts-container" v-else>
      <SectionsSectorRegulationsKeyLaws
        v-if="activeTab == $t('regulations_tab_key')"
      />
      <SectionsSectorRegulationsInvestments
        v-if="activeTab == $t('regulations_tab_laws')"
      />
      <SectionsSectorRegulationsEcommerce
        v-if="activeTab == $t('regulations_tab_ecommerce')"
      />
      <SectionsSectorRegulationsImport
        v-if="activeTab == $t('regulations_tab_import')"
      />
      <SectionsSectorRegulationsConsumer
        v-if="activeTab == $t('regulations_tab_consumer')"
      />
      <SectionsSectorRegulationsFranchise
        v-if="activeTab == $t('regulations_tab_franchise')"
      />
      <SectionsSectorRegulationsSaudization
        v-if="activeTab == $t('regulations_tab_saudization')"
      />
      <SectionsSectorRegulationsAnti
        v-if="activeTab == $t('regulations_tab_anti')"
      />

      <SectionsSectorRegulationsSummary
        v-if="activeTab == $t('regulations_tab_summary')"
      />
    </section>
  </section>
</template>

<script setup>
const t = useI18n().t;

const activeTab = ref(t("regulations_tab_key"));
const activeP = computed(() => {
  if (activeTab.value == t("regulations_tab_key")) {
    return t("regulations_tab_key_p");
  }
  if (activeTab.value == t("regulations_tab_laws")) {
    return t("regulations_tab_laws_p");
  }
  if (activeTab.value == t("regulations_tab_ecommerce")) {
    return t("regulations_tab_ecommerce_p");
  }
  if (activeTab.value == t("regulations_tab_consumer")) {
    return t("regulations_tab_consumer_p");
  }
  if (activeTab.value == t("regulations_tab_import")) {
    return t("regulations_tab_import_p");
  }
  if (activeTab.value == t("regulations_tab_franchise")) {
    return t("regulations_tab_franchise_p");
  }
  if (activeTab.value == t("regulations_tab_saudization")) {
    return t("regulations_tab_saudization_p");
  }
  if (activeTab.value == t("regulations_tab_anti")) {
    return t("regulations_tab_anti_p");
  }
  if (activeTab.value == t("regulations_tab_summary")) {
    return t("regulations_tab_summary_p");
  }
});
</script>
