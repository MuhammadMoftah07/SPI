<template>
  <div>
    <p class="mb-12 text-sm text-theme-indigo">
      {{ $t("companies_p") }}
    </p>
    <section class="grid items-end grid-cols-1 gap-8 gap-y-4 xl:grid-cols-3">
      <div class="">
        <ChartsBarCateg
          v-if="landscapeData"
          :chart-data="landscapeData"
          :chart-options="landscapeOptions"
          footerText="No. of companies(b) (‘000) by employees, 2017A-21A"
          chartClass="max-h-[380px] mx-auto"
        />
      </div>
      <div class="">
        <ChartsStackedBarLine
          v-if="avgData"
          :chart-data="avgData"
          :chart-options="avgOption"
          footerText="Profit(b)(e) (SAR bn) and profit margin (%), 2017A-21A"
          chartClass="max-h-[380px]  mx-auto"
        />
      </div>
      <div class="">
        <ChartsDoughnut
          v-if="doughnutData"
          :chartData="doughnutData"
          :chartOptions="doughnutOptions"
          footerText="Competitive landscape, market share(d) of companies (%), 2021A"
          chartClass="max-h-[380px] !h-60 mx-auto"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps([
  "competitive_landscape",
  "no_employees_avg_salary",
  "no_companies_employees",
]);

//landscape
const specificColors = ["#273D6C", "#4266B1", "#769FF5"];
const landscapeData = computed(() => {
  const data = useChartsData().no_companies_employees;
  if (!data?.length) {
    return null;
  }
  return {
    labels: data[0].points.map((el) => el.label),
    datasets: data.map((el, index) => ({
      label: el.dataset,
      data: el.points.map((el) => parseFloat(el.point_value)),
      // backgroundColor: ["#273D6C"],
      backgroundColor: specificColors[index],
      borderWidth: 0,
    })),
  };
});

const landscapeOptions = {
  minBarLength: 17,
  responsive: true,
  color: "black",
  plugins: {
    legend: {
      display: true,
      labels: {
        padding: 10,
        font: {
          size: 12,
          weight: "500",
        },
        usePointStyle: true,
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
      suggestedMax: 500,
      display: false,
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

//employees_avg_salary
const avgData = computed(() => {
  const data = useChartsData().no_employees_avg_salary;
  if (!data?.length) {
    return null;
  }
  return {
    labels: data[0].points.map((item) => item.label),
    datasets: [
      {
        type: "bar",
        label: data[0].dataset,
        backgroundColor: "#273D6C",
        borderColor: "#273D6C",
        barThickness: 60,
        borderWidth: 1,
        data: data[0].points.map((item) => item.point_value),
        yAxisID: "y",
        order: 2,
      },
      {
        type: "line",
        label: data[1].dataset,
        borderWidth: 1,
        pointRadius: 7,
        pointStyle: "rect",
        borderColor: "#6B4747",
        backgroundColor: "#6B4747",
        fill: false,
        data: data[1].points.map((item) => item.point_value),
        yAxisID: "y1",
        order: 2,
        datalabels: {
          color: "#6B4747",
          anchor: "end",
          align: "end",
          offset: -2,
          font: {
            weight: "bold",
            size: 13,
          },
        },
      },
    ],
  };
});

const avgOption = {
  responsive: true,
  color: "black",
  plugins: {
    legend: {
      display: true,
      // position: "bottom",
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        padding: 10,
        font: {
          size: 11.5,
          weight: "500",
        },
        usePointStyle: true,
      },
    },
    datalabels: {
      align: "end",
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
      type: "linear",
      suggestedMax: 600,
      display: false,
      position: "left",
      beginAtZero: true,
    },
    y1: {
      type: "linear",
      suggestedMax: 40,
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

const doughnutData = computed(() => {
  const data = useChartsData().competitive_landscape;
  if (!data?.length) {
    return null;
  }
  return {
    labels: data.map((el) => el.label),
    datasets: [
      {
        data: data.map((el) => el.point_value),
        backgroundColor: ["#273D6C", "#457BEE"],
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
      formatter: (value) => value + "%",
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
