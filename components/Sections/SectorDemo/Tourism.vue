<template>
  <div class="grid gap-10 xl:gap-20 xl:grid-cols-2 charts-container">
    <ChartsBarCateg
      v-if="chartData"
      :chart-data="chartData"
      :chart-options="chartOption"
      footerText="Internal Tourism - overnight visitors(a) (mn), 2017A-22A"
      chartClass="max-h-[380px] mx-auto"
    />

    <ChartsBarCateg
      v-if="chartData2"
      :chart-data="chartData2"
      :chart-options="chartOption"
      footerText="Internal Tourism - expenditure(a) (SAR bn), 2017A-22A"
      chartClass="max-h-[380px]  mx-auto"
    />

    <section
      class="absolute left-0 right-0 flex items-center w-full max-w-5xl col-span-12 gap-2 p-5 mx-auto text-xs font-semibold xl:-bottom-32 -bottom-48 3xl:text-sm rounded-2xl bg-theme-aqua2"
    >
      <IconsVirus class="w-10 h-10 mx-2 lg:mx-8 shrink-0" />
      <p class="leading-normal" v-t="`tourism_lower_p`"></p>
    </section>
  </div>
</template>

<script lang="ts" setup>
let chartData = computed(() => {
  const data = useChartsData().internal_tourism_overnight_visitors;
  if (!data || !data.length) {
    return null;
  }
  return {
    labels: data[0].points.map((el) => el.label),
    datasets: [
      {
        label: "Domestic",
        data: data[0].points.map((el) => el.point_value),
        backgroundColor: "#273D6C",
      },
      {
        label: "Inbound",
        data: data[1].points.map((el) => el.point_value),
        backgroundColor: "#4266b1",
      },
    ],
  };
});

let chartData2 = computed(() => {
  const data = useChartsData().internal_tourism_expenditure;
  if (!data || !data.length) {
    return null;
  }
  return {
    labels: data[0].points.map((el) => el.label),
    datasets: [
      {
        label: "Domestic",
        data: data[0].points.map((el) => el.point_value),
        backgroundColor: "#273D6C",
      },
      {
        label: "Inbound",
        data: data[1].points.map((el) => el.point_value),
        backgroundColor: "#4266b1",
      },
    ],
  };
});

const chartOption = {
  minBarLength: 12,
  responsive: true,
  color: "black",
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        padding: 10,
        font: {
          size: 12,
          weight: "500",
        },
        // usePointStyle: true,
      },
    },
    datalabels: {
      color: "white",
      textAlign: useI18n.locale == "ar" ? "right" : "left",

      labels: {
        title: {
          font: {
            weight: "600",
            size: 11,
          },
        },
      },
    },
  },
  scales: {
    y: {
      type: "linear",
      stacked: true,
      // suggestedMax: 300,
      display: false,
      // beginAtZero: false,
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

<style></style>
