<template>
  <div class="grid items-start grid-cols-1 gap-14 xl:grid-cols-2">
    <section class="grid gap-10">
      <!-- charts  -->
      <ChartsBar
        v-if="chartData"
        :chart-data="chartData"
        :chart-options="chartOptions"
        footer-text="Payments by consumers, 2019A and 2021A(a)"
        chartClass="xl:max-h-[250px] mx-auto"
      />

      <!-- paragraphs -->
      <section class="grid gap-5 p-5 rounded-2xl bg-theme-aqua2">
        <aside
          class="flex items-center gap-6 text-xs font-semibold 3xl:text-sm"
        >
          <IconsMachine class="w-9 h-9 shrink-0" />
          <p class="leading-normal" v-t="`vending_machines_lower_p1`"></p>
        </aside>

        <aside
          class="flex items-center gap-6 text-xs font-semibold 3xl:text-sm"
        >
          <icons-machine2 class="w-9 h-9 shrink-0" />
          <p class="leading-normal" v-t="`vending_machines_lower_p2`"></p>
        </aside>
      </section>
    </section>

    <section class="grid gap-10">
      <!-- charts  -->
      <ChartsBar
        v-if="chartData2"
        :chart-data="chartData2"
        :chart-options="chartOptions"
        footer-text="Payments by consumers, 2019A and 2021A(a)"
        chartClass="xl:max-h-[250px] mx-auto"
      />

      <!-- paragraphs -->
      <section class="grid gap-5 p-5 rounded-2xl bg-theme-aqua2">
        <aside
          class="flex items-center gap-6 text-xs font-semibold 3xl:text-sm"
        >
          <IconsBasketPlus class="w-9 h-9 shrink-0" />
          <p class="leading-normal" v-t="`vending_machines_lower_p3`"></p>
        </aside>

        <aside
          class="flex items-center gap-6 text-xs font-semibold 3xl:text-sm"
        >
          <IconsSalesAmount class="w-9 h-9 shrink-0" />
          <p class="leading-normal" v-t="`vending_machines_lower_p4`"></p>
        </aside>
      </section>
    </section>
  </div>
</template>

<script setup>
const chartData = computed(() => {
  const data = useChartsData().retail_trade_vending_machines;
  if (!data?.length) {
    return null;
  }
  return {
    labels: data.map((el) => el.label),
    datasets: [
      {
        label: "Vending Machines",
        backgroundColor: "#273D6C",
        borderColor: "#273D6C",
        barThickness: 65,
        borderWidth: 1,
        data: data.map((el) => el.point_value),
        yAxisID: "y",
        // order: 2,
        datalabels: {
          color: "black",
          anchor: "end",
          align: "end",
          offset: -4,
        },
      },
    ],
  };
});

let chartData2 = computed(() => {
  const data = useChartsData().retail_trade_home_shopping;
  if (!data?.length) {
    return null;
  }
  return {
    labels: data.map((el) => el.label),
    datasets: [
      {
        label: "Home Shopping",
        backgroundColor: "#273D6C",
        borderColor: "#273D6C",
        barThickness: 65,
        borderWidth: 1,
        data: data.map((el) => el.point_value),
        yAxisID: "y",
        // order: 2,
        datalabels: {
          color: "black",
          anchor: "end",
          align: "end",
          offset: -4,
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
      // offset: 500,
      anchor: "top",
      color: "black",
      textAlign: useI18n.locale == "ar" ? "right" : "left",
      // formatter: (el) => el + "%",
      font: {
        weight: "600",
        size: 14,
      },
    },
  },

  scales: {
    y: {
      type: "linear",
      suggestedMax: 1300,
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

const doughnutOption = ref({
  cutout: "45%",
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        // boxWidth: 10,
        // boxHeight: 10,
        // padding: 10,
        font: {
          size: 13.5,
          weight: "600",
        },
        usePointStyle: true,
      },
    },
    datalabels: {
      // display: false,
      align: "center",
      anchor: "top",
      formatter: (value) => Math.round(value) + "%",
      color: "white",
      textAlign: useI18n.locale == "ar" ? "right" : "left",
      font: {
        weight: "bold",
        size: 14,
      },
    },
  },
});
</script>

<style scoped></style>
