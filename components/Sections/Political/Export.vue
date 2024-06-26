<template>
  <div class="grid items-start grid-cols-1 mt-10 gap-14 xl:grid-cols-2">
    <!-- charts  -->
    <ChartsBar
      v-if="chartData"
      :chart-data="chartData"
      :chart-options="chartOptions"
      footer-text="Saudi Arabia total retail exports (SAR bn), 2017A-21A(a)(b)"
      chartClass="xl:max-h-[250px] mx-auto"
      class="col-span-2 xl:col-span-1"
    />

    <!-- charts  -->
    <ChartsBar
      v-if="chartData2"
      :chart-data="chartData2"
      :chart-options="chartOption2"
      footer-text="Saudi Arabia retail exports, by country (SAR bn), 2017-21A(a)(b)(d)(e)"
      chartClass="xl:max-h-[250px] mx-auto"
      class="col-span-2 xl:col-span-1"
    />

    <!-- paragraphs -->
    <section class="grid col-span-2 gap-5 p-5 rounded-2xl bg-theme-aqua2">
      <aside class="flex items-center gap-6 text-xs font-semibold 3xl:text-sm">
        <IconsReport class="w-11 h-11 shrink-0" />
        <p class="leading-normal" v-t="`political_tab1_lower_p`"></p>
      </aside>
    </section>
  </div>
</template>

<script setup>
const chartData = computed(() => {
  const data = useChartsData().saudi_arabia_total_exports;
  if (!data?.length) {
    return null;
  }
  return {
    labels: data.map((el) => el.label),
    datasets: [
      {
        label: "Saudi arabia total Exports",
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
  const data = useChartsData().saudi_arabia_exports_by_country_2;
  if (!data || !data.length) {
    return null;
  }
  return {
    labels: data[0].points.map((el) => el.label),
    datasets: [
      {
        label: data[0].dataset,
        data: data[0].points.map((el) => el.point_value),
        backgroundColor: "#273D6C",
      },
      {
        label: data[1].dataset,
        data: data[1].points.map((el) => el.point_value),
        backgroundColor: "#4266b1",
      },
      {
        label: data[2].dataset,
        data: data[2].points.map((el) => el.point_value),
        backgroundColor: "#769FF5",
      },
      {
        label: data[3].dataset,
        data: data[3].points.map((el) => el.point_value),
        backgroundColor: "#AB0D82",
      },
      {
        label: data[4].dataset,
        data: data[4].points.map((el) => el.point_value),
        backgroundColor: "#BEBEBE",
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
      suggestedMax: 40,
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

const chartOption2 = {
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
      // suggestedMax: 70,
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

<style scoped></style>
