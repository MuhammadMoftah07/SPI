<template>
  <div class="max-w-4xl mx-auto">
    <!-- charts  -->
    <section
      class="grid items-end mx-auto mt-6 mb-6 xl:grid-cols-2 gap-7 xl:gap-20"
    >
      <ChartsBar
        v-if="chartData"
        :chart-data="chartData"
        :chart-options="chartOptions"
        footer-text="Gross personal income(a)(b) (SAR bn), 2017A-27F"
        chartClass="xl:max-h-[290px]"
      />

      <ChartsBar
        v-if="chartData2"
        :chart-data="chartData2"
        :chart-options="chartOptions"
        footer-text="Personal disposable income(a) (per capita, SAR’000), 2017A-27F"
        chartClass="xl:max-h-[290px]"
      />
    </section>

    <!-- paragraphs -->
    <section class="grid gap-5 p-5 rounded-2xl bg-theme-aqua2">
      <aside class="flex items-center gap-6 text-xs font-semibold 3xl:text-sm">
        <IconsHeartAnalysisDemand class="w-9 h-9 shrink-0" />
        <p class="leading-normal" v-t="`household_income_lower_p1`"></p>
      </aside>
    </section>
  </div>
</template>

<script setup>
const chartData = computed(() => {
  const data = useChartsData().gross_personal_income;
  if (!data || !data.length) {
    return null;
  }
  return {
    labels: data.map((el) => el.label),
    datasets: [
      {
        type: "bar",
        label: "Gross personal income",
        backgroundColor: "#273D6C",
        borderColor: "#273D6C",
        barThickness: 60,
        borderWidth: 1,
        data: data.map((el) => el.point_value),
        yAxisID: "y",
        order: 2,
      },
    ],
  };
});
const chartData2 = computed(() => {
  const data = useChartsData().personal_disposable_income;
  if (!data || !data.length) {
    return null;
  }
  return {
    labels: data.map((el) => el.label),
    datasets: [
      {
        type: "bar",
        label: "Personal disposable income",
        backgroundColor: "#273D6C",
        borderColor: "#273D6C",
        barThickness: 60,
        borderWidth: 1,
        data: data.map((el) => el.point_value),
        yAxisID: "y",
        order: 2,
      },
    ],
  };
});

const chartOptions = {
  responsive: true,
  aspectRatio: 1.8,
  color: "black",
  plugins: {
    legend: {
      display: false,
      position: "bottom",
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        padding: 10,
        font: {
          size: 13.5,
          weight: "500",
        },
        usePointStyle: true,
      },
    },
    datalabels: {
      color: "black",
      anchor: "end",
      align: "end",
      offset: -5,
      textAlign: useI18n.locale == "ar" ? "right" : "left",
      font: {
        weight: "600",
        size: 13,
      },
    },
  },

  scales: {
    y: {
      suggestedMax: 5,
      display: false,
      position: "left",
      beginAtZero: true,
    },

    x: {
      stacked: true,
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
// const chartOptions2 = { ...chartOptions };
// chartOptions2.scales.y.suggestedMax = 90;
</script>

<style scoped></style>
