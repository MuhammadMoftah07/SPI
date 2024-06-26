<template>
  <div class="">
    <!-- chartClass="max-h-[240px] w-full  mx-auto" -->
    <ChartsLine
      v-if="chartData"
      :chart-data="chartData"
      :chart-options="chartOption"
      class="w-full max-w-3xl mx-auto -mt-8"
      chart-class="max-h-[300px]"
    />
    <section class="grid gap-5 mt-8 xl:grid-cols-3">
      <aside
        v-for="n in 3"
        class="p-4 text-white bg-theme-celestial-blue rounded-xl"
      >
        <h5
          class="mb-4 text-lg font-medium text-center"
          v-t="`inflation_title_${n}`"
        ></h5>
        <p class="text-sm" v-t="`inflation_p_${n}`"></p>
      </aside>
    </section>
  </div>
</template>

<script setup>
let chartData = computed(() => {
  const data = useChartsData().annual_inflation_consumer_prices;
  if (!data || !data.length) {
    return null;
  }
  return {
    labels: data.map((el) => el.label),
    datasets: [
      {
        data: data.map((el) => el.point_value),
        borderWidth: 2,
        pointRadius: 8,
        pointStyle: "rect",
        borderColor: "#6B4747",
        backgroundColor: "#6B4747",

        datalabels: {
          color: "black",
          anchor: "end",
          align: "end",
          formatter: (value) => value + "%",
          offset: 5,
          font: {
            weight: "bold",
            size: 14,
          },
        },
      },
    ],
  };
});

const chartOption = {
  responsive: true,
  color: "black",
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      suggestedMax: 10,
      display: false,
      // beginAtZero: false,

      grid: {
        drawOnChartArea: true,
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
</script>

<style scoped></style>
