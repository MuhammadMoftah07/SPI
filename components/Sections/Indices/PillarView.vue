<template>
  <aside class="relative grid gap-2 p-3">
    <label for="" class="grid gap-[2px]">
      <p class="text-sm font-medium capitalize text-theme-indigo">
        {{ $t("pillar") }}
      </p>
      <v-select
        v-model="selectedPillar"
        label="title"
        class="text-sm"
        :options="pillars"
      />
    </label>

    <label for="" class="grid gap-[2px]">
      <p class="text-sm font-medium capitalize text-theme-indigo">
        {{ $t("country") }}
      </p>
      <v-select
        v-model="selectedCountry"
        class="text-sm"
        label="name"
        :options="countries"
      />
    </label>
    <button
      class="max-w-32 btn btn-primary btn-sm"
      @click="addPillar()"
      :disabled="!(selectedCountry && selectedPillar)"
    >
      {{ $t("add") }}
    </button>
    <div class="min-h-64">
      <ChartsLine
        v-if="showChart != 'loading'"
        :chart-data="pillarData"
        :chart-options="chartOptions"
        footerText="Pillar View"
        chartClass="max-h-[280px]"
      />
    </div>

    <ThemeLoading v-if="showChart == 'loading'" />
  </aside>
</template>

<script lang="ts" setup>
  const globalSector = computed(() => {
    return useGlobalStore().activeSector;
  });
  const showChart = ref<any>(false);
  const pillars = ref([]);
  const selectedPillar = ref(null);
  const countries = ref([]);
  const selectedCountry = ref(null);
  let pillarData = ref({
    labels: [],
    datasets: [],
  });

  // example => ref({
  //   labels: ["January", "February", "March"],
  //   datasets: [{ label: "one", data: [10, 20, 40] }],
  // });
  const chartOptions = reactive({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        formatter: (v) => v.y,
        align: "end",
        textAlign: useI18n.locale == "ar" ? "right" : "left",
        font: {
          weight: "600",
          size: 13,
        },
      },
    },
    scales: {
      y: {
        display: false,
      },
    },
  });
  const initData = () => {
    $fetch(`/pillars?sector_id=${globalSector.value}`).then((res) => {
      pillars.value = res.data;
    });

    $fetch(`/countries?sector_id=${globalSector.value}`).then((res) => {
      countries.value = res.data;
    });
  };
  onMounted(() => {
    initData();
  });
  watch(globalSector, (newX) => {
    initData();
  });

  const addPillar = () => {
    showChart.value = "loading";
    $fetch(
      `/pillar-country?pillar_id=${selectedPillar.value.id}&country_id=${selectedCountry.value.id}&sector_id=${globalSector.value}`
    ).then((res) => {
      const identifier = `${selectedCountry.value.name}:${selectedPillar.value.title}`;
      pillarData.value.labels = res.data.map((el) => el.pillar_year.toString());
      const xy = res.data.map((el) => {
        return { x: el.pillar_year.toString(), y: el.pillar_value };
      });

      if (pillarData.value.datasets.some((el) => el.identifier == identifier)) {
      } else {
        pillarData.value.datasets.push({
          identifier,
          label: identifier,
          data: xy,
        });
      }

      setTimeout(() => {
        showChart.value = true;
      }, 200);
    });
  };
</script>
