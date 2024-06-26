<template>
  <aside class="relative grid gap-2 p-3">
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
      :disabled="!selectedCountry"
    >
      {{ $t("add") }}
    </button>
    <div class="min-h-64">
      <ChartsBar
        v-if="showChart != 'loading'"
        :chart-data="chartData"
        :chart-options="chartOptions"
        footerText="Pareto"
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
  const countries = ref([]);
  const selectedCountry = ref(null);
  let chartData = ref({
    labels: [],
    datasets: [],
  });

  const chartOptions = reactive({
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
      },
      x: {
        beginAtZero: true,
        min: 0,
      },
      percentageAxis: {
        type: "linear",
        position: "right",
        min: 0,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
    },
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: false,
      },
    },
  });
  const initData = () => {
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
      `/pareto-country?country_id=${selectedCountry.value.id}&sector_id=${globalSector.value}`
    ).then((res) => {
      const total = res.data.reduce(
        (sum, data) => sum + parseInt(data.pareto_value),
        0
      );
      // sorting descending

      const cumulativeTotal = res.data.reduce(
        (sum, data) => sum + (data.pareto_value / total) * 100,
        0
      );

      let cumulativePercentage = 0;
      const dataset = res.data.map((pareto) => {
        cumulativePercentage += (pareto.pareto_value / total) * 100;
        return {
          title: pareto.pareto.title.toString(),
          value: parseInt(pareto.pareto_value),
          cumulative: (cumulativePercentage / cumulativeTotal) * 100,
        };
      });

      chartData.value.labels = res.data.map((el) => el.pareto.title);
      chartData.value.datasets = [
        {
          type: "line",
          label: "Percentage",
          data: dataset.map((a) => a.cumulative),
          borderColor: "rgba(255, 99, 132, 1)",
          fill: false,
          yAxisID: "percentageAxis",
          pointRadius: 1.5,
        },
        {
          type: "bar",
          label: "Cumulative",
          data: dataset.map((a) => a.value),
          backgroundColor: "rgba(54, 162, 235, 0.8)",
        },
      ];
      setTimeout(() => {
        showChart.value = true;
      }, 200);
    });
  };
</script>
