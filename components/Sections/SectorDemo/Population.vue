<template>
  <div class="grid items-start grid-cols-1 gap-10 xl:grid-cols-12">
    <section class="grid gap-5 xl:col-span-7">
      <ChartsBar
        v-if="chartData"
        :chart-data="chartData"
        :chart-options="chartOption"
        footerText="Population(a) (mn) by age groups(b)(c) (%), 2017A-30F"
        chartClass="max-h-[380px]  mx-auto"
      />

      <ChartsDoughnut
        v-if="chartData2"
        :chart-data="chartData2"
        :chart-options="chartOption2"
        footerText="By gender (%), 2022E"
        chartClass="max-h-[300px]  mx-auto"
      />
    </section>

    <section class="grid gap-6 xl:col-span-5">
      <aside class="card-style">
        <div class="grid col-span-1 mt-3 place-content-center">
          <IconsUserBook class="w-9 h-9 text-theme-indigo" />
        </div>
        <div class="col-span-4 text-theme-indigo">
          <ul class="space-y-6 text-sm">
            <li>{{ $t("population_lower_p1") }}</li>
          </ul>
        </div>
      </aside>

      <aside class="card-style">
        <div class="grid col-span-1 mt-3 place-content-center">
          <IconsUsersMenu class="w-9 h-9 text-theme-indigo" />
        </div>
        <div class="col-span-4 text-theme-indigo">
          <ul class="space-y-6 text-sm">
            <li>{{ $t("population_lower_p2") }}</li>
          </ul>
        </div>
      </aside>
      <aside class="card-style">
        <div class="grid col-span-1 mt-3 place-content-center">
          <IconsFemaleGender class="w-8 text-theme-indigo" />
        </div>
        <div class="col-span-4 text-theme-indigo">
          <ul class="space-y-6 text-sm">
            <li>{{ $t("population_lower_p3") }}</li>
          </ul>
        </div>
      </aside>
    </section>
  </div>
</template>

<script setup>
const specificColors = ["#273D6C", "#4266B1", "#769FF5", "#5870a2"];
let chartData = computed(() => {
  const data = useChartsData().population_by_age_groups;
  if (!data || !data.length) {
    return null;
  }
  return {
    labels: data[0].points.map((el) => el.label),
    datasets: data.map((el, index) => ({
      label: el.dataset,
      data: el.points.map((el) => parseFloat(el.point_value)),
      backgroundColor: specificColors[index],
      borderWidth: 0,
      datalabels: {
        formatter: (value, context) => {
          var verticalStackTotal = context.chart.data.datasets.reduce(
            (total, ds) => ds.data[context.dataIndex] + total,
            0
          );
          var percentage = Math.round((value / verticalStackTotal) * 100) + "%";
          return percentage;
        },
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
    })),
  };
});

let chartData2 = computed(() => {
  const data = useChartsData().population_by_gender;
  if (!data || !data.length) {
    return null;
  }
  return {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => parseFloat(item.point_value)),
        backgroundColor: ["#4c99ff", "#002e69"],
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
  },
  scales: {
    y: {
      type: "linear",
      stacked: true,
      suggestedMax: 50,
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

const chartOption2 = ref({
  cutout: "55%",
  responsive: true,
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
      align: "center",
      anchor: "top",
      formatter: (value, context) => {
        return (
          (
            (value /
              context.dataset.data.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              )) *
            100
          ).toFixed(2) + "%"
        );
      },
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

<style scoped>
.card-style {
  @apply w-full grid items-start grid-cols-5 p-4 bg-theme-aqua2 rounded-2xl;
}
</style>
