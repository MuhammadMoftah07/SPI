<template>
  <div>
    <p class="mb-12 text-sm text-theme-indigo">
      {{ $t("marcket_size_p") }}
    </p>

    <section class="grid items-end grid-cols-1 gap-y-12 xl:grid-cols-12">
      <div class="col-span-6">
        <ChartsBar
          v-if="marketData"
          :chart-data="marketData"
          :chart-options="marketOptions"
          :footer-text="`Market size (SAR bn), 2019A-26F`"
          chartClass="max-h-[380px] !h-72 mx-auto"
        />
      </div>
      <div class="items-end justify-center hidden col-span-2 xl:flex">
        <IconsHandPointer class="w-12 h-12 rtl:-scale-y-100 rtl:rotate-180" />
      </div>
      <div class="col-span-4">
        <ChartsDoughnut
          v-if="doughnutData"
          :chart-data="doughnutData"
          :chart-options="doughnutOptions"
          footerText="Market size By type (%), 2021A"
          chartClass="max-h-[380px] !h-60  mx-auto "
        />
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps(["market_size_1", "market_size_type"]);

// Market
const marketData = computed(() => {
  const data = useChartsData().market_size_1;
  if (!data?.length) {
    return null;
  }
  return {
    labels: data.map((el) => el.label),
    datasets: [
      {
        data: data.map((el) => el.point_value),
      },
    ],
  };
});

const marketOptions = {
  responsive: true,
  backgroundColor: "#273D6C",
  color: "black",
  plugins: {
    legend: {
      display: false, // Hides the legend
    },
    datalabels: {
      align: "center",
      anchor: "top",
      color: "white",
      textAlign: useI18n.locale == "ar" ? "right" : "left",
      font: {
        weight: "600",
        size: 13,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true, // default true,
      display: false,
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "black",
        font: {
          weight: "bold",
          size: 13,
        },
      },
    },
  },
};

// doughnut
const doughnutData = computed(() => {
  const data = useChartsData().market_size_type;
  if (!data?.length) {
    return null;
  }
  return {
    labels: data.map((el) => el.label),
    datasets: [
      {
        data: data.map((el) => el.point_value),
        backgroundColor: ["#457BEE", "#273D6C"],
        borderWidth: 0,
        spacing: 0,
      },
    ],
  };
});

const doughnutOptions = ref({
  cutout: "65%",
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      align: "center",
      anchor: "top",
      color: "white",
      textAlign: useI18n.locale == "ar" ? "right" : "left",

      font: {
        weight: "bold",
        size: 13,
      },
    },
  },
});
</script>
