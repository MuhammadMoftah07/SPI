<template>
  <section>
    <ThemeTitle :title="$t('special_economic_zones')" />
    <ThemeTabs
      class="my-6"
      :tabs="[
        $t('economic_zones_tap_1'),
        $t('economic_zones_tap_2'),
        $t('economic_zones_tap_3'),
        $t('economic_zones_tap_4'),
        $t('economic_zones_tap_5'),
        $t('economic_zones_tap_6'),
        $t('economic_zones_tap_7'),
      ]"
      :activeTab="activeTab"
      @tabChosen="(e) => (activeTab = e)"
    />
    <p class="mb-6 text-sm font-medium 3xl:text-base text-theme-indigo">
      {{ activeP }}
    </p>

    <ThemeLoading v-if="useChartsData().loading" />
    <section class="charts-container" v-else>
      <SectionsEconomicZonesSEZ
        v-if="activeTab == $t('economic_zones_tap_1')"
      />
      <SectionsEconomicZonesGSCRI
        v-if="activeTab == $t('economic_zones_tap_2')"
      />
      <SectionsEconomicZonesKAEC
        v-if="activeTab == $t('economic_zones_tap_3')"
      />
      <SectionsEconomicZonesRas
        v-if="activeTab == $t('economic_zones_tap_4')"
      />
      <SectionsEconomicZonesJasan
        v-if="activeTab == $t('economic_zones_tap_5')"
      />
      <SectionsEconomicZonesCloud
        v-if="activeTab == $t('economic_zones_tap_6')"
      />
      <SectionsEconomicZonesSILZ
        v-if="activeTab == $t('economic_zones_tap_7')"
      />
    </section>
  </section>
</template>

<script setup>
const t = useI18n().t;

const activeTab = ref(t("economic_zones_tap_1"));
const activeP = computed(() => {
  if (activeTab.value == t("economic_zones_tap_1")) {
    return t("economic_zones_tap_1_p");
  } else {
    return t("economic_zones_tap_2_p");
  }
});
</script>
