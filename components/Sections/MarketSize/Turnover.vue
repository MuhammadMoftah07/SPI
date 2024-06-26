<template>
  <div>
    <p class="mb-12 text-sm text-theme-indigo">
      {{ $t("turn_over_p") }}
    </p>

    <section class="grid items-end grid-cols-1 gap-8 gap-y-4 xl:grid-cols-3">
      <div class="">
        <ChartsBar
          v-if="turnoverData"
          :chart-data="turnoverData"
          :chart-options="turnoverOptions"
          footerText="Turnover(b)(c) (SAR bn), 2017A-21A"
          chartClass="max-h-[380px]  mx-auto"
        />
      </div>
      <div class="">
        <ChartsBarCateg
          v-if="redesignCostStructure"
          :chart-data="redesignCostStructure"
          :chart-options="costStructureOptions"
          chartClass="max-h-[380px] mx-auto"
          footer-text="Total cost(b)(d) (SAR bn), by categories (%), 2017A-21A"
        />
      </div>
      <div class="">
        <ChartsStackedBarLine
          v-if="profitabilityData"
          :chart-data="profitabilityData"
          :chart-options="profitabilityOptions"
          footer-text="Profit(b)(e) (SAR bn) and profit margin (%), 2017A-21A"
          chartClass="max-h-[380px]  mx-auto"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps(["turnover", "cost_structure", "profitability"]);

// Market
const turnoverData = computed(() => {
  const data = useChartsData().turnover;
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

const turnoverOptions = {
  responsive: true,
  backgroundColor: "#273D6C",
  color: "black",
  plugins: {
    legend: {
      display: false, // Hides the legend
    },
    datalabels: {
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

//Cost structure data
const specificColors = ["#273D6C", "#4266B1", "#769FF5"];
const redesignCostStructure = computed(() => {
  const data = useChartsData().cost_structure;
  if (!data?.length) {
    return null;
  }
  return {
    labels: data[0].points.map((el) => el.label),
    datasets: data.map((el, index) => ({
      label: el.dataset,
      data: el.points.map((el) => parseFloat(el.point_value)),
      backgroundColor: specificColors[index],
      borderWidth: 0,
    })),
  };
});

const costStructureOptions = {
  minBarLength: 12,
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
      formatter: (value, context) => {
        var verticalStackTotal = context.chart.data.datasets.reduce(
          (total, ds) => ds.data[context.dataIndex] + total,
          0
        );
        var percentage = Math.round((value / verticalStackTotal) * 100) + "%";
        return percentage;
      },
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
      // suggestedMax: 100,
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

//Profitability data
const profitabilityData = computed(() => {
  const data = useChartsData().profitability;
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

const profitabilityOptions = {
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
      suggestedMax: 61,
      display: false,
      position: "left",
      beginAtZero: true,
    },
    y1: {
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
