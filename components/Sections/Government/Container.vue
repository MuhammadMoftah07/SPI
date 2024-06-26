<template>
  <section>
    <ThemeTitle :title="$t('government_direction')" />
    <ThemeTabs
      class="my-6"
      :tabs="[
        $t('government_tap_1'),
        $t('government_tap_2'),
        $t('government_tap_3'),
        $t('government_tap_4'),
        $t('government_tap_5'),
        $t('government_tap_6'),
      ]"
      :activeTab="activeTab"
      @tabChosen="(e) => (activeTab = e)"
    />
    <p class="mb-6 text-sm font-medium 3xl:text-base text-theme-indigo">
      {{ activeP }}
    </p>

    <ThemeLoading v-if="useChartsData().loading" />
    <section class="charts-container" v-else>
      <SectionsGovernmentMain v-if="activeTab == $t('government_tap_1')" />
      <SectionsGovernmentTransformation
        v-if="activeTab == $t('government_tap_2')"
      />
      <SectionsGovernmentDevelopment
        v-if="activeTab == $t('government_tap_3')"
      />
      <SectionsGovernmentHuman v-if="activeTab == $t('government_tap_4')" />
      <SectionsGovernmentQuality v-if="activeTab == $t('government_tap_5')" />
      <SectionsGovernmentPilgrim v-if="activeTab == $t('government_tap_6')" />
    </section>
  </section>
</template>

<script setup>
const t = useI18n().t;

const activeTab = ref(t("government_tap_1"));
const activeP = computed(() => {
  if (activeTab.value == t("government_tap_1")) {
    return t("government_tap_1_p");
  }
  if (activeTab.value == t("government_tap_2")) {
    return t("government_tap_2_p");
  }
  if (activeTab.value == t("government_tap_3")) {
    return t("government_tap_3_p");
  }
  if (activeTab.value == t("government_tap_4")) {
    return t("government_tap_4_p");
  }
  if (activeTab.value == t("government_tap_5")) {
    return t("government_tap_5_p");
  }
  if (activeTab.value == t("government_tap_6")) {
    return t("government_tap_6_p");
  }
});
</script>
