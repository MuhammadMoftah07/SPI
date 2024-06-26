<template>
  <div class="max-w-2xl mx-auto">
    <!-- charts  -->
    <section class="grid items-end max-w-lg mx-auto mb-6 -mt-4 gap-7">
      <ChartsBar
        v-if="chartData"
        :chart-data="chartData"
        :chart-options="chartOptions"
        footer-text="Urban population (%), 2017A-30F"
        chartClass="xl:max-h-[290px]  mx-auto"
        footer-class="bg-theme-indigo"
      />
    </section>

    <!-- paragraphs -->
    <section class="grid gap-5 p-5 rounded-2xl bg-theme-aqua2">
      <aside class="flex items-center gap-6 text-xs font-semibold 3xl:text-sm">
        <IconsBuildingCompany class="w-9 h-9 shrink-0" />
        <p class="leading-normal" v-t="`urbanization_lower_p1`"></p>
      </aside>

      <aside class="flex items-center gap-6 text-xs font-semibold 3xl:text-sm">
        <IconsSalesAmount class="w-9 h-9 shrink-0" />
        <p class="leading-normal" v-t="`urbanization_lower_p2`"></p>
      </aside>
    </section>
  </div>
</template>

<script setup>
const chartData = computed(() => {
  const data = useChartsData().urban_population;
  if (!data || !data.length) {
    return null;
  }
  return {
    labels: data.map((el) => el.label),
    datasets: [
      {
        type: "bar",
        label: "Urban population",
        backgroundColor: "#273D6C",
        borderColor: "#273D6C",
        barThickness: 60,
        borderWidth: 1,
        data: data.map((el) => el.point_value),
        yAxisID: "y",
        order: 2,
        datalabels: {
          color: "black",
          anchor: "end",
          align: "end",
          offset: 2,
        },
      },
    ],
  };
});

const chartOptions = {
  responsive: true,
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
      align: "end",
      offset: 50,
      anchor: "top",
      color: "black",
      textAlign: useI18n.locale == "ar" ? "right" : "left",
      formatter: (el) => el + "%",
      font: {
        weight: "600",
        size: 13,
      },
    },
  },

  scales: {
    y: {
      type: "linear",
      suggestedMax: 120,
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
</script>

<style scoped></style>
