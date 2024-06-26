<template>
  <div>
    <!-- charts  -->
    <section
      class="grid items-end grid-cols-1 mb-6 -mt-7 xl:grid-cols-12 gap-7"
    >
      <div class="col-span-12 xl:col-span-7">
        <ChartsStackedBarLine
          v-if="chartData"
          :chart-data="chartData"
          :chart-options="chartOptions"
          footer-text="Real GDP (SAR tn), 2017A-27E"
          chartClass="xl:max-h-[290px]  mx-auto"
        />
      </div>

      <div class="col-span-12 xl:col-span-5">
        <ChartsStackedBarLine
          v-if="chartData2"
          :chart-data="chartData2"
          :chart-options="chartOptions"
          footer-text="Real GDP of wholesale and retail(d) sector (SAR bn), 2017A-21A"
          chartClass="xl:max-h-[290px]  mx-auto"
        />
      </div>
    </section>

    <!-- paragraphs -->
    <section class="grid gap-5 p-5 rounded-2xl bg-theme-aqua2">
      <aside class="flex items-center gap-6 text-xs font-semibold 3xl:text-sm">
        <IconsVirus class="w-9 h-9 shrink-0" />
        <p class="leading-normal" v-t="`GDP_lower_p_1`"></p>
      </aside>

      <aside class="flex items-center gap-6 text-xs font-semibold 3xl:text-sm">
        <IconsEconomicGrowth class="w-9 h-9 shrink-0" />
        <p class="leading-normal" v-t="`GDP_lower_p_2`"></p>
      </aside>

      <aside class="flex items-center gap-6 text-xs font-semibold 3xl:text-sm">
        <IconsStockTicker class="w-8 h-8 shrink-0 text-theme-indigo" />
        <p class="leading-normal" v-t="`GDP_lower_p_3`"></p>
      </aside>
    </section>
  </div>
</template>

<script setup>
const chartData = computed(() => {
  const data = useChartsData().real_gdp;
  if (!data || !data.length) {
    return null;
  }
  return {
    labels: data[0].points.map((el) => el.label),
    datasets: [
      {
        type: "bar",
        label: data[0].dataset,
        backgroundColor: "#273D6C",
        borderColor: "#273D6C",
        barThickness: 50,
        borderWidth: 1,
        data: data[0].points.map((el) => el.point_value),
        yAxisID: "y",
        order: 2,
        suggestedMax: 200,
        datalabels: {
          color: "black",
          anchor: "end",
          align: "end",
          offset: 2,
        },
      },
      {
        type: "line",
        label: data[1].dataset,
        borderWidth: 1,
        pointRadius: 5,
        pointStyle: "rect",
        borderColor: "#5B9DCD",
        backgroundColor: "#5B9DCD",
        fill: false,
        data: data[1].points.map((el) => el.point_value),
        yAxisID: "y1",
        order: 1,
        datalabels: {
          formatter: (value) => value + "%",

          color: "white",
          anchor: "end",
          align: "end",
          offset: 2,
          font: {
            weight: "500",
            size: 13,
          },
          backgroundColor: "#5B9DCD",
          borderRadius: 2,

          padding: {
            top: 2,
            bottom: 1,
            right: 1,
            left: 2,
          },
        },
      },
    ],
  };
});

const chartData2 = computed(() => {
  const data = useChartsData().real_gdp_wholesale;
  if (!data || !data.length) {
    return null;
  }
  return {
    labels: data[0].points.map((el) => el.label),
    datasets: [
      {
        type: "bar",
        label: data[0].dataset,
        backgroundColor: "#273D6C",
        borderColor: "#273D6C",
        barThickness: 60,
        borderWidth: 1,
        data: data[0].points.map((el) => el.point_value),
        yAxisID: "y",
        order: 2,
        datalabels: {
          color: "black",
          anchor: "end",
          align: "end",
          offset: 2,
        },
      },
      {
        type: "line",
        label: data[1].dataset,
        borderWidth: 1,
        pointRadius: 5,
        pointStyle: "rect",
        borderColor: "#5B9DCD",
        backgroundColor: "#5B9DCD",
        fill: false,
        data: data[1].points.map((el) => el.point_value),
        yAxisID: "y1",
        order: 1,
        datalabels: {
          formatter: (value) => value + "%",
          color: "white",
          anchor: "end",
          align: "end",
          offset: 2,
          font: {
            weight: "500",
            size: 13,
          },
          backgroundColor: "#5B9DCD",
          borderRadius: 2,
          padding: {
            top: 2,
            bottom: 1,
            right: 1,
            left: 2,
          },
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
      display: true,
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
      font: {
        weight: "600",
        size: 13,
      },
    },
  },

  scales: {
    y: {
      type: "linear",
      suggestedMax: 6,
      display: false,
      position: "left",
      beginAtZero: true,
    },
    y1: {
      suggestedMax: 100,
      type: "linear",
      display: false,
      position: "right",
      beginAtZero: true,
      grid: {
        drawOnChartArea: false,
      },
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
