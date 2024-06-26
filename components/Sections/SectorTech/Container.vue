<template>
  <section>
    <ThemeTitle :title="$t('sector_demographic')" />
    <ThemeTabs
      class="my-6"
      :tabs="[
        $t('internet_tab'),
        $t('payment_tab'),
        $t('vending_tab'),
        $t('summary_on_tech_tab'),
      ]"
      :activeTab="activeTab"
      @tabChosen="(e) => (activeTab = e)"
    />
    <p class="mb-6 text-sm font-medium 3xl:text-base text-theme-indigo">
      {{ activeP }}
    </p>

    <ThemeLoading v-if="useChartsData().loading" />
    <section class="charts-container" v-else>
      <SectionsSectorTechInternet v-if="activeTab == $t('internet_tab')" />
      <SectionsSectorTechDigitalPayment v-if="activeTab == $t('payment_tab')" />
      <SectionsSectorTechVending v-if="activeTab == $t('vending_tab')" />
      <SectionsSectorTechSummary
        v-if="activeTab == $t('summary_on_tech_tab')"
      />
    </section>
  </section>
</template>

<script setup>
const t = useI18n().t;

const activeTab = ref(t("internet_tab"));
const activeP = computed(() => {
  if (activeTab.value == t("internet_tab")) {
    return t("internet_penetration_p");
  }
  if (activeTab.value == t("payment_tab")) {
    return t("digital_payment_p");
  }
  if (activeTab.value == t("vending_tab")) {
    return t("vending_machines_p");
  }
  if (activeTab.value == t("summary_on_tech_tab")) {
    return t("summary_on_tech_p");
  }
});

let market_size_1 = ref(null);
let market_size_type = ref(null);
</script>
