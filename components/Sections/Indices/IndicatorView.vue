<template>
  <aside class="relative grid gap-2 p-3">
    <label for="" class="grid gap-[2px]">
      <p class="text-sm font-medium capitalize text-theme-indigo">
        {{ $t("index") }}
      </p>
      <v-select
        v-model="selectedParetos"
        label="title"
        class="text-sm"
        :options="paretos"
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
      @click="addData()"
      :disabled="!(selectedCountry && selectedParetos)"
    >
      {{ $t("add") }}
    </button>
    <div class="min-h-64">
      <ChartsLine
        v-if="showChart != 'loading'"
        :chart-data="chartData"
        :chart-options="chartOptions"
        footerText="Indicator View"
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
  const paretos = ref([]);
  const selectedParetos = ref(null);
  const countries = ref([]);
  const selectedCountry = ref(null);
  let chartData = ref({
    labels: [],
    datasets: [],
  });

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
    $fetch(`/paretos?sector_id=${globalSector.value}`).then((res) => {
      paretos.value = res.data;
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

  const addData = () => {
    showChart.value = "loading";
    $fetch(
      `/index-country?index_id=${selectedParetos.value.id}&country_id=${selectedCountry.value.id}&sector_id=${globalSector.value}`
    ).then((res) => {
      const identifier = `${selectedCountry.value.name}:${selectedParetos.value.title}`;
      chartData.value.labels = res.data.map((el) => el.index_year.toString());
      const xy = res.data.map((el) => {
        return { x: el.index_year.toString(), y: el.index_value };
      });

      if (chartData.value.datasets.some((el) => el.identifier == identifier)) {
      } else {
        chartData.value.datasets.push({
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
